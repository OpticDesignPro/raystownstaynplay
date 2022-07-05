// Slideshow auto scrolling for reviews
var slideIndex = 1;

var myTimer;

var slideshowContainer;

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () { plusSlides(1) }, 9000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer = setInterval(function () { plusSlides(n + 2) }, 9000);
    } else {
        myTimer = setInterval(function () { plusSlides(n + 1) }, 9000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(n + 1) }, 9000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () { plusSlides(slideIndex) }, 9000);
}

// Slideshow auto scrolling for images

var slideIndex2 = 1;

var myTimer2;

var slideshowContainer2;

window.addEventListener("load", function () {
    showSlides2(slideIndex2);
    myTimer2 = setInterval(function () { plusSlides2(1) }, 4000);

    //COMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    slideshowContainer2 = document.getElementsByClassName('slideshow-inner')[0];

    //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
    // slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

    slideshowContainer2.addEventListener('mouseenter', pause)
    slideshowContainer2.addEventListener('mouseleave', resume)
})

// NEXT AND PREVIOUS CONTROL
function plusSlides2(n) {
    clearInterval(myTimer2);
    if (n < 0) {
        showSlides2(slideIndex2 -= 1);
    } else {
        showSlides2(slideIndex2 += 1);
    }

    //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME

    if (n === -1) {
        myTimer2 = setInterval(function () { plusSlides2(n + 2) }, 4000);
    } else {
        myTimer2 = setInterval(function () { plusSlides2(n + 1) }, 4000);
    }
}

//Controls the current slide and resets interval if needed
function currentSlide2(n) {
    clearInterval(myTimer2);
    myTimer2 = setInterval(function () { plusSlides2(n + 1) }, 4000);
    showSlides2(slideIndex2 = n);
}

function showSlides2(n) {
    var i;
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots2 = document.getElementsByClassName("dot2");
    if (n > slides2.length) { slideIndex2 = 1 }
    if (n < 1) { slideIndex2 = slides2.length }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2 - 1].style.display = "block";
    dots2[slideIndex2 - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer2);
}

resume = () => {
    clearInterval(myTimer2);
    myTimer2 = setInterval(function () { plusSlides2(slideIndex2) }, 4000);
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

