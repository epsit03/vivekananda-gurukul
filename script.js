window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = '#333';
        header.style.color = '#fff';
    } else {
        header.style.background = '#f5f5f5';
        header.style.color = '#333';
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('hidden');
                observer.unobserve(entry.target); // Stop observing once the animation is triggered
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in view

    hiddenElements.forEach(element => {
        observer.observe(element);
    });
});


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
