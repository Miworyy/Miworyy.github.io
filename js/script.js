let login = document.querySelector('.login');
let loginButton = document.querySelector('.loginButton')

document.addEventListener('click', e => {
    if (e.target == loginButton.target) {login.classList.toggle('active'); return}
    if (e.target.closest('.login-menu') != null) return;
    login.classList.remove('active');
})