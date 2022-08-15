const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});

const toggle = document.getElementById("toggleDark");
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'
    }
})
