const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const veggies = ingredients.map(ingredient => {
  const items = document.createElement(`li`);
  items.textContent = ingredient;
  items.classList.add(`item`);
  return items;
});
const list = document.querySelector('#ingredients');
list.append(...veggies);

