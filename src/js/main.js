@@include("partials/main.js");
@@include("partials/nav.js");
@@include("partials/header.js");
@@include("partials/map.js");

$(document).ready(function() {
    $('.faq-item').addClass('closed'); // adauga clasa "closed" initial pe toate elementele "faq-item"
    $('.faq-item').click(function() {
      $(this).toggleClass('open closed');
      $(this).children('.answer').slideToggle();
    });
  });
   
  
  



  (function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery



  