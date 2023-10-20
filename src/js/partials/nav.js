document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 993) {
        let navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
        navLinks.forEach(function (link) {
            link.addEventListener("click", function (e) {
                e.stopPropagation();

                let dropdown = this.nextElementSibling;
                if (dropdown) { 
                    dropdown.style.display = 
                        dropdown.style.display !== "flex" ? "flex" : "none";

                    let dropdowns = document.querySelectorAll(".nav-dropdown");
                    dropdowns.forEach(function (d) {
                        if (d !== dropdown) {
                            d.style.display = "none";
                        }
                    });
                }
            });
        });
        document.querySelector("html").addEventListener("click", function () {
            let dropdowns = document.querySelectorAll(".nav-dropdown");
            dropdowns.forEach(function (d) {
                d.style.display = "none";
            });
        });
    
        let navToggle = document.querySelector("#nav-toggle");
        navToggle.addEventListener("click", function () {
            let nav = document.querySelector("nav ul");
            if (this.classList.contains("active")) {
                nav.style.display = "none";
                this.classList.remove("active");
            } else {
                nav.style.display = "flex";
                this.classList.add("active");
            }
        });
    }
});
