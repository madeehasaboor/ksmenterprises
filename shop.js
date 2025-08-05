// Shop functionality
// Import products from the comprehensive database
let products = [];

// Initialize shop
document.addEventListener('DOMContentLoaded', function() {
    console.log('Shop page loaded');
    try {
        // Load products from the database
        loadProductsFromDatabase();
        displayProducts(products);
        updateCartCount();
        console.log('Shop initialized successfully');
    } catch (error) {
        console.error('Error initializing shop:', error);
    }
});

function loadProductsFromDatabase() {
    // Get all products from the database
    if (typeof getAllProducts === 'function') {
        products = getAllProducts();
    } else {
        // Fallback to default products if database not loaded
        products = [
            {
                id: "f1_wax_230g",
                name: "Formula 1 Wax 230g",
                price: 1400,
                category: "wax",
                brand: "Formula 1",
                image: "https://via.placeholder.com/300x200/1a1a1a/fff?text=Formula+1+Wax+230g",
                description: "Soft Carnauba Polish U.S.A - Premium car wax protection"
            },
            {
                id: "aim_dashboard_new_car",
                name: "AIM Dashboard Wax - New Car",
                price: 1125,
                category: "protectant",
                brand: "AIM",
                image: "https://via.placeholder.com/300x200/1a1a1a/fff?text=AIM+Dashboard+New+Car",
                description: "New Car Scent Dash Board Wax U.S.A"
            },
            {
                id: "wd40_100ml",
                name: "WD-40 100ML",
                price: 600,
                category: "lubricant",
                brand: "WD-40",
                image: "https://via.placeholder.com/300x200/1a1a1a/fff?text=WD-40+100ml",
                description: "Multi-purpose lubricant 100ml"
            },
            {
                id: "dtr_cosmic_200g",
                name: "DTR Cosmic 200G",
                price: 1300,
                category: "wax",
                brand: "DTR",
                image: "https://via.placeholder.com/300x200/1a1a1a/fff?text=DTR+Cosmic+200g",
                description: "Professional car wax 200g"
            }
        ];
    }
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayProducts(productsToShow) {
    const container = document.getElementById('shopProducts');
    if (!container) {
        console.error('Shop products container not found');
        return;
    }
    
    container.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=Product'">
        </div>
        <div class="product-info">
            <div class="product-brand">${product.brand}</div>
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">Rs. ${product.price.toLocaleString()}</p>
            <button class="add-to-cart-btn" onclick="addToCart('${product.id}')">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
        cartCount.textContent = totalItems;
    }
}

function filterProducts() {
    const filterSelect = document.getElementById('filterSelect');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    let filteredProducts = products;
    
    // Apply brand filter
    if (filterSelect && filterSelect.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.brand.toLowerCase() === filterSelect.value.toLowerCase()
        );
    }
    
    // Apply category filter
    if (categoryFilter && categoryFilter.value !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category.toLowerCase() === categoryFilter.value.toLowerCase()
        );
    }
    
    // Apply search filter
    if (searchInput && searchInput.value.trim() !== '') {
        const searchTerm = searchInput.value.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.brand.toLowerCase().includes(searchTerm)
        );
    }
    
    displayProducts(filteredProducts);
}

function searchProducts() {
    filterProducts();
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize filters if they exist
document.addEventListener('DOMContentLoaded', function() {
    const filterSelect = document.getElementById('filterSelect');
    const categoryFilter = document.getElementById('categoryFilter');
    const searchInput = document.getElementById('searchInput');
    
    if (filterSelect) {
        filterSelect.addEventListener('change', filterProducts);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', searchProducts);
    }
}); 
