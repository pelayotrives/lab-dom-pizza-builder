// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  let selectorMushroom = document.querySelectorAll('.mushroom');
  selectorMushroom.forEach((eachMushroom) => {
    if (state.mushrooms) {
      eachMushroom.style.visibility = 'visible';
    } else {
      eachMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let selectorGreenPepper = document.querySelectorAll('.green-pepper');
  selectorGreenPepper.forEach((eachGreenPepper) => {
    if (state.greenPeppers) {
      eachGreenPepper.style.visibility = 'visible';
    } else {
      eachGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let removeSauceClass = document.querySelector('.sauce');
  removeSauceClass.classList.remove('sauce-white');
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let removeCrustClass = document.querySelector('.crust');
  removeCrustClass.classList.remove('crust-gluten-free');
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if (state.pepperoni === false) {
    document.querySelector('.btn.btn-pepperoni').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-pepperoni').classList.add('active');
  }
  
  if (state.mushrooms === false) {
    document.querySelector('.btn.btn-mushrooms').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-mushrooms').classList.add('active');
  }
  
  if (state.greenPeppers === false) {
    document.querySelector('.btn.btn-green-peppers').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-green-peppers').classList.add('active');
  }
  
  if (state.whiteSauce === false) {
    document.querySelector('.btn.btn-sauce').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-sauce').classList.add('active');
  }
  
  if (state.glutenFreeCrust === false) {
    document.querySelector('.btn.btn-crust').classList.remove('active');
  } else {
    document.querySelector('.btn.btn-crust').classList.add('active');
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
}

renderEverything();

let changeStatePepperoni = () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
};

let changeStateMushrooms = () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
};

let changeStateGreenPeppers = () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
};

let changeStateSauce = () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
};

let changeStateCrust = () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
};

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector('.btn.btn-pepperoni')
  .addEventListener('click', changeStatePepperoni);

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector('.btn.btn-mushrooms')
  .addEventListener('click', changeStateMushrooms);

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector('.btn.btn-green-peppers')
  .addEventListener('click', changeStateGreenPeppers);

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document
  .querySelector('.btn.btn-sauce')
  .addEventListener('click', changeStateSauce);

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document
  .querySelector('.btn.btn-crust')
  .addEventListener('click', changeStateCrust);
