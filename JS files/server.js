const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'auto_champain_db',
  port: process.env.DB_PORT || 3306
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('✅ Connected to MySQL database');
});

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index', 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

app.get('/shop', (req, res) => {
  res.sendFile(path.join(__dirname, 'shop.html'));
});

app.get('/cart', (req, res) => {
  res.sendFile(path.join(__dirname, 'cart.html'));
});

// API Routes for Products
app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM products WHERE active = 1';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching products:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

app.get('/api/products/:category', (req, res) => {
  const category = req.params.category;
  const query = 'SELECT * FROM products WHERE category = ? AND active = 1';
  db.query(query, [category], (err, results) => {
    if (err) {
      console.error('Error fetching products by category:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

// API Routes for Orders
app.post('/api/orders', (req, res) => {
  const { customerName, customerPhone, customerAddress, customerEmail, items, totalAmount, paymentMethod, paymentStatus } = req.body;
  
  const orderQuery = `
    INSERT INTO orders (customer_name, customer_phone, customer_address, customer_email, total_amount, status, payment_method, payment_status, created_at) 
    VALUES (?, ?, ?, ?, ?, 'pending', ?, ?, NOW())
  `;
  
  db.query(orderQuery, [customerName, customerPhone, customerAddress, customerEmail, totalAmount, paymentMethod || null, paymentStatus || 'pending'], (err, result) => {
    if (err) {
      console.error('Error creating order:', err);
      res.status(500).json({ error: 'Failed to create order' });
      return;
    }
    
    const orderId = result.insertId;
    
    // Insert order items
    const itemsQuery = 'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)';
    
    const insertPromises = (items || []).map(item => {
      return new Promise((resolve, reject) => {
        db.query(itemsQuery, [orderId, item.id, item.quantity, item.price], (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    });
    
    Promise.all(insertPromises)
      .then(() => {
        res.json({ 
          success: true, 
          orderId: orderId,
          message: 'Order created successfully' 
        });
      })
      .catch(err => {
        console.error('Error inserting order items:', err);
        res.status(500).json({ error: 'Failed to create order items' });
      });
  });
});

// API Routes for Cart
app.get('/api/cart/:sessionId', (req, res) => {
  const sessionId = req.params.sessionId;
  const query = 'SELECT * FROM cart WHERE session_id = ?';
  db.query(query, [sessionId], (err, results) => {
    if (err) {
      console.error('Error fetching cart:', err);
      res.status(500).json({ error: 'Database error' });
      return;
    }
    res.json(results);
  });
});

app.post('/api/cart', (req, res) => {
  const { sessionId, productId, quantity, price } = req.body;
  
  const query = `
    INSERT INTO cart (session_id, product_id, quantity, price, created_at) 
    VALUES (?, ?, ?, ?, NOW())
    ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
  `;
  
  db.query(query, [sessionId, productId, quantity, price], (err, result) => {
    if (err) {
      console.error('Error adding to cart:', err);
      res.status(500).json({ error: 'Failed to add to cart' });
      return;
    }
    res.json({ success: true, message: 'Added to cart' });
  });
});

// Account management endpoints
app.get('/api/accounts/:phone', (req, res) => {
  const { phone } = req.params;
  const query = 'SELECT * FROM accounts WHERE customer_phone = ?';
  db.query(query, [phone], (err, results) => {
    if (err) {
      console.error('Error fetching account:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) return res.status(404).json({ error: 'Account not found' });
    return res.json(results[0]);
  });
});

app.post('/api/accounts', (req, res) => {
  const { customerPhone, creditLimit, autoRepayEnabled, repaymentMethod, repaymentTarget } = req.body;
  if (!customerPhone) return res.status(400).json({ error: 'customerPhone is required' });

  const upsertQuery = `
    INSERT INTO accounts (customer_phone, credit_limit, auto_repay_enabled, repayment_method, repayment_target)
    VALUES (?, ?, ?, ?, ?)
    ON DUPLICATE KEY UPDATE
      credit_limit = VALUES(credit_limit),
      auto_repay_enabled = VALUES(auto_repay_enabled),
      repayment_method = VALUES(repayment_method),
      repayment_target = VALUES(repayment_target)
  `;

  db.query(upsertQuery, [customerPhone, creditLimit || 0, !!autoRepayEnabled, repaymentMethod || null, repaymentTarget || null], (err) => {
    if (err) {
      console.error('Error upserting account:', err);
      return res.status(500).json({ error: 'Failed to upsert account' });
    }
    return res.json({ success: true });
  });
});

// Charge account and trigger auto-repay if limit reached
app.post('/api/accounts/:phone/charge', (req, res) => {
  const { phone } = req.params;
  const { amount, reason } = req.body;
  if (!amount || amount <= 0) return res.status(400).json({ error: 'amount must be > 0' });

  // Fetch current account
  const selectQuery = 'SELECT * FROM accounts WHERE customer_phone = ? FOR UPDATE';
  db.beginTransaction((txErr) => {
    if (txErr) {
      console.error('Error starting transaction:', txErr);
      return res.status(500).json({ error: 'Transaction error' });
    }

    db.query(selectQuery, [phone], (selErr, results) => {
      if (selErr) {
        db.rollback(() => {});
        console.error('Error selecting account:', selErr);
        return res.status(500).json({ error: 'Database error' });
      }

      if (results.length === 0) {
        db.rollback(() => {});
        return res.status(404).json({ error: 'Account not found' });
      }

      const account = results[0];
      const newBalance = Number(account.outstanding_balance) + Number(amount);

      const updateBalanceQuery = 'UPDATE accounts SET outstanding_balance = ? WHERE customer_phone = ?';
      db.query(updateBalanceQuery, [newBalance, phone], (updErr) => {
        if (updErr) {
          db.rollback(() => {});
          console.error('Error updating balance:', updErr);
          return res.status(500).json({ error: 'Failed to update balance' });
        }

        const shouldAutoRepay = account.auto_repay_enabled && newBalance >= Number(account.credit_limit);
        if (!shouldAutoRepay) {
          return db.commit((commitErr) => {
            if (commitErr) {
              db.rollback(() => {});
              console.error('Commit error:', commitErr);
              return res.status(500).json({ error: 'Commit failed' });
            }
            return res.json({ success: true, newBalance, autoRepayTriggered: false });
          });
        }

        // Auto-repay: repay down to 80% of limit (configurable strategy)
        const targetBalance = Math.max(0, Math.floor(Number(account.credit_limit) * 0.8 * 100) / 100);
        const repayAmount = Math.max(0, Math.round((newBalance - targetBalance) * 100) / 100);

        const insertRepayment = 'INSERT INTO repayments (customer_phone, amount, method, target) VALUES (?, ?, ?, ?)';
        const updateAfterRepay = 'UPDATE accounts SET outstanding_balance = ? WHERE customer_phone = ?';

        db.query(insertRepayment, [phone, repayAmount, account.repayment_method || null, account.repayment_target || null], (repayErr) => {
          if (repayErr) {
            db.rollback(() => {});
            console.error('Error inserting repayment:', repayErr);
            return res.status(500).json({ error: 'Failed to record repayment' });
          }

          const finalBalance = Math.max(0, Math.round((newBalance - repayAmount) * 100) / 100);
          db.query(updateAfterRepay, [finalBalance, phone], (postUpdErr) => {
            if (postUpdErr) {
              db.rollback(() => {});
              console.error('Error updating balance after repay:', postUpdErr);
              return res.status(500).json({ error: 'Failed to update balance after repay' });
            }

            db.commit((commitErr2) => {
              if (commitErr2) {
                db.rollback(() => {});
                console.error('Commit error:', commitErr2);
                return res.status(500).json({ error: 'Commit failed' });
              }
              return res.json({ success: true, newBalance: finalBalance, autoRepayTriggered: true, repayAmount, reason: reason || null });
            });
          });
        });
      });
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Auto Champain server running on port ${PORT}`);
  console.log(`📱 Access your site at: http://localhost:${PORT}`);
  console.log(`🛍️  API available at: http://localhost:${PORT}/api`);
}); 