var ul = document.querySelector("nav ul");
var link = document.querySelectorAll("nav ul li a");
var menuBar = document.querySelector('.menubar');
var click_mod = document.querySelector('.menubar2');

menuBar.addEventListener('click', active);
function active() {
    this.classList.add('active');
    ul.classList.add('active');
    click_mod.classList.add('active');
}

click_mod.addEventListener('click', desactive);
function desactive() {
    this.classList.remove('active');
    ul.classList.remove('active');
    menuBar.classList.remove('active');
}

link.forEach((link) => {
    link.addEventListener('click', ()=>{
        click_mod.classList.remove('active');
        ul.classList.remove('active');
        menuBar.classList.remove('active');
    })
})