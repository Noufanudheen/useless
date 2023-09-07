window.addEventListener('load', () => {
    const header = document.querySelector('header');
    const subHeader = document.querySelector('.sub-header');
    const tiles = document.querySelectorAll('.tile'); // Select all tile elements

    const headerHeight = header.offsetHeight;

    // Set initial visibility and transform for sub-header
    subHeader.style.opacity = 1;
    subHeader.style.transform = 'translateY(0)';

    function isInViewport(element) {
        const bounding = element.getBoundingClientRect();
        return bounding.top <= window.innerHeight && bounding.bottom >= 0;
    }

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;

        if (scrollPosition > headerHeight) {
            subHeader.style.transform = 'translateY(-100%)'; // Hide sub-header
            tiles.forEach((tile, index) => {
                if (isInViewport(tile) && tile.style.opacity === '') {
                    tile.style.transition = `opacity 0.5s ease-out ${index * 0.2}s, transform 0.5s ease-out ${index * 0.2}s`;
                    tile.style.opacity = 1;
                    tile.style.transform = 'scale(1)';
                }
            });
        } else {
            subHeader.style.transform = 'translateY(0)'; // Show sub-header
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-up-button");

    // Show or hide the scroll button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    // Scroll to the top when the button is clicked
    scrollButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

const phoneInput = document.getElementById("igl-phone");
const phonePrefix = document.createElement("div");
phonePrefix.className = "phone-prefix";

phoneInput.addEventListener("input", () => {
    if (phoneInput.value.length === 0) {
        phonePrefix.style.opacity = 1;
    } else {
        phonePrefix.style.opacity = 0;
    }
});

phoneInput.addEventListener("blur", () => {
    if (phoneInput.value.length === 0) {
        phonePrefix.style.opacity = 1;
    }
});

phoneInput.addEventListener("focus", () => {
    phonePrefix.style.opacity = 0;
});

phoneInput.parentNode.insertBefore(phonePrefix, phoneInput);

document.getElementById("igl-phone").addEventListener("input", function(event) {
    event.target.value = event.target.value.replace(/\D/g, "");
});