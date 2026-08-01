// FoodMood Application Logic

// Extensive food database
const FOOD_DATABASE = [
    // Filipino
    {
        name: "Chicken Adobo",
        cuisine: "Filipino",
        mealType: "Dinner",
        mood: "Comfort Food",
        timeAvailable: 30,
        dietary: "None",
        budget: 2,
        description: "Classic savory Filipino chicken dish simmered in soy sauce, vinegar, garlic, and bay leaves.",
        prepTime: "40 mins",
        calories: "380 kcal",
        ingredients: ["Chicken", "Soy Sauce", "Vinegar", "Garlic", "Bay Leaves", "Black Peppercorns"],
        vibe: "Warm & savory home classic"
    },
    {
        name: "Sinigang na Baboy",
        cuisine: "Filipino",
        mealType: "Lunch",
        mood: "Comfort Food",
        timeAvailable: 30,
        dietary: "None",
        budget: 2,
        description: "A sour and savory Filipino tamarind soup with tender pork slices and fresh vegetables.",
        prepTime: "45 mins",
        calories: "420 kcal",
        ingredients: ["Pork belly", "Tamarind mix", "Radish", "Water spinach", "Eggplant", "Taro"],
        vibe: "Sour, steaming, and soul-satisfying"
    },
    {
        name: "Tapsilog",
        cuisine: "Filipino",
        mealType: "Breakfast",
        mood: "Quick Bite",
        timeAvailable: 20,
        dietary: "None",
        budget: 1,
        description: "Cured beef strips served with garlic fried rice and a perfectly fried sunny-side-up egg.",
        prepTime: "15 mins",
        calories: "520 kcal",
        ingredients: ["Cured beef (Tapa)", "Garlic fried rice (Sinangag)", "Egg (Itlog)", "Vinegar dip"],
        vibe: "The ultimate local breakfast energy boost"
    },
    {
        name: "Pancit Bihon",
        cuisine: "Filipino",
        mealType: "Snack",
        mood: "Savory",
        timeAvailable: 20,
        dietary: "None",
        budget: 1,
        description: "Stir-fried rice noodles with assorted fresh vegetables, chicken, and savory seasonings.",
        prepTime: "20 mins",
        calories: "310 kcal",
        ingredients: ["Rice noodles", "Chicken strips", "Cabbage", "Carrots", "Soy sauce", "Calamansi"],
        vibe: "Light yet satisfying snack or side"
    },

    // Japanese
    {
        name: "Tonkatsu Ramen",
        cuisine: "Japanese",
        mealType: "Dinner",
        mood: "Comfort Food",
        timeAvailable: 30,
        dietary: "None",
        budget: 2,
        description: "Rich, creamy pork bone broth served with chewy ramen noodles, chashu pork, and soft egg.",
        prepTime: "50 mins",
        calories: "650 kcal",
        ingredients: ["Ramen Noodles", "Pork Broth", "Chashu Pork", "Soft-boiled Egg", "Nori", "Green Onions"],
        vibe: "Hearty broth that warms your soul"
    },
    {
        name: "Sushi Combo Platter",
        cuisine: "Japanese",
        mealType: "Lunch",
        mood: "Healthy",
        timeAvailable: 20,
        dietary: "None",
        budget: 3,
        description: "An elegant selection of fresh nigiri sushi and maki rolls served with wasabi and ginger.",
        prepTime: "20 mins",
        calories: "450 kcal",
        ingredients: ["Sushi Rice", "Tuna", "Salmon", "Nori", "Wasabi", "Pickled Ginger"],
        vibe: "Clean, fresh, and refined flavors"
    },
    {
        name: "Chicken Katsu Curry",
        cuisine: "Japanese",
        mealType: "Dinner",
        mood: "Savory",
        timeAvailable: 30,
        dietary: "None",
        budget: 2,
        description: "Crispy panko-breaded chicken cutlet smothered in rich, warm Japanese curry sauce over hot rice.",
        prepTime: "35 mins",
        calories: "780 kcal",
        ingredients: ["Chicken breast", "Panko breadcrumbs", "Japanese curry roux", "Rice", "Carrots", "Potatoes"],
        vibe: "Crispy meets thick curry goodness"
    },

    // Korean
    {
        name: "Bibimbap",
        cuisine: "Korean",
        mealType: "Lunch",
        mood: "Healthy",
        timeAvailable: 20,
        dietary: "Vegetarian",
        budget: 2,
        description: "A colorful bowl of warm rice topped with seasoned vegetables, tofu, gochujang paste, and a fried egg.",
        prepTime: "20 mins",
        calories: "480 kcal",
        ingredients: ["Rice", "Spinach", "Bean sprouts", "Mushrooms", "Fried Egg", "Gochujang (Chili paste)", "Tofu"],
        vibe: "Fresh, colorful, and highly customizable"
    },
    {
        name: "Korean Fried Chicken",
        cuisine: "Korean",
        mealType: "Dinner",
        mood: "Comfort Food",
        timeAvailable: 30,
        dietary: "None",
        budget: 2,
        description: "Extremely crunchy double-fried chicken coated in a sweet, savory, and spicy glaze.",
        prepTime: "40 mins",
        calories: "820 kcal",
        ingredients: ["Chicken Wings", "Potato starch", "Gochujang", "Honey", "Garlic", "Sesame seeds"],
        vibe: "Unbeatable crunch and glazed heat"
    },
    {
        name: "Tteokbokki",
        cuisine: "Korean",
        mealType: "Snack",
        mood: "Spicy",
        timeAvailable: 10,
        dietary: "None",
        budget: 1,
        description: "Chewy cylinder-shaped rice cakes cooked in a sweet and highly spicy gochujang chili sauce.",
        prepTime: "10 mins",
        calories: "350 kcal",
        ingredients: ["Rice Cakes", "Fish cakes", "Gochujang", "Sugar", "Green onions"],
        vibe: "Chewy street food snack with a punchy kick"
    },

    // Chinese
    {
        name: "Kung Pao Tofu",
        cuisine: "Chinese",
        mealType: "Lunch",
        mood: "Spicy",
        timeAvailable: 20,
        dietary: "Vegan",
        budget: 1,
        description: "Crispy stir-fried tofu cubes with peanuts, bell peppers, and chili peppers in a sweet-savory sauce.",
        prepTime: "15 mins",
        calories: "390 kcal",
        ingredients: ["Tofu", "Peanuts", "Chili peppers", "Soy sauce", "Garlic", "Bell peppers"],
        vibe: "Szechuan spice and peanut crunch"
    },
    {
        name: "Dim Sum Steamed Basket",
        cuisine: "Chinese",
        mealType: "Breakfast",
        mood: "Quick Bite",
        timeAvailable: 10,
        dietary: "Halal",
        budget: 2,
        description: "Delicate steamed shrimp dumplings (Har Gow) and chicken Siomai served hot.",
        prepTime: "10 mins",
        calories: "280 kcal",
        ingredients: ["Shrimp dumplings", "Chicken Siomai", "Soy sauce sauce", "Chili oil"],
        vibe: "Light, bite-sized morning parcels"
    },

    // Italian
    {
        name: "Margherita Pizza",
        cuisine: "Italian",
        mealType: "Dinner",
        mood: "Comfort Food",
        timeAvailable: 30,
        dietary: "Vegetarian",
        budget: 2,
        description: "Simple Italian pizza topped with tomato sauce, fresh mozzarella cheese, and sweet basil leaves.",
        prepTime: "25 mins",
        calories: "600 kcal",
        ingredients: ["Pizza Dough", "Tomato Sauce", "Fresh Mozzarella", "Fresh Basil", "Olive Oil"],
        vibe: "Classic Neapolitan simplicity"
    },
    {
        name: "Pasta Carbonara",
        cuisine: "Italian",
        mealType: "Dinner",
        mood: "Savory",
        timeAvailable: 20,
        dietary: "None",
        budget: 2,
        description: "Rich Roman pasta tossed with egg yolks, Pecorino Romano cheese, crispy guanciale, and cracked black pepper.",
        prepTime: "20 mins",
        calories: "680 kcal",
        ingredients: ["Spaghetti", "Egg yolks", "Pecorino Romano", "Guanciale or Bacon", "Black Pepper"],
        vibe: "Creamy without actual cream"
    },

    // American
    {
        name: "Classic Cheeseburger",
        cuisine: "American",
        mealType: "Lunch",
        mood: "Comfort Food",
        timeAvailable: 20,
        dietary: "None",
        budget: 2,
        description: "Juicy flame-grilled beef patty with cheddar cheese, lettuce, tomato, and burger sauce in a brioche bun.",
        prepTime: "15 mins",
        calories: "710 kcal",
        ingredients: ["Beef patty", "Brioche bun", "Cheddar cheese", "Lettuce", "Tomato", "Pickles"],
        vibe: "The ultimate juicy, messy diner bite"
    },
    {
        name: "Buffalo Cauliflower Wings",
        cuisine: "American",
        mealType: "Snack",
        mood: "Spicy",
        timeAvailable: 20,
        dietary: "Vegan",
        budget: 1,
        description: "Crispy oven-baked cauliflower florets tossed in zesty buffalo hot sauce, served with celery.",
        prepTime: "20 mins",
        calories: "220 kcal",
        ingredients: ["Cauliflower", "Buffalo sauce", "Flour batter", "Garlic powder", "Vegan ranch dip"],
        vibe: "Tangy heat with guilt-free crunch"
    },

    // Mexican
    {
        name: "Street Tacos Duo",
        cuisine: "Mexican",
        mealType: "Lunch",
        mood: "Quick Bite",
        timeAvailable: 15,
        dietary: "Gluten-Free",
        budget: 1,
        description: "Two warm corn tortillas loaded with carne asada, diced white onions, fresh cilantro, and lime wedges.",
        prepTime: "15 mins",
        calories: "340 kcal",
        ingredients: ["Corn tortillas", "Beef flank steak", "Onions", "Cilantro", "Lime juice", "Salsa verde"],
        vibe: "Fast, punchy, and cilantro-forward"
    },
    {
        name: "Avocado Burrito Bowl",
        cuisine: "Mexican",
        mealType: "Lunch",
        mood: "Healthy",
        timeAvailable: 15,
        dietary: "Vegetarian",
        budget: 2,
        description: "Fresh brown rice topped with black beans, sweet corn, guacamole, salsa, and fresh greens.",
        prepTime: "15 mins",
        calories: "410 kcal",
        ingredients: ["Brown Rice", "Black beans", "Guacamole", "Sweet corn", "Salsa", "Cilantro"],
        vibe: "Fresh, healthy, and colorful Mexican fuel"
    },

    // Indian
    {
        name: "Butter Chicken with Naan",
        cuisine: "Indian",
        mealType: "Dinner",
        mood: "Comfort Food",
        timeAvailable: 30,
        dietary: "Halal",
        budget: 3,
        description: "Tender tandoori chicken cooked in a rich, buttery, and creamy spiced tomato sauce.",
        prepTime: "35 mins",
        calories: "720 kcal",
        ingredients: ["Chicken", "Tomato paste", "Cream", "Butter", "Garam Masala", "Garlic Naan"],
        vibe: "Smooth, velvety, spice-kissed luxury"
    },
    {
        name: "Chana Masala",
        cuisine: "Indian",
        mealType: "Lunch",
        mood: "Savory",
        timeAvailable: 20,
        dietary: "Vegan",
        budget: 1,
        description: "Chickpeas simmered in a tangy onion, tomato, and aromatic Indian spice gravy.",
        prepTime: "20 mins",
        calories: "350 kcal",
        ingredients: ["Chickpeas", "Tomatoes", "Onions", "Ginger-garlic paste", "Coriander", "Cumin"],
        vibe: "Hearty, fiber-rich plant power"
    },

    // Desserts
    {
        name: "Mango Sticky Rice",
        cuisine: "Thai",
        mealType: "Dessert",
        mood: "Sweet",
        timeAvailable: 20,
        dietary: "Vegan",
        budget: 1,
        description: "Sweet glutinous rice cooked in coconut milk, served with fresh, juicy slices of yellow mango.",
        prepTime: "20 mins",
        calories: "380 kcal",
        ingredients: ["Glutinous rice", "Fresh mango", "Coconut milk", "Sugar", "Toasted sesame seeds"],
        vibe: "Sweet, creamy, and tropical heaven"
    },
    {
        name: "Matcha Lava Cake",
        cuisine: "Japanese",
        mealType: "Dessert",
        mood: "Sweet",
        timeAvailable: 20,
        dietary: "Vegetarian",
        budget: 2,
        description: "A decadent warm matcha green tea cake with a liquid lava white chocolate matcha center.",
        prepTime: "20 mins",
        calories: "450 kcal",
        ingredients: ["Matcha powder", "White chocolate", "Eggs", "Butter", "Flour"],
        vibe: "Molten earthy indulgence"
    }
];

