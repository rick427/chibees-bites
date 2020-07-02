AOS.init();

const body = document.querySelector('body');
const header = document.querySelector('header');
const checkbox = document.querySelector('input[name=theme]');

if(localStorage.getItem('theme') === 'dark-mode'){
    body.classList.toggle(localStorage.getItem('theme'));
    checkbox.checked = true;
    header.style.background = "url('/imgs/bg-3.jpg') no-repeat center center";
    header.style.backgroundSize = 'cover';
}

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
