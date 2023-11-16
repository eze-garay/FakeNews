

document.querySelector(".menu-btn").addEventListener("click",() =>{
    document.querySelector(".nav-menu").classList.toggle("show");
})


ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards',{delay: 500});
ScrollReveal().reveal('.cards-banner-one',{delay: 500});


document.addEventListener("DOMContentLoaded", function () {
    var menu = document.querySelector('.nav-main');
    var altura = menu.offsetTop;

    window.addEventListener('scroll', function () {
       

        if (window.scrollY > altura) {
            
            menu.classList.add('menu-fixed');
        } else {
            
            menu.classList.remove('menu-fixed');
        }
    });
});