// State variables
let selectedCuisine = "";
let selectedMealType = "";
let selectedMood = "";
let selectedDietary = "";
let selectedTime = 30; // default 30+ min (accepts all)
let favorites = [];
let apiKey = "";
let currentDisplayedFood = null;

// Initialize
document.addEventListener("DOMContentLoaded", () => {
    // Load favorites from localStorage
    loadFavorites();
    loadApiKey();

    // Render interactive selections
    renderCuisineChips();
    setupEventListeners();
    updateBudgetLabel(2); // Default medium budget
});

// Load API Key
function loadApiKey() {
    apiKey = localStorage.getItem("foodmood_api_key") || "";
    const keyInput = document.getElementById("api-key-input");
    if (keyInput && apiKey) {
        keyInput.value = apiKey;
    }
}

// Setup Cuisine Chips
const cuisines = ["Any", "Filipino", "Japanese", "Korean", "Chinese", "Italian", "American", "Mexican", "Indian"];
function renderCuisineChips() {
    const container = document.getElementById("cuisine-chips");
    if (!container) return;
    container.innerHTML = "";

    cuisines.forEach(cuisine => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "chip-btn";
        if (cuisine === "Any" && !selectedCuisine) btn.classList.add("selected");
        else if (cuisine === selectedCuisine) btn.classList.add("selected");

        btn.innerText = cuisine;
        btn.addEventListener("click", () => {
            document.querySelectorAll("#cuisine-chips .chip-btn").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedCuisine = cuisine === "Any" ? "" : cuisine;
        });
        container.appendChild(btn);
    });
}

