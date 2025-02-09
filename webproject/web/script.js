document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".info-card");

    function checkScroll() {
        fadeElements.forEach((element) => {
            const position = element.getBoundingClientRect().top;
            if (position < window.innerHeight - 100) {
                element.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Run on page load

    // Smooth Scroll to Sections
    window.scrollToSection = function (id) {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    // Mobile Menu Toggle
    window.toggleMenu = function () {
        document.getElementById("nav-links").classList.toggle("show");
    };
});
