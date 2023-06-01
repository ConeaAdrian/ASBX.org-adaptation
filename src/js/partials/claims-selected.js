$(document).ready(function() {
  $('.profession').click(function() {
    $(this).toggleClass('active');
    $(this).parent().find('.profession__content').slideToggle();
  });
});