// Setup Event Listeners
function setupEventListeners() {
    // Meal types
    document.querySelectorAll("[data-meal]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-meal]").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedMealType = btn.getAttribute("data-meal") === "Any" ? "" : btn.getAttribute("data-meal");
        });
    });

    // Moods
    document.querySelectorAll("[data-mood]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-mood]").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedMood = btn.getAttribute("data-mood") === "Any" ? "" : btn.getAttribute("data-mood");
        });
    });

    // Dietary
    document.querySelectorAll("[data-dietary]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-dietary]").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedDietary = btn.getAttribute("data-dietary") === "Any" ? "" : btn.getAttribute("data-dietary");
        });
    });

    // Time availability
    document.querySelectorAll("[data-time]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-time]").forEach(b => b.classList.remove("selected"));
            btn.classList.add("selected");
            selectedTime = parseInt(btn.getAttribute("data-time"));
        });
    });

    // Budget Slider
    const budgetSlider = document.getElementById("budget-slider");
    if (budgetSlider) {
        budgetSlider.addEventListener("input", (e) => {
            const val = parseInt(e.target.value);
            updateBudgetLabel(val);
        });
    }

    // Recommend Button
    const btnRecommend = document.getElementById("btn-recommend");
    if (btnRecommend) {
        btnRecommend.addEventListener("click", triggerRecommendation);
    }

    // Roulette wheel click
    const wheelCenter = document.getElementById("wheel-center-trigger");
    if (wheelCenter) {
        wheelCenter.addEventListener("click", spinRoulette);
    }

    // Drawer triggers
    const btnHistory = document.getElementById("btn-history-trigger");
    const drawer = document.getElementById("history-drawer");
    const backdrop = document.getElementById("drawer-backdrop");
    const btnCloseDrawer = document.getElementById("btn-close-drawer");

    if (btnHistory && drawer && backdrop) {
        const toggleDrawer = () => {
            drawer.classList.toggle("open");
            backdrop.classList.toggle("open");
            renderFavoritesList();
        };

        btnHistory.addEventListener("click", toggleDrawer);
        backdrop.addEventListener("click", toggleDrawer);
        if (btnCloseDrawer) btnCloseDrawer.addEventListener("click", toggleDrawer);
    }

    // Settings Modal Triggers
    const btnSettings = document.getElementById("btn-settings-trigger");
    const settingsModal = document.getElementById("settings-modal");
    const btnCloseSettings = document.getElementById("btn-close-settings");
    const btnSaveSettings = document.getElementById("btn-save-settings");
    const btnClearSettings = document.getElementById("btn-clear-settings");

    if (btnSettings && settingsModal && backdrop) {
        const openSettings = () => {
            settingsModal.classList.add("open");
            backdrop.classList.add("open");
        };

        const closeSettings = () => {
            settingsModal.classList.remove("open");
            if (!drawer.classList.contains("open")) {
                backdrop.classList.remove("open");
            }
        };

        btnSettings.addEventListener("click", openSettings);
        if (btnCloseSettings) btnCloseSettings.addEventListener("click", closeSettings);

        if (btnSaveSettings) {
            btnSaveSettings.addEventListener("click", () => {
                const val = document.getElementById("api-key-input").value.trim();
                localStorage.setItem("foodmood_api_key", val);
                apiKey = val;
                alert("AI Configuration saved successfully!");
                closeSettings();
            });
        }

        if (btnClearSettings) {
            btnClearSettings.addEventListener("click", () => {
                document.getElementById("api-key-input").value = "";
                localStorage.removeItem("foodmood_api_key");
                apiKey = "";
                alert("API Key cleared!");
            });
        }
    }

    // AI Chat Floating Widget Trigger
    const aiChatTrigger = document.getElementById("ai-chat-trigger");
    const aiChatPanel = document.getElementById("ai-chat-panel");
    const btnCloseChat = document.getElementById("btn-close-chat");

    if (aiChatTrigger && aiChatPanel) {
        aiChatTrigger.addEventListener("click", () => {
            aiChatPanel.classList.toggle("open");
        });
        if (btnCloseChat) {
            btnCloseChat.addEventListener("click", () => {
                aiChatPanel.classList.remove("open");
            });
        }
    }

    // AI Chat Send Message
    const btnSendChat = document.getElementById("btn-send-chat");
    const chatInput = document.getElementById("chat-input");
    if (btnSendChat && chatInput) {
        btnSendChat.addEventListener("click", handleUserMessage);
        chatInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") handleUserMessage();
        });
    }

    // Generate AI Recipe Button
    const btnAiRecipe = document.getElementById("btn-ai-recipe");
    if (btnAiRecipe) {
        btnAiRecipe.addEventListener("click", generateAiRecipe);
    }

    // Surprise me switch
    const surpriseToggle = document.getElementById("surprise-toggle");
    if (surpriseToggle) {
        surpriseToggle.addEventListener("change", (e) => {
            const isChecked = e.target.checked;
            const formElements = document.querySelectorAll(".form-group:not(.toggle-wrapper)");
            formElements.forEach(el => {
                if (isChecked) {
                    el.style.opacity = "0.4";
                    el.style.pointerEvents = "none";
                } else {
                    el.style.opacity = "1";
                    el.style.pointerEvents = "auto";
                }
            });
        });
    }
}

