const navBtn = document.getElementById('navbar-btn');
const header = document.getElementById('header')
const navBar = document.getElementById('navbar')

const openNavbar = () => {
    if (header.style.display === 'none'){
        navBtn.style.top = '60px';
        header.style.display = 'block';
    } else {
        navBtn.style.top = '0px';
        header.style.display = 'none';
    }
}

navBtn.addEventListener('click', openNavbar);