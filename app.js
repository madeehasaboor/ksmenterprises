// Global variables
let products = [];

// Portfolio items data
const portfolioItems = [
    // Professional Car Care Products (only items with existing images)
    {
        id: 1,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.36 AM.jpeg"
    },
    {
        id: 2,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.36 AM (1).jpeg"
    },
    {
        id: 3,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.36 AM (2).jpeg"
    },
    {
        id: 4,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.37 AM.jpeg"
    },
    {
        id: 5,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.37 AM (1).jpeg"
    },
    {
        id: 6,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.37 AM (2).jpeg"
    },
    {
        id: 7,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.38 AM.jpeg"
    },
    {
        id: 8,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.38 AM (1).jpeg"
    },
    {
        id: 9,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.38 AM (2).jpeg"
    },
    {
        id: 10,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.39 AM.jpeg"
    },
    {
        id: 11,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.39 AM (1).jpeg"
    },
    {
        id: 12,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.39 AM (2).jpeg"
    },
    {
        id: 13,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.40 AM.jpeg"
    },
    {
        id: 14,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.40 AM (1).jpeg"
    },
    {
        id: 15,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.40 AM (2).jpeg"
    },
    {
        id: 16,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.41 AM.jpeg"
    },
    {
        id: 17,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.41 AM (1).jpeg"
    },
    {
        id: 18,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.41 AM (2).jpeg"
    },
    {
        id: 19,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.42 AM.jpeg"
    },
    {
        id: 20,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.42 AM (1).jpeg"
    },
    {
        id: 21,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.42 AM (2).jpeg"
    },
    {
        id: 22,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.43 AM.jpeg"
    },
    {
        id: 23,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.43 AM (1).jpeg"
    },
    {
        id: 24,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.43 AM (2).jpeg"
    },
    {
        id: 25,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.44 AM.jpeg"
    },
    {
        id: 26,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.44 AM (1).jpeg"
    },
    {
        id: 27,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.44 AM (2).jpeg"
    },
    {
        id: 28,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.45 AM.jpeg"
    },
    {
        id: 29,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.45 AM (1).jpeg"
    },
    {
        id: 30,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.45 AM (2).jpeg"
    },
    {
        id: 31,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.46 AM.jpeg"
    },
    {
        id: 32,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.46 AM (1).jpeg"
    },
    {
        id: 33,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.46 AM (2).jpeg"
    },
    {
        id: 34,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.47 AM.jpeg"
    },
    {
        id: 35,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.47 AM (1).jpeg"
    },
    {
        id: 36,
        image: "products/WhatsApp Image 2025-08-01 at 11.11.47 AM (2).jpeg"
    }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    try {
        console.log('Initializing KSM Enterprise Portfolio...');
        loadPortfolio();
        setupEventListeners();
        console.log('Portfolio initialized successfully');
    } catch (error) {
        console.error('Error initializing portfolio:', error);
        const portfolioGrid = document.getElementById('productsGrid');
        if (portfolioGrid) {
            portfolioGrid.innerHTML = '<p style="text-align: center; color: #ff6b6b; font-size: 1.2rem; grid-column: 1 / -1;">Error loading portfolio. Please refresh the page.</p>';
        }
    }
}

function loadPortfolio() {
    // Load portfolio items
    products = portfolioItems;
    console.log('Total portfolio items loaded:', products.length);
    displayPortfolio(products);
}

function displayPortfolio(itemsToShow) {
    const portfolioGrid = document.getElementById('productsGrid');
    const itemCounter = document.getElementById('productCounter');
    portfolioGrid.innerHTML = '';
    
    console.log('Displaying portfolio items:', itemsToShow.length);
    
    // Update item counter
    if (itemCounter) {
        itemCounter.textContent = `Showing ${itemsToShow.length} portfolio items`;
    }

    itemsToShow.forEach(item => {
        const portfolioCard = createPortfolioCard(item);
        portfolioGrid.appendChild(portfolioCard);
    });
    
    // Add a message if no items are found
    if (itemsToShow.length === 0) {
        portfolioGrid.innerHTML = '<p style="text-align: center; color: #ffffff; font-size: 1.2rem; grid-column: 1 / -1;">No portfolio items found. Please try a different search term.</p>';
        if (itemCounter) {
            itemCounter.textContent = 'No portfolio items found';
        }
    }
}

function createPortfolioCard(item) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${item.image}" alt="Portfolio Item" onerror="this.src='https://via.placeholder.com/300x200?text=Portfolio+Item'">
            <div class="product-actions">
                <button class="action-btn view-btn" onclick="viewPortfolioItem(${item.id})" title="View Details">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
    `;
    
    return card;
}

function setupEventListeners() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function viewPortfolioItem(itemId) {
    const item = products.find(p => p.id === itemId);
    if (item) {
        alert(`Portfolio Item ID: ${item.id}\nImage: ${item.image}`);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 1002;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
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

function scrollToPortfolio() {
    const portfolioSection = document.getElementById('products');
    portfolioSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// API functions (for when you connect to your backend)
async function fetchPortfolioFromAPI() {
    try {
        const response = await fetch('http://localhost:3001/api/portfolio');
        if (response.ok) {
            const data = await response.json();
            products = data;
            displayPortfolio(products);
        } else {
            console.error('Failed to fetch portfolio');
            // Fallback to sample data
            loadPortfolio();
        }
    } catch (error) {
        console.error('Error fetching portfolio:', error);
        // Fallback to sample data
        loadPortfolio();
    }
}

// Uncomment this line when your backend is ready
// fetchPortfolioFromAPI(); 