// Update budget UI labels
function updateBudgetLabel(value) {
    document.querySelectorAll(".slider-labels span").forEach((span, idx) => {
        if (idx === value - 1) {
            span.classList.add("active");
        } else {
            span.classList.remove("active");
        }
    });
}

// Get Recommendation Engine
function triggerRecommendation() {
    const isSurprise = document.getElementById("surprise-toggle")?.checked || false;
    let filteredFoods = [];

    if (isSurprise) {
        filteredFoods = [...FOOD_DATABASE];
    } else {
        const budgetSlider = document.getElementById("budget-slider");
        const currentBudget = budgetSlider ? parseInt(budgetSlider.value) : 2;

        filteredFoods = FOOD_DATABASE.filter(food => {
            if (selectedCuisine && food.cuisine !== selectedCuisine) return false;
            if (selectedMealType && food.mealType !== selectedMealType) return false;
            if (selectedMood && food.mood !== selectedMood) return false;
            if (selectedDietary && selectedDietary !== "None") {
                if (food.dietary !== selectedDietary) return false;
            }
            if (food.timeAvailable > selectedTime) return false;
            if (food.budget && food.budget > currentBudget) return false;
            return true;
        });
    }

    if (filteredFoods.length === 0) {
        filteredFoods = FOOD_DATABASE.filter(food => {
            if (selectedCuisine && food.cuisine !== selectedCuisine) return false;
            if (selectedMealType && food.mealType !== selectedMealType) return false;
            return true;
        });
    }

    if (filteredFoods.length === 0) {
        filteredFoods = [...FOOD_DATABASE];
    }

    const randomIndex = Math.floor(Math.random() * filteredFoods.length);
    const chosenFood = filteredFoods[randomIndex];

    displayResult(chosenFood);
}

