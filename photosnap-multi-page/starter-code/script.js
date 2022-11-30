// CSS Burger Menu animation
let menuClosed = true;
document.querySelector('#menuSwitch').addEventListener('click', (e) => {
    if (menuClosed == true) {
        //Switch to menu open
        menuClosed = false;
        e.target.src = "./assets/shared/mobile/close.svg";
        document.getElementById('menuContents').classList.toggle('nav--hidden')
    }
    else {
        //Switch to menu closed
        menuClosed = true;
        e.target.src = "./assets/shared/mobile/menu.svg";
        document.getElementById('menuContents').classList.toggle('nav--hidden')
    }
});