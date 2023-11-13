function toggleNavDropDown(linkElementParent) {
    const dropdown = linkElementParent.querySelector(".nav-dropdown");
    if (dropdown) {
        dropdown.style.display = dropdown.style.display !== "flex" ? "flex" : "none";

        const dropdowns = document.querySelectorAll(".nav-dropdown");
        dropdowns.forEach(function (d) {
            if (d !== dropdown) {
                d.style.display = "none";
            }
        });
    }
}

function handleLinkClick(linkElementParent, event) {
    if (window.innerWidth <= 920) {
        event.stopPropagation();
        event.preventDefault();
        toggleNavDropDown(linkElementParent);
    } else {
        const href = linkElementParent.querySelector("a").href;
        window.location.href = href;
    }
}

if (window.innerWidth <= 992) {
    document.querySelector("html").addEventListener("click", function () {
        const dropdowns = document.querySelectorAll(".nav-dropdown");
        dropdowns.forEach(function (d) {
            d.style.display = "none";
        });
    });
}


const navToggle = document.querySelector("#nav-toggle");
navToggle.addEventListener("click", function () {
    const nav = document.querySelector("nav ul");
    if (this.classList.contains("active")) {
        nav.style.display = "none";
        this.classList.remove("active");
    } else {
        nav.style.display = "flex";
        this.classList.add("active");
    }
});