// Spin Roulette Animation
let isSpinning = false;
function spinRoulette() {
    if (isSpinning) return;
    isSpinning = true;

    const wheel = document.getElementById("wheel");
    if (!wheel) return;

    wheel.style.transition = "none";
    wheel.style.transform = "rotate(0deg)";
    wheel.offsetHeight; // force reflow

    const degrees = 1800 + Math.floor(Math.random() * 360);
    wheel.style.transition = "transform 4s cubic-bezier(0.1, 0.8, 0.1, 1)";
    wheel.style.transform = `rotate(${degrees}deg)`;

    setTimeout(() => {
        isSpinning = false;
        const normalizedDeg = (360 - (degrees % 360)) % 360;
        const segmentIdx = Math.floor(normalizedDeg / 45);
        const categories = ["Filipino", "Japanese", "Korean", "Chinese", "Italian", "American", "Mexican", "Indian"];
        const targetCuisine = categories[segmentIdx] || "Filipino";

        const matchedFoods = FOOD_DATABASE.filter(f => f.cuisine === targetCuisine);
        const food = matchedFoods[Math.floor(Math.random() * matchedFoods.length)] || FOOD_DATABASE[0];

        displayResult(food);
    }, 4000);
}

// Display recommendation result
function displayResult(food) {
    currentDisplayedFood = food;
    const resultCard = document.getElementById("result-card");
    const introCard = document.getElementById("intro-card");

    if (!resultCard) return;

    if (introCard) introCard.style.display = "none";

    document.getElementById("res-cuisine").innerText = food.cuisine;
    document.getElementById("res-title").innerText = food.name;
    document.getElementById("res-desc").innerText = food.description;
    
    document.getElementById("val-vibe").innerText = food.vibe || "Delicious choice";
    document.getElementById("val-time").innerText = food.prepTime || `${food.timeAvailable} mins`;
    document.getElementById("val-cals").innerText = food.calories || "N/A";
    
    const ingredList = document.getElementById("res-ingredients");
    if (ingredList) {
        ingredList.innerHTML = food.ingredients.map(ing => `<li>${ing}</li>`).join("");
    }

    const budgetSymbol = "$".repeat(food.budget || 2);
    document.getElementById("val-budget").innerText = budgetSymbol;

    const saveBtn = document.getElementById("btn-fav-toggle");
    if (saveBtn) {
        const isAlreadyFav = favorites.some(fav => fav.name === food.name);
        if (isAlreadyFav) {
            saveBtn.classList.add("active");
            saveBtn.innerHTML = "❤️";
        } else {
            saveBtn.classList.remove("active");
            saveBtn.innerHTML = "🤍";
        }

        const newSaveBtn = saveBtn.cloneNode(true);
        saveBtn.parentNode.replaceChild(newSaveBtn, saveBtn);
        newSaveBtn.addEventListener("click", () => toggleFavorite(food, newSaveBtn));
    }

    const btnFindNear = document.getElementById("btn-find-near");
    if (btnFindNear) {
        btnFindNear.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(food.name + " restaurant")}`;
        btnFindNear.target = "_blank";
    }

    const btnRecipe = document.getElementById("btn-recipe-search");
    if (btnRecipe) {
        btnRecipe.href = `https://www.google.com/search?q=${encodeURIComponent("how to make " + food.name)}`;
        btnRecipe.target = "_blank";
    }

    // Reset AI recipe button text
    const btnAiRecipe = document.getElementById("btn-ai-recipe");
    if (btnAiRecipe) {
        btnAiRecipe.innerText = "✨ Generate AI Recipe";
        btnAiRecipe.disabled = false;
    }

    resultCard.classList.add("active");
    resultCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// Toggle Favorite Saved
