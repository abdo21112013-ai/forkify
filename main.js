let recipesContainer = document.getElementById("recipesContainer");
let btnpizza = document.getElementById("Pizza");
let btnburger = document.getElementById("Burger");
let btnpasta = document.getElementById("Pasta");
let btnsalad = document.getElementById("Salad");
let btnsearch = document.getElementById("search");
let input = document.getElementById("input-search");
function fetchRecipes(food) {
  recipesContainer.innerHTML += `
<div class="loader">loading delicious recipes</div>
`;

  fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${food}`)
    .then((response) => response.json())
    .then((result) => {
      let data = result.data.recipes;
      console.log(data);
      recipesContainer.innerHTML = ``;
      data.forEach((recipe) => {
        recipesContainer.innerHTML += `
         <div  class="recipe-card">
            <img class="recipe-image" src="${recipe.image_url}" alt="recipe-img">
            <div class="recipe-info"> <h3 class="recipe-title">${recipe.title}</h3>
            <p class="recipe-puplisher">by: ${recipe.publisher}</p>
            <div>
              <a href="#" target="_blank" class="btn-view">view.recipe</a>
           </div>
      </div>
`;
      });
    });
}

btnpizza.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("pizza");
});

btnburger.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("burger");
});
btnpasta.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("pasta");
});
btnsalad.addEventListener("click", function () {
  console.log("click");
  fetchRecipes("salad");
});
btnsearch.addEventListener("click", function () {
  fetchRecipes(input.value);
});
