function handleMenuClose (evt, menu) {
    evt.preventDefault();
    menu.classList.add('hidden');
}
function handleMenuButton (evt, menu) {
    evt.preventDefault();
    menu.classList.remove('hidden');
}
function main () {
    const menuClose = document.getElementById('menu-close');
    const menuButton = document.getElementById('menu-button');
    const menu = document.getElementById('menu');

    menuClose.addEventListener('click', (evt) => handleMenuClose(evt, menu));
    menuButton.addEventListener('click', (evt) => handleMenuButton(evt, menu));
    return;
}
main()