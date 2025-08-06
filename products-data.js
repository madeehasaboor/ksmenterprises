// Comprehensive Product Database for KSM Enterprises
// Complete product catalog with all categories

const productsDatabase = {
    // Microfibre Products
    microfibre: [
        {
            id: "microfibre_cloth_xlarge",
            name: "MICROFIBRE CLOTH X LARGE",
            price: 400,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (1).jpeg",
            description: "Extra large microfiber cloth for professional cleaning"
        },
        {
            id: "microfibre_towel_xlarge",
            name: "MICROFIBRE TOWEL X LARGE",
            price: 600,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (2).jpeg",
            description: "Extra large microfiber towel for superior drying"
        },
        {
            id: "microfibre_glass_cleaner",
            name: "MICROFIBRE GLASS CLEANER",
            price: 350,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (3).jpeg",
            description: "Specialized microfiber for streak-free glass cleaning"
        },
        {
            id: "microfibre_designed_cloth_mix",
            name: "MICROFIBRE DESIGNED CLOTH MIX",
            price: 550,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (4).jpeg",
            description: "Designer microfiber cloth mix for various surfaces"
        },
        {
            id: "microfibre_cloth_lq",
            name: "MICROFIBRE CLOTH (LQ)",
            price: 250,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (5).jpeg",
            description: "Light quality microfiber cloth"
        },
        {
            id: "microfibre_towel_small_lq",
            name: "MICROFIBRE TOWEL SMALL (LQ)",
            price: 250,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (1).jpeg",
            description: "Small light quality microfiber towel"
        },
        {
            id: "microfibre_towel_large_lq",
            name: "MICROFIBRE TOWEL LARGE (LQ)",
            price: 300,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (2).jpeg",
            description: "Large light quality microfiber towel"
        },
        {
            id: "aim_microfibre_cloth",
            name: "AIM MICROFIBRE CLOTH",
            price: 350,
            category: "microfibre",
            brand: "AIM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (3).jpeg",
            description: "AIM brand microfiber cloth for professional use"
        },
        {
            id: "aim_microfibre_towel_large",
            name: "AIM MICROFIBRE TOWEL LARGE",
            price: 500,
            category: "microfibre",
            brand: "AIM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (4).jpeg",
            description: "AIM brand large microfiber towel"
        },
        {
            id: "aim_microfibre_towel_small",
            name: "AIM MICROFIBRE TOWEL SMALL",
            price: 400,
            category: "microfibre",
            brand: "AIM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (5).jpeg",
            description: "AIM brand small microfiber towel"
        },
        {
            id: "microfibre_cloth_pack_2",
            name: "MICROFIBRE CLOTH PACK OF 2",
            price: 700,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (1).jpeg",
            description: "Pack of 2 microfiber cloths for value"
        },
        {
            id: "microfibre_towel_pack_2",
            name: "MICROFIBRE TOWEL PACK OF 2",
            price: 1050,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (2).jpeg",
            description: "Pack of 2 microfiber towels for value"
        },
        {
            id: "microfibre_cloth_pack_4",
            name: "MICROFIBRE CLOTH PACK OF 4",
            price: 1350,
            category: "microfibre",
            brand: "KSM",
            image: "products/MICRO FIBER CLOTHES/MICROFIBER TOWEL (3).jpeg",
            description: "Pack of 4 microfiber cloths for maximum value"
        }
    ],
    // WD-40 Products
    wd40: [
        {
            id: "wd40_50ml",
            name: "WD-40 50ML",
            price: 375,
            category: "wd40",
            brand: "WD-40",
            image: "products/CLEANERS/CAR CLEANNERS (1).jpeg",
            description: "WD-40 multi-purpose lubricant 50ml"
        },
        {
            id: "wd40_100ml",
            name: "WD-40 100ML",
            price: 600,
            category: "wd40",
            brand: "WD-40",
            image: "products/CLEANERS/CAR CLEANNERS (2).jpeg",
            description: "WD-40 multi-purpose lubricant 100ml"
        },
        {
            id: "wd40_200ml",
            name: "WD-40 200ML",
            price: 800,
            category: "wd40",
            brand: "WD-40",
            image: "products/CLEANERS/CAR CLEANNERS (3).jpeg",
            description: "WD-40 multi-purpose lubricant 200ml"
        },
        {
            id: "wd40_330ml",
            name: "WD-40 330ML",
            price: 1100,
            category: "wd40",
            brand: "WD-40",
            image: "products/CLEANERS/CAR CLEANNERS (4).jpeg",
            description: "WD-40 multi-purpose lubricant 330ml"
        },
        {
            id: "wd40_440ml",
            name: "WD-40 440ML",
            price: 1250,
            category: "wd40",
            brand: "WD-40",
            image: "products/CLEANERS/CAR CLEANNERS (5).jpeg",
            description: "WD-40 multi-purpose lubricant 440ml"
        }
    ],
    // Waxes & Protectants
    waxes: [
        {
            id: "wax_230g_soft_carnauba",
            name: "Wax 230g (Soft Carnauba USA)",
            price: 1400,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (1).jpeg",
            description: "Soft Carnauba wax 230g for ultimate shine"
        },
        {
            id: "wax_340g_soft_carnauba",
            name: "Wax 340g (Soft Carnauba USA)",
            price: 1850,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (2).jpeg",
            description: "Soft Carnauba wax 340g for professional use"
        },
        {
            id: "liquid_wax_carnauba",
            name: "Liquid Wax (Carnauba USA)",
            price: 1400,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (3).jpeg",
            description: "Liquid Carnauba wax for easy application"
        },
        {
            id: "fast_wax_spray",
            name: "Fast Wax (Spray)",
            price: 1500,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (4).jpeg",
            description: "Quick spray wax for fast application"
        },
        {
            id: "dry_clean_upholstery_cleaner",
            name: "Dry Clean Upholstery Cleaner (USA)",
            price: 1500,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (5).jpeg",
            description: "Professional upholstery cleaner"
        },
        {
            id: "mr_leather",
            name: "Mr. Leather",
            price: 1625,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (6).jpeg",
            description: "Professional leather conditioner"
        },
        {
            id: "mr_leather_small",
            name: "Mr. Leather Small",
            price: 1400,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (7).jpeg",
            description: "Small size leather conditioner"
        },
        {
            id: "bug_tar_remover",
            name: "Bug and Tar Remover",
            price: 1950,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (8).jpeg",
            description: "Effective bug and tar removal solution"
        },
        {
            id: "glass_cleaner_rain_repellent",
            name: "Glass Cleaner with Rain Repellent",
            price: 1750,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (9).jpeg",
            description: "Glass cleaner with rain repellent properties"
        },
        {
            id: "glass_cleaner",
            name: "Glass Cleaner",
            price: 1750,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (10).jpeg",
            description: "Professional glass cleaner"
        },
        {
            id: "wheel_tyre_clean",
            name: "Wheel Tyre Clean",
            price: 1750,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (11).jpeg",
            description: "Specialized wheel and tire cleaner"
        },
        {
            id: "wheel_rim_cleaner",
            name: "Wheel Rim Cleaner",
            price: 1750,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (12).jpeg",
            description: "Professional wheel rim cleaner"
        },
        {
            id: "black_gold_tyre_cleaner",
            name: "Black Gold Tyre Cleaner",
            price: 1750,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (13).jpeg",
            description: "Premium tire cleaning solution"
        },
        {
            id: "protectant_new_car",
            name: "Protectant New Car",
            price: 1125,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (14).jpeg",
            description: "Protectant specifically for new cars"
        },
        {
            id: "protectant_citrus",
            name: "Protectant Citrus",
            price: 1125,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (15).jpeg",
            description: "Citrus scented protectant"
        },
        {
            id: "protectant_strawberry",
            name: "Protectant Strawberry",
            price: 1125,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (16).jpeg",
            description: "Strawberry scented protectant"
        },
        {
            id: "protectant_vanilla",
            name: "Protectant Vanilla",
            price: 1125,
            category: "waxes",
            brand: "KSM",
            image: "products/CAR WASH & WAX/CAR WASH & WAX (17).jpeg",
            description: "Vanilla scented protectant"
        }
    ],
    // Spray Paints & Cleaners
    sprayPaints: [
        {
            id: "spray_paint_bright_gold",
            name: "Spray Paint Bright Gold",
            price: 450,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (1).jpeg",
            description: "Bright gold spray paint for automotive use"
        },
        {
            id: "spray_paint_bright_chrome",
            name: "Spray Paint Bright Chrome",
            price: 450,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (2).jpeg",
            description: "Bright chrome spray paint for automotive use"
        },
        {
            id: "dashboard_450ml",
            name: "DashBoard 450ml",
            price: 375,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (3).jpeg",
            description: "Dashboard cleaner 450ml"
        },
        {
            id: "dashboard_brown_450ml",
            name: "DashBoard Brown 450ml",
            price: 400,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (4).jpeg",
            description: "Brown dashboard cleaner 450ml"
        },
        {
            id: "carb_cleaner_medium_450ml",
            name: "Carb Cleaner Medium 450ml",
            price: 350,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (5).jpeg",
            description: "Medium carburetor cleaner 450ml"
        },
        {
            id: "dashboard_small",
            name: "DASHBOARD SMALL",
            price: 275,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (6).jpeg",
            description: "Small dashboard cleaner"
        },
        {
            id: "foamy_cleaner",
            name: "Foamy Cleaner",
            price: 425,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (7).jpeg",
            description: "Foamy cleaning solution"
        },
        {
            id: "tire_foam_cleaner",
            name: "Tire Foam Cleaner",
            price: 425,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (8).jpeg",
            description: "Foam cleaner for tires"
        },
        {
            id: "engine_degreaser",
            name: "ENGINE DEGREASER",
            price: 425,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (9).jpeg",
            description: "Professional engine degreaser"
        },
        {
            id: "glass_cleaner_450ml",
            name: "Glass Cleaner 450ml",
            price: 425,
            category: "sprayPaints",
            brand: "KSM",
            image: "products/CAR SPRAY PAINTS/CAR SPRAY PAINTS (10).jpeg",
            description: "Glass cleaner 450ml"
        }
    ],
    // Other Car Products
    otherProducts: [
        {
            id: "tire_gel",
            name: "Tire Gel",
            price: 550,
            category: "otherProducts",
            brand: "KSM",
            image: "products/OTHERS/OTHERS (1).jpeg",
            description: "Professional tire gel for shine and protection"
        },
        {
            id: "octane_booster",
            name: "Octane Booster",
            price: 500,
            category: "otherProducts",
            brand: "KSM",
            image: "products/OTHERS/OTHERS (2).jpeg",
            description: "Fuel octane booster for improved performance"
        },
        {
            id: "aw_shampoo_16oz",
            name: "AW SHAMPOO 16OZ",
            price: 500,
            category: "otherProducts",
            brand: "KSM",
            image: "products/OTHERS/OTHERS (3).jpeg",
            description: "Car wash shampoo 16oz"
        },
        {
            id: "furniture_polish",
            name: "Furniture Polish",
            price: 425,
            category: "otherProducts",
            brand: "KSM",
            image: "products/OTHERS/OTHERS (4).jpeg",
            description: "Professional furniture polish"
        },
        {
            id: "leather_spray",
            name: "Leather Spray",
            price: 550,
            category: "otherProducts",
            brand: "KSM",
            image: "products/OTHERS/OTHERS (5).jpeg",
            description: "Leather conditioning spray"
        },
        {
            id: "scratch_remover",
            name: "SCRATCH REMOVER",
            price: 550,
            category: "otherProducts",
            brand: "KSM",
            image: "products/OTHERS/OTHERS (6).jpeg",
            description: "Professional scratch removal solution"
        },
        {
            id: "fire_stop_extinguisher",
            name: "Fire Stop (Extinguisher)",
            price: 425,
            category: "otherProducts",
            brand: "KSM",
            image: "products/CLEANERS/CAR CLEANNERS (6).jpeg",
            description: "Fire extinguisher for vehicle safety"
        }
    ],
    // Coolants
    coolants: [
        {
            id: "coolant_500ml",
            name: "Coolant 500ml",
            price: 225,
            category: "coolants",
            brand: "KSM",
            image: "products/RADIATOR COOLER/RADIATOR COOLER (1).jpeg",
            description: "Engine coolant 500ml"
        },
        {
            id: "coolant_1litre",
            name: "Coolant 1 Litre",
            price: 300,
            category: "coolants",
            brand: "KSM",
            image: "products/RADIATOR COOLER/RADIATOR COOLER (2).jpeg",
            description: "Engine coolant 1 litre"
        },
        {
            id: "coolant_2litre",
            name: "Coolant 2 Litre",
            price: 500,
            category: "coolants",
            brand: "KSM",
            image: "products/RADIATOR COOLER/RADIATOR COOLER (3).jpeg",
            description: "Engine coolant 2 litre"
        },
        {
            id: "coolant_4litre",
            name: "Coolant 4 Litre",
            price: 850,
            category: "coolants",
            brand: "KSM",
            image: "products/RADIATOR COOLER/RADIATOR COOLER (4).jpeg",
            description: "Engine coolant 4 litre"
        }
    ],
    // Anti Rust Sprays
    antiRust: [
        {
            id: "anti_rust_100ml",
            name: "Anti Rust Spray 100ML",
            price: 250,
            category: "antiRust",
            brand: "KSM",
            image: "products/CAR PROCTING SPRAYS/CAR PROTECTING SPRAYS (1).jpeg",
            description: "Anti-rust protection spray 100ml"
        },
        {
            id: "anti_rust_220ml",
            name: "Anti Rust Spray 220ML",
            price: 300,
            category: "antiRust",
            brand: "KSM",
            image: "products/CAR PROCTING SPRAYS/CAR PROTECTING SPRAYS (2).jpeg",
            description: "Anti-rust protection spray 220ml"
        }
    ]
};

// Helper function to get all products
function getAllProducts() {
    return Object.values(productsDatabase).flat();
}

// Helper function to get products by brand
function getProductsByBrand(brand) {
    return getAllProducts().filter(product => product.brand === brand);
}

// Helper function to get products by category
function getProductsByCategory(category) {
    return getAllProducts().filter(product => product.category === category);
}

// Helper function to search products
function searchProducts(query) {
    const allProducts = getAllProducts();
    return allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    );
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        productsDatabase,
        getAllProducts,
        getProductsByBrand,
        getProductsByCategory,
        searchProducts
    };
} 
