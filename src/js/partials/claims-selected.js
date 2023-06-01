$(document).ready(function() {
  $('.profession').click(function() {
    $(this).toggleClass('active');
    $(this).next('.profession__content').slideToggle();
  });

  // Deschide elementele by default
  $('.profession').each(function() {
    $(this).addClass('active');
    $(this).next('.profession__content').slideDown();
  });
});
