// 1. Create a navbar and change the color of its first element to red.
document.querySelector(".navbar li:first-child").style.color = 'red';

// Change the color of the first and last child to green

const container = document.querySelector('.container');
container.firstElementChild.style.color = 'green'
container.lastElementChild.style.color = 'green'

// Change the background of all <li> tags to cyan
const listItem = document.querySelectorAll('.cyan li')
listItem.forEach(item => {
    item.style.backgroundColor = 'cyan';
});