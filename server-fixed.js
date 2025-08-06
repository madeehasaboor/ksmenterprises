const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files

// Email transporter with improved configuration
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER || 'saboormadiha@gmail.com',
        pass: process.env.EMAIL_PASSWORD || 'dbxh suia sgqc epiv'
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Test email endpoint
app.post('/api/test-email', async (req, res) => {
    try {
        const testMailOptions = {
            from: 'saboormadiha@gmail.com',
            to: 'saboormadiha@gmail.com',
            subject: 'Test Email - KSM Enterprises',
            html: `
                <h2>Test Email</h2>
                <p>This is a test email to verify the email configuration is working.</p>
                <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
                <p>If you receive this email, the email system is working correctly.</p>
            `
        };
        
        await transporter.sendMail(testMailOptions);
        res.json({ success: true, message: 'Test email sent successfully' });
    } catch (error) {
        console.error('Test email error:', error);
        res.status(500).json({ success: false, message: 'Test email failed: ' + error.message });
    }
});

// Order endpoint with improved email handling
app.post('/api/order', async (req, res) => {
    try {
        const { orderSummary, customerInfo } = req.body;
        
        // Always send from your business email for reliability
        const mailOptions = {
            from: 'saboormadiha@gmail.com',
            to: 'saboormadiha@gmail.com',
            subject: `New Order - ${orderSummary.orderNumber}`,
            html: `
                <h2>New Order Received</h2>
                <p><strong>Order Number:</strong> ${orderSummary.orderNumber}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                <p><strong>Time:</strong> ${new Date().toLocaleTimeString()}</p>
                
                <h3>Customer Information:</h3>
                <p><strong>Name:</strong> ${customerInfo.name}</p>
                <p><strong>Phone:</strong> ${customerInfo.phone}</p>
                <p><strong>Address:</strong> ${customerInfo.address}</p>
                ${customerInfo.email ? `<p><strong>Email:</strong> ${customerInfo.email}</p>` : ''}
                <p><strong>Payment Method:</strong> ${
                    customerInfo.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 
                    customerInfo.paymentMethod === 'jazzCash' ? 'JazzCash' : 
                    'Bank Transfer'
                }</p>
                ${customerInfo.paymentMethod === 'jazzCash' && customerInfo.paymentDetails ? `
                <p><strong>Customer JazzCash Number:</strong> ${customerInfo.paymentDetails.jazzCashNumber}</p>
                ${customerInfo.paymentDetails.transactionId ? `<p><strong>Transaction ID:</strong> ${customerInfo.paymentDetails.transactionId}</p>` : ''}
                ` : ''}
                ${customerInfo.paymentMethod === 'bankTransfer' && customerInfo.paymentDetails ? `
                <p><strong>Bank Transaction ID:</strong> ${customerInfo.paymentDetails.bankTransactionId}</p>
                ${customerInfo.paymentDetails.bankName ? `<p><strong>Customer Bank:</strong> ${customerInfo.paymentDetails.bankName}</p>` : ''}
                ` : ''}
                
                <h3>Order Details:</h3>
                <pre>${orderSummary.items}</pre>
                
                <h3>Total Amount: Rs. ${orderSummary.total.toLocaleString()}</h3>
                
                <p>Please process this order and contact the customer for delivery details.</p>
                
                <hr>
                <p><em>This order was placed through the KSM Enterprises website.</em></p>
                ${customerInfo.email ? `<p><em>Customer Email: ${customerInfo.email}</em></p>` : ''}
            `,
            replyTo: customerInfo.email || 'saboormadiha@gmail.com'
        };
        
        await transporter.sendMail(mailOptions);
        
        res.json({ success: true, message: 'Order email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, message: 'Failed to send email: ' + error.message });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        email: 'saboormadiha@gmail.com'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log(`Email configured for: saboormadiha@gmail.com`);
    console.log(`Health check: http://localhost:${port}/api/health`);
    console.log(`Test email: POST http://localhost:${port}/api/test-email`);
}); 