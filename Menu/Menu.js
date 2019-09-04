(function() {
  // STATE DECLARATION
  const state = {
    isOpen: false,
    menuItems: [
      'Students',
      'Faculty',
      "What's New",
      'Tech Trends',
      'Music',
      'Log Out'
    ]
  }

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
      event.stopPropagation();
      if(!state.isOpen) {
        state.isOpen = true;
        menu.classList.toggle('menu--open');
      } else {
        state.isOpen = false;
        menu.classList.toggle('menu--open');
      }
    });

    document.body.addEventListener('click', () => {
      if(state.isOpen) {
        state.isOpen = false;
        menu.classList.toggle('menu--open');
      }
    });

    menu.appendChild(menuList);
    return menu;
  }

  document.body.prepend(menuMaker(state.menuItems));
})();