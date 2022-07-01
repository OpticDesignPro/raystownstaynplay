// Slideshow auto scrolling for reviews

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 8000);
}

// Slideshow auto scrolling for images

let slideIndex2 = 1;
showSlides2(slideIndex);

// Next/previous controls
function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

// Thumbnail image controls
function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    let dots = document.getElementsByClassName("dot2");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }
    slides[slideIndex2 - 1].style.display = "block";
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    setTimeout(showSlides2, 3000);
}

// Navbar transparency on scroll

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.background = "none";
        document.getElementById("navbar-brand").style.color = "var(--dark-color)";
        const navLinks = document.getElementsByClassName('nav-link')
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'var(--dark-color)'
        }
        // document.getElementById("nav-link").style.color = "var(--dark-color)";
    } else {
        document.getElementById("navbar").style.background = "linear-gradient(180deg, rgba(0, 0, 0, 1) 70%, rgba(255, 0, 0, 1) 100%)";
        document.getElementById("navbar-brand").style.color = "var(--secondary-color)";
        const navLinks = document.getElementsByClassName('nav-link')
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].style.color = 'var(--secondary-color)'
        }
        // document.getElementById("nav-link").style.color = "var(--secondary-color)";
    }
}

$(function () {

    // MENU
    $('.nav-link').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });


    // AOS ANIMATION
    AOS.init({
        disable: 'mobile',
        duration: 800,
        anchorPlacement: 'center-bottom'
    });


    // SMOOTH SCROLL
    $(function () {
        $('.nav-link').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1000);
            event.preventDefault();
        });
    });
});