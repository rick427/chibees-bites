// initialize animate on scroll library
AOS.init();

// select DOM elements
const body = document.querySelector('body');
const header = document.querySelector('header');
const headerNav = document.querySelector('nav');
console.log(headerNav)
const checkbox = document.querySelector('input[name=theme]');

// Attach event listener to the window object to check if the scroll on 
// on the Y-direction is greater than 0. i.e the user has scrolled
window.addEventListener('scroll', () => {
    headerNav.classList.toggle('sticky', window.scrollY > 0);
});

// check if something exists already in LS
if(localStorage.getItem('theme') === 'dark-mode'){
    body.classList.toggle(localStorage.getItem('theme'));
    checkbox.checked = true;
    header.style.background = "url('/imgs/bg-3.jpg') no-repeat center center";
    header.style.backgroundSize = 'cover';
}

// add event listener to enable and disable themes
checkbox.addEventListener('change', event => {
    if(event.target.checked){
        body.classList.add('dark-mode');
        header.style.background = "url('/imgs/bg-3.jpg') no-repeat center center";
        header.style.backgroundSize = 'cover';
        localStorage.setItem('theme', body.classList);
    }
    else{
        body.classList.remove('dark-mode');
        header.style.background = "url('/imgs/bg-4.jpg') no-repeat center center";
        header.style.backgroundSize = 'cover';
        localStorage.removeItem('theme');
    }
});

