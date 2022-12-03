// CSS Burger Menu animation

hamburgerIcon.addEventListener('click', (e) => {
    if (menuContents.classList.contains('menu--closed')) {
        //Switch to menu open
        e.target.src = "./assets/shared/mobile/close.svg";
        menuContents.classList.toggle('menu--closed')
    }
    else {
        //Switch to menu closed
        e.target.src = "./assets/shared/mobile/menu.svg";
        menuContents.classList.toggle('menu--closed')
    }
});

term__toggleSwitch.addEventListener('change', () => {
    month__Toggle.classList.toggle('toggle--selected');
    year__Toggle.classList.toggle('toggle--selected');

    for (let i of document.querySelectorAll('.price__section'))
        i.classList.toggle('price__section--hidden');
});