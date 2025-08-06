const express = require('express');
const cors = require('cors');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes

const path = require('path');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio_slideshow.html'));
});

app.use('/api/products', productRoutes);

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3001');
});
