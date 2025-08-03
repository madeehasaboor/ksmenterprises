// Global variables
let products = [];

// Portfolio items data
const portfolioItems = [
    // Professional Car Care Products
    {
        id: 1,
        image: "products/1.jpeg"
    },
    {
        id: 2,
        image: "products/2.jpeg"
    },
    {
        id: 3,
        image: "products/3.jpeg"
    },
    {
        id: 4,
        image: "products/4.jpeg"
    },
    {
        id: 5,
        image: "products/5.jpeg"
    },
    {
        id: 6,
        image: "products/photo (6).jpeg"
    },
    {
        id: 7,
        image: "products/photo (7).jpeg"
    },
    {
        id: 8,
        image: "products/photo (8).jpeg"
    },
    {
        id: 9,
        image: "products/photo (9).jpeg"
    },
    {
        id: 10,
        image: "products/photo (10).jpeg"
    },
    {
        id: 11,
        image: "products/photo (11).jpeg"
    },
    {
        id: 12,
        image: "products/photo (12).jpeg"
    },
    {
        id: 13,
        image: "products/photo (13).jpeg"
    },
    {
        id: 14,
        image: "products/photo (14).jpeg"
    },
    {
        id: 15,
        image: "products/photo (15).jpeg"
    },
    {
        id: 16,
        image: "products/photo (16).jpeg"
    },
    {
        id: 17,
        image: "products/photo (17).jpeg"
    },
    {
        id: 18,
        image: "products/photo (18).jpeg"
    },
    {
        id: 19,
        image: "products/photo (19).jpeg"
    },
    {
        id: 20,
        image: "products/photo (20).jpeg"
    },
    {
        id: 21,
        image: "products/photo (21).jpeg"
    },
    {
        id: 22,
        image: "products/photo (22).jpeg"
    },
    {
        id: 23,
        image: "products/photo (23).jpeg"
    },
    {
        id: 24,
        image: "products/photo (24).jpeg"
    },
    {
        id: 25,
        image: "products/photo (25).jpeg"
    },
    {
        id: 26,
        image: "products/photo (26).jpeg"
    },
    {
        id: 27,
        image: "products/photo (27).jpeg"
    },
    {
        id: 28,
        image: "products/photo (28).jpeg"
    },
    {
        id: 29,
        image: "products/photo (29).jpeg"
    },
    {
        id: 30,
        image: "products/photo (30).jpeg"
    },
    {
        id: 31,
        image: "products/photo (31).jpeg"
    },
    {
        id: 32,
        image: "products/photo (32).jpeg"
    },
    {
        id: 33,
        image: "products/photo (33).jpeg"
    },
    {
        id: 34,
        image: "products/photo (34).jpeg"
    },
    {
        id: 35,
        image: "products/photo (35).jpeg"
    },
    {
        id: 36,
        image: "products/photo (36).jpeg"
    },
    {
        id: 37,
        image: "products/photo (37).jpeg"
    },
    {
        id: 38,
        image: "products/photo (38).jpeg"
    },
    {
        id: 39,
        image: "products/photo (39).jpeg"
    },
    {
        id: 40,
        image: "products/photo (40).jpeg"
    },
    {
        id: 41,
        image: "products/photo (41).jpeg"
    },
    {
        id: 42,
        image: "products/photo (42).jpeg"
    },
    {
        id: 43,
        image: "products/photo (43).jpeg"
    },
    {
        id: 44,
        image: "products/photo (44).jpeg"
    },
    {
        id: 45,
        image: "products/photo (45).jpeg"
    },
    {
        id: 46,
        image: "products/photo (46).jpeg"
    },
    {
        id: 47,
        image: "products/photo (47).jpeg"
    },
    {
        id: 48,
        image: "products/photo (48).jpeg"
    },
    {
        id: 49,
        image: "products/photo (49).jpeg"
    },
    {
        id: 50,
        image: "products/photo (50).jpeg"
    },
    {
        id: 51,
        image: "products/photo (51).jpeg"
    },
    {
        id: 52,
        image: "products/photo (52).jpeg"
    },
    {
        id: 53,
        image: "products/photo (53).jpeg"
    },
    {
        id: 54,
        image: "products/photo (54).jpeg"
    },
    {
        id: 55,
        image: "products/photo (55).jpeg"
    },
    {
        id: 56,
        image: "products/photo (56).jpeg"
    },
    {
        id: 57,
        image: "products/photo (57).jpeg"
    },
    {
        id: 58,
        image: "products/photo (58).jpeg"
    },
    {
        id: 59,
        image: "products/photo (59).jpeg"
    },
    {
        id: 60,
        image: "products/photo (60).jpeg"
    },
    {
        id: 61,
        image: "products/photo (61).jpeg"
    },
    {
        id: 62,
        image: "products/photo (62).jpeg"
    },
    {
        id: 63,
        image: "products/photo (63).jpeg"
    },
    {
        id: 64,
        image: "products/photo (64).jpeg"
    },
    {
        id: 65,
        image: "products/photo (65).jpeg"
    },
    {
        id: 66,
        image: "products/photo (66).jpeg"
    },
    {
        id: 67,
        image: "products/photo (67).jpeg"
    },
    {
        id: 68,
        image: "products/photo (68).jpeg"
    },
    {
        id: 69,
        image: "products/photo (69).jpeg"
    },
    {
        id: 70,
        image: "products/photo (70).jpeg"
    },
    {
        id: 71,
        image: "products/photo (71).jpeg"
    },
    {
        id: 72,
        image: "products/photo (72).jpeg"
    },
    {
        id: 73,
        image: "products/photo (73).jpeg"
    },
    {
        id: 74,
        image: "products/photo (74).jpeg"
    },
    {
        id: 75,
        image: "products/photo (75).jpeg"
    },
    {
        id: 76,
        image: "products/photo (76).jpeg"
    },
    {
        id: 77,
        image: "products/photo (77).jpeg"
    },
    {
        id: 78,
        image: "products/photo (78).jpeg"
    },
    {
        id: 79,
        image: "products/photo (79).jpeg"
    },
    {
        id: 80,
        image: "products/photo (80).jpeg"
    },
    {
        id: 81,
        image: "products/photo (81).jpeg"
    },
    {
        id: 82,
        image: "products/photo (82).jpeg"
    },
    {
        id: 83,
        image: "products/photo (83).jpeg"
    },
    {
        id: 84,
        image: "products/photo (84).jpeg"
    },
    {
        id: 85,
        image: "products/photo (85).jpeg"
    },
    {
        id: 86,
        image: "products/photo (86).jpeg"
    },
    {
        id: 87,
        image: "products/photo (87).jpeg"
    },
    {
        id: 88,
        image: "products/photo (88).jpeg"
    },
    {
        id: 89,
        image: "products/photo (89).jpeg"
    },
    {
        id: 91,
        image: "products/91.jpeg"
    },
    {
        id: 92,
        image: "products/92.jpeg"
    },
    {
        id: 93,
        image: "products/93.jpeg"
    },
    {
        id: 94,
        image: "products/94.jpeg"
    },
    {
        id: 95,
        image: "products/95.jpeg"
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
    
    const nameDisplay = item.name ? `<div class="product-name">${item.name}</div>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${item.image}" alt="Portfolio Item" onerror="this.src='https://via.placeholder.com/300x200?text=Portfolio+Item'">
            <div class="product-actions">
                <button class="action-btn view-btn" onclick="viewPortfolioItem(${item.id})" title="View Details">
                    <i class="fas fa-eye"></i>
                </button>
            </div>
        </div>
        ${nameDisplay}
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