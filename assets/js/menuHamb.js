document.querySelector('#menu-bar').addEventListener ('click', () => {
    document.querySelector('#menu-bar').classList.toggle("change");
    document.querySelector('#nav').classList.toggle("change");
    document.querySelector('#menu-bg').classList.toggle("change-bg");
    document.querySelector('.overlay').classList.toggle("hidden");document.querySelector('header').classList.toggle("change");
})

document.querySelector('.overlay').addEventListener ('click', () => {
    document.querySelector('#menu-bar').classList.toggle("change");
    document.querySelector('#nav').classList.toggle("change");
    document.querySelector('#menu-bg').classList.toggle("change-bg");
    document.querySelector('.overlay').classList.toggle("hidden");
    document.querySelector('header').classList.toggle("change");
})










