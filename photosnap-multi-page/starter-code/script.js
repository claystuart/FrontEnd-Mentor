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