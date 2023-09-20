document.addEventListener("DOMContentLoaded", function () {
  let navLinks = document.querySelectorAll(".nav-list li a:not(:only-child)");
  navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
          e.stopPropagation();

          let dropdown = this.nextElementSibling;
          if (dropdown) { 
              dropdown.style.display = dropdown.style.display !== "block" ? "block" : "none";

              if (dropdown.classList.contains("top-level")) {
                  let otherDropdowns = document.querySelectorAll(".top-level");
                  otherDropdowns.forEach(function (d) {
                      if (d !== dropdown) {
                          d.style.display = "none";
                      }
                  });
              } else if (dropdown.classList.contains("sub-level")) {
                  let otherDropdowns = document.querySelectorAll(".sub-level");
                  otherDropdowns.forEach(function (d) {
                      if (d !== dropdown) {
                          d.style.display = "none";
                      }
                  });
              }
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
          nav.style.display = "block";
          this.classList.add("active");
      }
  });
});
