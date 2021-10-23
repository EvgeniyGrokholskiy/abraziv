const menuOpenCloseDomElement = document.querySelector('.header__nav-arrow');

menuOpenCloseDomElement.addEventListener('click', classToggle);

function classToggle () {

    const menuItemsNodeList = document.querySelectorAll('.header__list_item-mobile');
    const menuUlContainer = document.querySelector('.header__nav-mobile');
    const menuOpenCloseIcon = document.querySelector('.header__nav-arrow');

    menuOpenCloseIcon.classList.toggle('header__nav-arrow-open');
    menuUlContainer.classList.toggle('show');

    if (menuUlContainer.classList.contains('show')) {
        setTimeout(() => {
            menuItemsNodeList.forEach((element) => {
                element.classList.add('on');
            })
        }, 200)
    } else {
        menuItemsNodeList.forEach(((element) => {
            element.classList.remove('on');
        }))
    }
}