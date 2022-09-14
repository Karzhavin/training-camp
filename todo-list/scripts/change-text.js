// select list-item-text
const itemText = document.querySelectorAll('.list-item-text');

// this block apply method addEventListener for each element of list-item-text array

itemText.forEach((text, i) => {
  itemText[i].addEventListener('click', function() {
    const newText = prompt('Enter your new text');
    itemText[i].textContent = newText;
  });
});
