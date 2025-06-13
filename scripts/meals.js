const meals = [
  {
    name: "Grilled Chicken Veggies",
    protein: 35,
    image: "images/chicken-veggies.jpg"
  },
  {
    name: "Berry Fruit Smoothie",
    protein: 10,
    image: "images/fruit-smoothie.jpg"
  },
  {
    name: "Oatmeal Power Bowl",
    protein: 12,
    image: "images/oatmeal-bowl.jpg"
  },
  {
    name: "Quinoa Veggie Bowl",
    protein: 25,
    image: "images/quinoa-bowl.jpg"
  },
  {
    name: "Grilled Salmon",
    protein: 30,
    image: "images/salmon.jpg"
  }
];

localStorage.setItem("meals", JSON.stringify(meals));

function displayMeals(list) {
  const container = document.getElementById("meal-list");
  container.innerHTML = "";

  list.forEach(meal => {
    const card = `
      <div class="meal-card">
        <img src="${meal.image}" alt="${meal.name}" width="400" height="300" loading="lazy">
        <h3>${meal.name}</h3>
        <p>Protein: ${meal.protein}g</p>
      </div>
    `;
    container.innerHTML += card;
  });
}

function filterHighProtein() {
  const meals = JSON.parse(localStorage.getItem("meals")) || [];
  const highProteinMeals = meals.filter(m => m.protein > 25);
  displayMeals(highProteinMeals);
}

const savedMeals = JSON.parse(localStorage.getItem("meals"));
displayMeals(savedMeals);
