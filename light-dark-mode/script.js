// DOM elements
const toggleSwtich = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//Set images to dark or light mode
function imageMode(color) {
    image1.src = `img/undraw_chatting_2yvo_${color}.svg`;
    image2.src = `img/undraw_mobile_testing_reah_${color}.svg`;
    image3.src = `img/undraw_phone_call_grmk_${color}.svg`;

}




// Dark mode: Changes the color of elements that are not in the 'data-theme' set manually
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /40%';
    textBox.style.backgroundColor = 'rgb(255 255 255 /55%';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    imageMode('dark');
    // toggleIcon.children[1].classList.remove('fa-sun');
    // toggleIcon.children[1].classList.add('fa-moon');
    // console.log(toggleIcon.children);
}



// Light mode: Changes the color of elements that are not in the 'data-theme' set manually
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 /50%';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imageMode('light');
    // toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    // console.log(toggleIcon.children);
}



// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
    // console.log(event.target.checked);
}

//EventListener
toggleSwtich.addEventListener('change', switchTheme);