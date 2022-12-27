let currentPage = 'page__info';
let currentButton = 'btn_page1';

/**
 * @param {string} newPage Name of page id to swap displays on
 * @param {string} newButton Name of button id to swap highlight
 */
function displayPage(newPage, newButton) {
    document.getElementById(currentPage).classList.toggle('hidden');
    currentPage = newPage;
    document.getElementById(currentPage).classList.toggle('hidden');

    document.getElementById(currentButton).classList.toggle('header__currentPage');
    currentButton = newButton;
    document.getElementById(currentButton).classList.toggle('header__currentPage');
}

document.getElementById('btn_page1').addEventListener('click', () => {

    displayPage('page__info', 'btn_page1');
});

document.getElementById('btn_page2').addEventListener('click', () => {
    displayPage('page__plan', 'btn_page2');
});

document.getElementById('btn_page3').addEventListener('click', () => {
    displayPage('page__addOns', 'btn_page3');
});

document.getElementById('btn_page4').addEventListener('click', () => {
    displayPage('page__finishUp', 'btn_page4');
});