function toggleFavorite(food, buttonElement) {
    const idx = favorites.findIndex(fav => fav.name === food.name);
    if (idx > -1) {
        favorites.splice(idx, 1);
        buttonElement.classList.remove("active");
        buttonElement.innerHTML = "🤍";
    } else {
        favorites.push(food);
        buttonElement.classList.add("active");
        buttonElement.innerHTML = "❤️";
    }
    saveFavorites();
}

function saveFavorites() {
    localStorage.setItem("foodmood_favorites", JSON.stringify(favorites));
    updateHistoryBadge();
}

function loadFavorites() {
    const raw = localStorage.getItem("foodmood_favorites");
    if (raw) {
        try {
            favorites = JSON.parse(raw);
        } catch (e) {
            favorites = [];
        }
    }
    updateHistoryBadge();
}

function updateHistoryBadge() {
    const badge = document.getElementById("history-badge");
    if (badge) {
        badge.innerText = favorites.length;
    }
}

function renderFavoritesList() {
    const container = document.getElementById("drawer-favorites-list");
    if (!container) return;

    if (favorites.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No favorites yet</h3>
                <p>Click the heart icon on any food recommendation to save it here!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    favorites.forEach((fav, index) => {
        const item = document.createElement("div");
        item.className = "fav-item";
        
        item.innerHTML = `
            <div class="fav-info">
                <span class="fav-title">${fav.name}</span>
                <span class="fav-meta">${fav.cuisine} • ${fav.prepTime}</span>
            </div>
            <button class="btn-delete-fav" data-index="${index}">🗑️</button>
        `;

        item.querySelector(".fav-info").addEventListener("click", () => {
            document.getElementById("history-drawer").classList.remove("open");
            document.getElementById("drawer-backdrop").classList.remove("open");
            displayResult(fav);
        });

        item.querySelector(".btn-delete-fav").addEventListener("click", (e) => {
            e.stopPropagation();
            favorites.splice(index, 1);
            saveFavorites();
            renderFavoritesList();
        });

        container.appendChild(item);
    });
}

// ----------------------------------------------------
// AI Integration (OpenAI API call using gpt-5.4-nano-2026-03-17)
// ----------------------------------------------------

async function fetchFromOpenAI(messages) {
    if (!apiKey) {
        // Trigger modal opening
        document.getElementById("settings-modal").classList.add("open");
        document.getElementById("drawer-backdrop").classList.add("open");
        throw new Error("API Key missing");
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-5.4-nano-2026-03-17",
            messages: messages,
            temperature: 0.7
        })
    });

    if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error?.message || "Failed to query AI");
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

