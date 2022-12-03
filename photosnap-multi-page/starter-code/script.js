// CSS Burger Menu animation
let menuClosed = true;
document.querySelector('#hamburgerIcon').addEventListener('click', (e) => {
    if (menuClosed == true) {
        //Switch to menu open
        menuClosed = false;
        e.target.src = "./assets/shared/mobile/close.svg";
        document.getElementById('menuContents').classList.toggle('menu--closed')
    }
    else {
        //Switch to menu closed
        menuClosed = true;
        e.target.src = "./assets/shared/mobile/menu.svg";
        document.getElementById('menuContents').classList.toggle('menu--closed')
    }
});