// (function ($) {
//   $(function () {
//     $("nav ul li a:not(:only-child)").click(function (e) {
//       $(this).siblings(".nav-dropdown").toggle();

//       $(".nav-dropdown").not($(this).siblings()).hide();
//       e.stopPropagation();
//     });

//     $("html").click(function () {
//       $(".nav-dropdown").hide();
//     });

//     $("#nav-toggle").click(function () {
//       $("nav ul").slideToggle();
//     });

//     $("#nav-toggle").on("click", function () {
//       this.classList.toggle("active");
//     });
//   });
// })(jQuery);



document.addEventListener("DOMContentLoaded", function() {

  let navLinks = document.querySelectorAll("nav ul li a:not(:only-child)");
  navLinks.forEach(function(link) {
      link.addEventListener("click", function(e) {
          e.stopPropagation();
          let dropdown = this.nextElementSibling;
          dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";

          let dropdowns = document.querySelectorAll(".nav-dropdown");
          dropdowns.forEach(function(d) {
              if (d !== dropdown) {
                  d.style.display = "none";
              }
          });
      });
  });

  document.querySelector("html").addEventListener("click", function() {
      let dropdowns = document.querySelectorAll(".nav-dropdown");
      dropdowns.forEach(function(d) {
          d.style.display = "none";
      });
  });

  let navToggle = document.querySelector("#nav-toggle");
  navToggle.addEventListener("click", function() {
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
