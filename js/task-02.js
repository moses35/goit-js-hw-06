const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');

const elements = ingredients.map(option => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = option;

  return listItem;
});
list.append(...elements);