// Ask AI Chatbot helper
async function handleUserMessage() {
    const input = document.getElementById("chat-input");
    const container = document.getElementById("ai-chat-messages");
    if (!input || !container) return;

    const userText = input.value.trim();
    if (!userText) return;

    // Append user bubble
    appendChatBubble(userText, "user");
    input.value = "";

    // Append loading bubble
    const loadingBubble = appendChatBubble("Genie is thinking... 💭", "assistant");

    try {
        const messages = [
            {
                role: "system",
                content: "You are Chef Gusto, a friendly, passionate culinary expert from FoodMood. Keep your answers engaging, encouraging, and format with bullet points if listing steps. Use emojis. You are running on gpt-5.4-nano-2026-03-17."
            }
        ];

        // If a food is currently selected, add it to system instructions
        if (currentDisplayedFood) {
            messages.push({
                role: "system",
                content: `The user is currently viewing: ${currentDisplayedFood.name} (${currentDisplayedFood.cuisine} Cuisine). Keep this context in mind if they ask about it.`
            });
        }

        messages.push({ role: "user", content: userText });

        const reply = await fetchFromOpenAI(messages);
        loadingBubble.remove();
        appendChatBubble(reply, "assistant");
    } catch (e) {
        loadingBubble.remove();
        if (e.message !== "API Key missing") {
            appendChatBubble(`Error: ${e.message}`, "assistant");
        } else {
            appendChatBubble("Please configure your OpenAI API key in the settings (⚙️) menu to activate the Food Genie!", "assistant");
        }
    }
}

