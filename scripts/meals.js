/* eslint-env browser */
/* eslint-disable no-undef */
const meals = [
  {
    name: "Grilled Chicken Veggies",
    protein: 35,
    image: "images/chicken-veggies.jpg",
    recipe: "Season chicken, grill 6 min per side. Serve with salad or steamed veggies."
  },
  {
    name: "Berry Fruit Smoothie",
    protein: 10,
    image: "images/fruit-smoothie.jpg",
    recipe: "Blend berries, banana, Greek yogurt, and almond milk until smooth."
  },
  {
    name: "Oatmeal Power Bowl",
    protein: 12,
    image: "images/oatmeal-bowl.jpg",
    recipe: "Cook oats, top with banana, berries, nuts, and a drizzle of honey."
  },
  {
    name: "Quinoa Veggie Bowl",
    protein: 25,
    image: "images/quinoa-bowl.jpg",
    recipe: "Cook quinoa, add grilled chicken, broccoli, cucumbers, and carrots."
  },
  {
    name: "Grilled Salmon",
    protein: 30,
    image: "images/salmon.jpg",
    recipe: "Season salmon, grill or bake at 375°F for 12–15 min. Serve with lemon & veggies."
  }
];

// Save to localStorage
localStorage.setItem("meals", JSON.stringify(meals));

// Display all meals
function displayMeals(list) {
  const container = document.getElementById("meal-list");
  container.innerHTML = "";

  list.forEach(meal => {
    const card = `
      <div class="meal-card">
        <img src="${meal.image}" alt="${meal.name}" width="400" height="300" loading="lazy">
        <h3>${meal.name}</h3>
        <p><strong>Protein:</strong> ${meal.protein}g</p>
        <p><strong>Quick Recipe:</strong> ${meal.recipe}</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Filter high-protein meals (> 25g)
function filterHighProtein() {
  const mealsList = JSON.parse(localStorage.getItem("meals")) || [];
  return mealsList.filter(m => m.protein > 25);
}

// Event listener for the "Filter Protein Meals" button
let showingHighProtein = false; // Track if we're showing high-protein meals
document.getElementById("filter-protein-btn").addEventListener("click", function() {
  if (showingHighProtein) {
    displayMeals(meals); // Show all meals
    this.textContent = "Filter Protein Meals"; // Update button text
  } else {
    const highProteinMeals = filterHighProtein(); // Filter high-protein meals
    displayMeals(highProteinMeals); // Show only high-protein meals
    this.textContent = "Show All Meals"; // Update button text
  }
  showingHighProtein = !showingHighProtein; // Toggle the state
});

// Load and display all meals on page load
const savedMeals = JSON.parse(localStorage.getItem("meals")) || [];
displayMeals(savedMeals);
