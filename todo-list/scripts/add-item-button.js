// select add-item-button
const addItemButton = document.querySelector('.add-item-button');
// select point-list
const pointList = document.querySelector('.point-list');

// apply method addEventListener for add-item-button

addItemButton.addEventListener('click', function() {
  const text = prompt('Enter your text');
  // create list item and it content
  const itemText = document.createElement('span');
  itemText.classList.add('list-item-text');
  itemText.setAttribute('title', 'click for change text');
  itemText.textContent = text;
  // add functionality of item text
  itemText.addEventListener('click', function() {
    const newText = prompt('Enter your new text');
    itemText.textContent = newText;
  });

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
