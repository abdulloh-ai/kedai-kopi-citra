// Toggle classs active
const navbarNav = document.querySelector('.navbar-nav');
// Ketika hamburger meny di klik
document.querySelector('#hamburger-menu').onclick = () => {
navbarNav.classList.toggle('active');
};

// klik di luar sibar untuk menghilangkan nav
const hamburger=document.querySelector('#hamburger-menu');
document.addEventListener('click',function(e){
if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
    navbarNav.classList.remove('active');
}
});





