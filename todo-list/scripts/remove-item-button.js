// create array of remove-item-button

const removeItemButton = document.querySelectorAll('.remove-item-button');

// this block apply method addEventListener for each element of button array

removeItemButton.forEach((button, i) => {
  removeItemButton[i].addEventListener('click', function() {
    // here we find out parent-container of button
    removeItemButton[i].parentElement.remove();
  });
});
