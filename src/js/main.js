@@include("partials/main.js");
@@include("partials/nav.js");
@@include("partials/header.js");

$(document).ready(function() {
    $('.faq-item').addClass('closed'); // adauga clasa "closed" initial pe toate elementele "faq-item"
    $('.faq-item').click(function() {
      $(this).toggleClass('open closed');
      $(this).children('.answer').slideToggle();
    });
  });
   
  
  

