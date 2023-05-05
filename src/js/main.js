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



  const stateList = document.getElementById('state-list');
const ol = document.createElement('ol');

// Adaugă stilurile clasei la listă
ol.classList.add('state-list');

// Parcurge fiecare element și adaugă un element <li> cu același conținut și clase
for (let i = 0; i < stateList.children.length; i++) {
  const state = stateList.children[i];
  const li = document.createElement('li');
  
  // Copiază clasele din elementul original în elementul <li>
  li.className = state.className;
  
  // Copiază conținutul din elementul original în elementul <li>
  li.textContent = state.textContent;
  
  // Adaugă elementul <li> la lista ordonată
  ol.appendChild(li);
}

// Înlocuiește elementul original cu lista ordonată
stateList.parentNode.replaceChild(ol, stateList);
