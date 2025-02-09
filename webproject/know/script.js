// Accordion Functionality
let accHeaders = document.querySelectorAll(".accordion-header");
accHeaders.forEach((header) => {
    header.addEventListener("click", function () {
        let content = this.nextElementSibling;
        content.style.display = content.style.display === "block" ? "none" : "block";
    });
});
