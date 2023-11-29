document.addEventListener('DOMContentLoaded', function () {
    var toggleBtn = document.getElementById('toggleBtn');
    var dropdownMenu = document.querySelector('.dropdown-menu');
    var navLinks = document.querySelectorAll('.menu-container a');

    toggleBtn.addEventListener('click', function () {
        toggleDropdown();
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            dropdownMenu.style.display = 'none';
        });
    });

    function toggleDropdown() {
        if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
            dropdownMenu.style.display = 'block';
        } else {
            dropdownMenu.style.display = 'none';
        }
    }
});

function mouseOver() {
    var container = document.querySelector('.a-propos-title h1');
    var arrow = document.getElementById('arrow');

    container.style.background = 'white';
    arrow.style.display = 'block';
}

function mouseOut() {
    var container = document.querySelector('.a-propos-title h1');
    var arrow = document.getElementById('arrow');

    container.style.background = 'transparent';
    arrow.style.display = 'none';
}

function scrollToSection() {
    var section = document.getElementById('.a-propos-title h1');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

function mouseOver1() {
    var container = document.querySelector('.parcours-title h1');
    var arrow = document.getElementById('arrow1');

    container.style.background = 'black';
    arrow.style.display = 'block';
}

function mouseOut1() {
    var container = document.querySelector('.parcours-title h1');
    var arrow = document.getElementById('arrow1');

    container.style.background = 'transparent';
    arrow.style.display = 'none';
}

function scrollToSection1() {
    var section = document.getElementById('.parcours-title h1');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}

function mouseOver2() {
    var container = document.querySelector('.projets-title h1');
    var arrow = document.getElementById('arrow2');

    container.style.background = 'white';
    arrow.style.display = 'block';
}

function mouseOut2() {
    var container = document.querySelector('.projets-title h1');
    var arrow = document.getElementById('arrow2');

    container.style.background = 'transparent';
    arrow.style.display = 'none';
}

function scrollToSection2() {
    var section = document.getElementById('.projets-title h1');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}




