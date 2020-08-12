const toggleSwtich = document.querySelector('input[type="checkbox"]');

// Switch Theme Dynamically
function switchTheme(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
    // console.log(event.target.checked);
}

//EventListener
toggleSwtich.addEventListener('change', switchTheme);