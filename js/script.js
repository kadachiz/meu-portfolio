let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('ativo');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo');
        });
    };
});

    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 100)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('ativo')

};

let darkModeIcon = document.querySelector('#darkmode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .servicos-container, .projetos-box, .contato form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .sobre-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .sobre-content', { origin: 'right' });