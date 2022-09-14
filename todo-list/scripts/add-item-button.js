// select add-item-button
const addItemButton = document.querySelector('.add-item-button');
// select point-list
const pointList = document.querySelector('.point-list');

// apply method addEventListener for add-item-button

addItemButton.addEventListener('click', function() {
  const text = prompt('Enter your text');
  // create list item
  const itemText = document.createElement('span');
  itemText.classList.add('list-item-text');
  itemText.textContent = text;

  const removeItemButton = document.createElement('button');
  removeItemButton.classList.add('remove-item-button');
  removeItemButton.textContent = 'X';
  // add functionality of button
  removeItemButton.addEventListener('click', function() {
    // here we find out parent-container of button
    removeItemButton.parentElement.remove();
  });
  const newPoint = document.createElement('li');
  newPoint.classList.add('point-list-item');

  newPoint.appendChild(itemText);
  newPoint.appendChild(removeItemButton);
  // add list item in list
  pointList.appendChild(newPoint);
});
