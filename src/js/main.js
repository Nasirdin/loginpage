const burger = document.querySelector('.burger');
const burgerIcon = document.querySelector('.burger__icon');
const nav = document.querySelector('.header__nav')

burger.addEventListener('click', () => {
    burgerIcon.classList.toggle('active');
    nav.classList.toggle('active')
})

const passwordShow = (e) => {
    const inputPassword = document.getElementById('password');
    if(inputPassword.getAttribute('type') == 'password') {
        e.classList.add('view')
        inputPassword.setAttribute('type', 'text')
    } else {
        e.classList.remove('view')
        inputPassword.setAttribute('type', 'password');
    }
    return false
}