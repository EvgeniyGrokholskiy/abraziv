document.querySelector('.header__nav-arrow').addEventListener('click', ()=> {

    const liArray = document.querySelectorAll('.header__list_item-mobile');
    const navMobile = document.querySelector('.header__nav-mobile');
    const navArrow = document.querySelector('.header__nav-arrow');
    navArrow.classList.toggle('header__nav-arrow-open');
    navMobile.classList.toggle('show');


        if (navMobile.classList.contains('show')){
            setTimeout(()=> {
            liArray.forEach((element) => {
                element.classList.add('on');
            })
            },200)
        }else {
            liArray.forEach(((element) => {
                element.classList.remove('on');
            }))
        }

})

