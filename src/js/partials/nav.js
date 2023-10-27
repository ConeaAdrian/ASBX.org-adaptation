function setupMobileNavigation() {
    let navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
    let diseasesLinks = document.querySelectorAll("a.diseases");

    let lastClickedLinkId = null;

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.stopPropagation();

            let dropdown = this.nextElementSibling;
            if (dropdown) {
                dropdown.style.display = dropdown.style.display !== "flex" ? "flex" : "none";

                let dropdowns = document.querySelectorAll(".nav-dropdown");
                dropdowns.forEach(function (d) {
                    if (d !== dropdown) {
                        d.style.display = "none";
                    }
                });

                lastClickedLinkId = this.getAttribute("href");
            }
        });
    });

    diseasesLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            let dropdown = this.nextElementSibling;
            if (dropdown) {
                if (this.getAttribute("href") === lastClickedLinkId) {
                    window.location.href = lastClickedLinkId;
                } else {
                    dropdown.style.display = "flex";
                    lastClickedLinkId = this.getAttribute("href");
                }

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