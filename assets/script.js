const menuBurgerState = document.getElementById('burger-toggle')


menuBurgerState.addEventListener('change', function () {
    if (this.checked) {
        document.body.style.overflow = 'hidden';
    } else document.body.style.overflow = '';
})