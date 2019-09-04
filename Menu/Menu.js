/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

// VARIABLE ASSIGNMENT TO DOM ELEMENT
const btn = document.querySelector('.menu-button');


// MENU MAKER FUNCTION
function menuMaker(menuItems) {

  // CREATE NEW NODES
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  // CREATE NEW MENU ITEMS AND ATTACH TO MENULIST
  menuItems.map(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  })

  // ADD NECESSARY CLASSES
  menu.classList.add('menu');

  // EVENT LISTENER
  btn.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
  });


  menu.appendChild(menuList);
  return menu;
}

document.body.prepend(menuMaker(menuItems));