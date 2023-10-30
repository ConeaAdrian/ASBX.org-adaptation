// document.addEventListener("DOMContentLoaded", function () {
//     if (window.innerWidth <= 992) {
//         let navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
//         navLinks.forEach(function (link) {
//             link.addEventListener("click", function (e) {
//                 e.stopPropagation();

//                 let dropdown = this.nextElementSibling;
//                 if (dropdown) { 
//                     dropdown.style.display = 
//                         dropdown.style.display !== "flex" ? "flex" : "none";

//                     let dropdowns = document.querySelectorAll(".nav-dropdown");
//                     dropdowns.forEach(function (d) {
//                         if (d !== dropdown) {
//                             d.style.display = "none";
//                         }
//                     });
//                 }
//             });
//         });
//     }

//     document.querySelector("html").addEventListener("click", function () {
//         let dropdowns = document.querySelectorAll(".nav-dropdown");
//         dropdowns.forEach(function (d) {
//             d.style.display = "none";
//         });
//     });

//     let navToggle = document.querySelector("#nav-toggle");
//     navToggle.addEventListener("click", function () {
//         let nav = document.querySelector("nav ul");
//         if (this.classList.contains("active")) {
//             nav.style.display = "none";
//             this.classList.remove("active");
//         } else {
//             nav.style.display = "flex";
//             this.classList.add("active");
//         }
//     });
// });

// function handleDoubleClickOnLink(linkElement, event) {
//     if (window.innerWidth <= 992) {
//         event.preventDefault();
//         window.location.href = linkElement.href;
//     }
// }

// function handleSingleClickOnLink(linkElementParent, event) {
//     if (window.innerWidth <= 920) {
//         event.stopPropagation();
//         event.preventDefault();
//         openNavDropDown(linkElementParent);
//     }
// }



// function setupMobileNavigation() {
//     let navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
//     let diseasesLinks = document.querySelectorAll("a.diseases");
//     navLinks.forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             e.stopPropagation();
//             let dropdown = this.nextElementSibling;
//             if (dropdown) { 
//                 dropdown.style.display = 
//                     dropdown.style.display !== "flex" ? "flex" : "none";
//                 let dropdowns = document.querySelectorAll(".nav-dropdown");
//                 dropdowns.forEach(function (d) {
//                     if (d !== dropdown) {
//                         d.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });
//     diseasesLinks.forEach(function (link) {
//         link.addEventListener("click", function (e) {
//             e.preventDefault();
//             let dropdown = this.nextElementSibling;
//             if (dropdown) {
//                 dropdown.style.display = "flex";
//                 let dropdowns = document.querySelectorAll(".nav-dropdown");
//                 dropdowns.forEach(function (d) {
//                     if (d !== dropdown) {
//                         d.style.display = "none";
//                     }
//                 });
//             }
//         });
//     });
//     document.querySelector("html").addEventListener("click", function () {
//         let dropdowns = document.querySelectorAll(".nav-dropdown");
//         dropdowns.forEach(function (d) {
//             d.style.display = "none";
//         });
//     });
//     let navToggle = document.querySelector("#nav-toggle");
//     navToggle.addEventListener("click", function () {
//         let nav = document.querySelector("nav ul");
//         if (this.classList.contains("active")) {
//             nav.style.display = "none";
//             this.classList.remove("active");
//         } else {
//             nav.style.display = "flex";
//             this.classList.add("active");
//         }
//     });
// }
// function setupDesktopNavigation() {
// }
// function checkWindowSize() {
//     if (window.innerWidth <= 993) {
//         setupMobileNavigation();
//     } else {
//         setupDesktopNavigation();
//     }
// }
// document.addEventListener("DOMContentLoaded", checkWindowSize);
// window.addEventListener("resize", checkWindowSize);

// Eliminați evenimentul "DOMContentLoaded"

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

document.querySelector("html").addEventListener("click", function () {
    const dropdowns = document.querySelectorAll(".nav-dropdown");
    dropdowns.forEach(function (d) {
        d.style.display = "none";
    });
});

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