// Generate AI Recipe
async function generateAiRecipe() {
    if (!currentDisplayedFood) return;

    const btn = document.getElementById("btn-ai-recipe");
    btn.innerText = "✨ Formulating Recipe...";
    btn.disabled = true;

    // Toggle Chat widget open so user can see it being written
    const aiChatPanel = document.getElementById("ai-chat-panel");
    if (aiChatPanel) aiChatPanel.classList.add("open");

    appendChatBubble(`🪄 Formulating an AI Recipe for *${currentDisplayedFood.name}* using model **gpt-5.4-nano-2026-03-17**...`, "assistant");

    try {
        const prompt = `Provide a fast, easy recipe for "${currentDisplayedFood.name}" (${currentDisplayedFood.cuisine} style). 
Include:
1. A 1-sentence mouthwatering intro.
2. Estimated prep time & difficulty.
3. Steps to prepare.
Keep it concise and highly readable.`;

        const reply = await fetchFromOpenAI([
            { role: "system", content: "You are Chef Gusto. You deliver beautifully structured, simple recipe cards with emojis." },
            { role: "user", content: prompt }
        ]);

        btn.innerText = "✨ Recipe Generated!";
        appendChatBubble(reply, "assistant");
    } catch (e) {
        btn.innerText = "✨ Generate AI Recipe";
        btn.disabled = false;
        if (e.message !== "API Key missing") {
            appendChatBubble(`Could not generate recipe: ${e.message}`, "assistant");
        } else {
            appendChatBubble("Please input your OpenAI API Key in the settings (⚙️) to use AI recipe generation!", "assistant");
        }
    }
}

// Chat UI Helper
function appendChatBubble(text, sender) {
    const container = document.getElementById("ai-chat-messages");
    if (!container) return null;

    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${sender}`;
    
    // Simple markdown-to-HTML parser (bold and lists)
    let formattedText = text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');

    bubble.innerHTML = formattedText;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
    return bubble;
}
