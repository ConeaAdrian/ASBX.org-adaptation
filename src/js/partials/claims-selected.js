$(document).ready(function() {
    $('.profession').click(function() {
      $(this).toggleClass('active');
      $(this).next('.profession__content').slideToggle();
    });
  });