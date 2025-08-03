// Shop functionality
let products = [
    {
        id: 1,
        name: "Formula 1 Car Wash",
        price: 850,
        category: "formula1",
        image: "products/1.jpeg",
        description: "Professional car wash solution"
    },
    {
        id: 2,
        name: "AIM Car Polish",
        price: 1200,
        category: "aim",
        image: "products/2.jpeg",
        description: "High-quality car polish"
    },
    {
        id: 3,
        name: "WD-40 Multi-Purpose",
        price: 450,
        category: "wd40",
        image: "products/3.jpeg",
        description: "Versatile lubricant and cleaner"
    },
    {
        id: 4,
        name: "Formula 1 Wax",
        price: 950,
        category: "formula1",
        image: "products/4.jpeg",
        description: "Premium car wax protection"
    },
    {
        id: 5,
        name: "AIM Interior Cleaner",
        price: 750,
        category: "aim",
        image: "products/5.jpeg",
        description: "Interior cleaning solution"
    },
    {
        id: 6,
        name: "WD-40 Specialist",
        price: 550,
        category: "wd40",
        image: "products/photo (6).jpeg",
        description: "Specialized cleaning formula"
    }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Initialize shop
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    updateCartCount();
});

function displayProducts(productsToShow) {
    const container = document.getElementById('shopProducts');
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
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <p class="product-price">Rs. ${product.price}</p>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        showNotification('Product added to cart!');
    }
}

function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function filterProducts() {
    const category = document.getElementById('categoryFilter').value;
    const filteredProducts = category ? products.filter(p => p.category === category) : products;
    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(p => 
        p.name.toLowerCase().includes(searchTerm) || 
        p.description.toLowerCase().includes(searchTerm)
    );
    displayProducts(filteredProducts);
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
} 