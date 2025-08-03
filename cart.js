// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || [];

document.addEventListener('DOMContentLoaded', function() {
    displayCart();
    updateCartCount();
});

function displayCart() {
    const cartContainer = document.getElementById('cartItems');
    const totalItemsSpan = document.getElementById('totalItems');
    const totalAmountSpan = document.getElementById('totalAmount');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        totalItemsSpan.textContent = '0';
        totalAmountSpan.textContent = 'Rs. 0';
        return;
    }
    
    cartContainer.innerHTML = '';
    let totalItems = 0;
    let totalAmount = 0;
    
    cart.forEach(item => {
        const cartItem = createCartItem(item);
        cartContainer.appendChild(cartItem);
        totalItems += item.quantity;
        totalAmount += item.price * item.quantity;
    });
    
    totalItemsSpan.textContent = totalItems;
    totalAmountSpan.textContent = `Rs. ${totalAmount.toLocaleString()}`;
}

function createCartItem(item) {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    
    cartItem.innerHTML = `
        <div class="cart-item-image">
            <img src="${item.image}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/100x100?text=Product'">
        </div>
        <div class="cart-item-details">
            <h4>${item.name}</h4>
            <p class="cart-item-price">Rs. ${item.price}</p>
            <div class="quantity-controls">
                <button onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
        </div>
        <div class="cart-item-total">
            <p>Rs. ${(item.price * item.quantity).toLocaleString()}</p>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    
    return cartItem;
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            displayCart();
            updateCartCount();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function proceedToCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Show customer form if not already visible
    const customerForm = document.getElementById('customerForm');
    if (customerForm.style.display === 'none') {
        customerForm.style.display = 'block';
        document.querySelector('.checkout-btn').textContent = 'Submit Order';
        return;
    }
    
    // Validate form
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const customerAddress = document.getElementById('customerAddress').value.trim();
    const customerEmail = document.getElementById('customerEmail').value.trim();
    
    if (!customerName || !customerPhone || !customerAddress) {
        alert('Please fill in all required fields (Name, Phone, Address)');
        return;
    }
    
    // Create order summary
    const orderSummary = createOrderSummary();
    
    // Send email with order details
    sendOrderEmail(orderSummary, {
        name: customerName,
        phone: customerPhone,
        address: customerAddress,
        email: customerEmail
    });
    
    // Clear cart
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
    
    // Reset form
    customerForm.style.display = 'none';
    document.querySelector('.checkout-btn').textContent = 'Proceed to Checkout';
    document.getElementById('customerName').value = '';
    document.getElementById('customerPhone').value = '';
    document.getElementById('customerAddress').value = '';
    document.getElementById('customerEmail').value = '';
    
    alert('Order submitted! You will receive a confirmation email shortly.');
}

function createOrderSummary() {
    let totalAmount = 0;
    let itemsList = '';
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        itemsList += `${item.name} x${item.quantity} - Rs. ${itemTotal.toLocaleString()}\n`;
    });
    
    return {
        items: itemsList,
        total: totalAmount,
        orderNumber: 'KSM-' + Date.now()
    };
}

function sendOrderEmail(orderSummary, customerInfo) {
    const subject = `New Order - ${orderSummary.orderNumber}`;
    const body = `
Dear KSM Enterprises,

A new order has been placed:

Order Number: ${orderSummary.orderNumber}
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

CUSTOMER INFORMATION:
Name: ${customerInfo.name}
Phone: ${customerInfo.phone}
Address: ${customerInfo.address}
${customerInfo.email ? `Email: ${customerInfo.email}` : ''}

ORDER DETAILS:
${orderSummary.items}

Total Amount: Rs. ${orderSummary.total.toLocaleString()}

Please process this order and contact the customer for delivery details.

Best regards,
KSM Enterprises E-commerce System
    `;
    
    // Send email using Formspree (free service)
    const formData = new FormData();
    formData.append('subject', subject);
    formData.append('message', body);
    formData.append('email', 'saboormadiha@gmail.com');
    formData.append('order_number', orderSummary.orderNumber);
    formData.append('customer_name', customerInfo.name);
    formData.append('customer_phone', customerInfo.phone);
    formData.append('customer_address', customerInfo.address);
    formData.append('order_details', orderSummary.items);
    formData.append('total_amount', `Rs. ${orderSummary.total.toLocaleString()}`);
    
    fetch('https://formspree.io/f/xayzqkqp', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully');
            alert(`Order submitted successfully!\n\nOrder Number: ${orderSummary.orderNumber}\nCustomer: ${customerInfo.name}\nPhone: ${customerInfo.phone}\n\nOrder details have been sent to saboormadiha@gmail.com`);
        } else {
            throw new Error('Email sending failed');
        }
    })
    .catch(error => {
        console.error('Email sending failed:', error);
        // Fallback to WhatsApp
        const whatsappMessage = `New Order - ${orderSummary.orderNumber}%0A%0ACustomer: ${customerInfo.name}%0APhone: ${customerInfo.phone}%0AAddress: ${customerInfo.address}%0A%0AOrder Details:%0A${orderSummary.items.replace(/\n/g, '%0A')}%0A%0ATotal: Rs. ${orderSummary.total.toLocaleString()}`;
        const whatsappLink = `https://wa.me/+923234890184?text=${whatsappMessage}`;
        window.open(whatsappLink, '_blank');
        alert(`Order submitted successfully!\n\nOrder Number: ${orderSummary.orderNumber}\nCustomer: ${customerInfo.name}\nPhone: ${customerInfo.phone}\n\nOrder details have been sent to WhatsApp. Please check your WhatsApp for complete order information.`);
    });
} 
