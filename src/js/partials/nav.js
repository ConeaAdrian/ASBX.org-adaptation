document.addEventListener("DOMContentLoaded", function () {
   
    document.getElementById("viewClaims").addEventListener("click", function () {
        console.log("Butonul yes");
    
        var claimsDiv = document.getElementById("claims-select-mobile");
        if (claimsDiv.style.display === "none" || claimsDiv.style.display === "") {
            claimsDiv.style.display = "block";
        } else {
            claimsDiv.style.display = "none";
        }
    });
    
    document.getElementById("close-claims-calculator").addEventListener("click", function () {
        var claimsDiv = document.getElementById("claims-select-mobile");
        claimsDiv.style.display = "none";
    });
    
  
    let navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
    navLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.stopPropagation();
        let dropdown = this.nextElementSibling;
        dropdown.style.display =
          dropdown.style.display === "none" ? "block" : "none";
  
        let dropdowns = document.querySelectorAll(".nav-dropdown");
        dropdowns.forEach(function (d) {
          if (d !== dropdown) {
            d.style.display = "none";
          }
        });
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
  