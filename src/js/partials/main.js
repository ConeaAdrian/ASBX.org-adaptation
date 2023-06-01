$(document).ready(function (e) {
 //scroll up
 $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
   $(".scroll-up").fadeIn();
   $(".scroll-up").addClass("show");
  } else {
   $(".scroll-up").fadeOut();
   $(".scroll-up").removeClass("show");
  }
 });

 //Click event to scroll to top
 $(".scroll-up").click(function () {
  $("html, body").animate(
   {
    scrollTop: 0,
   },
   800
  );
  return false;
 });
});

$(document).ready(function() {
  $('.validation-calculator > div').hide();
  $('.validation-calculator').hide();

  $('.client-question__content .button').click(function() {
    $('.validation-calculator').fadeIn();
    $('.number-validation').fadeIn();
    $('body').addClass('locked');
  });

  $('.number-validation .button').click(function() {
    $('.number-validation').fadeOut();
    $('.code-confirmation').fadeIn();
  });

  $('.code-confirmation .button').click(function() {
    $('.code-confirmation').fadeOut();
    $('.thank-you').fadeIn();
  });

  $('.thank-you .button').click(function() {
    $('.thank-you').fadeOut();
    $('.validation-calculator').fadeOut();
    $('body').removeClass('locked');
  });
});



//--------
$(document).ready(function() {
  $('.popup-claim').hide();

  $('.button-open').click(function() {
    $('.popup-claim').fadeIn();
    $('body').addClass('locked');
  });

  $('.chase').change(function() {
    var job = $('#job').val();
    var start = $('#start').val();
    var end = $('#end').val();
    if (job && start && end) {
      $('.popup-button').removeAttr('disabled');
      $('.popup-claim').removeClass('error');
      $('.close-button-alt').hide();
    } else {
      $('.popup-button').attr('disabled', 'disabled');
      $('.close-button-alt').show();
    }
  });

  $('.popup-button').click(function(e) {
    e.preventDefault();
    var job = $('#job').val();
    var start = $('#start').val();
    var end = $('#end').val();
    if (job && start && end) {
      $('.popup-claim').fadeOut(function() {
        $('body').removeClass('locked');
      });
    } else {
      $('.popup-claim').addClass('error');
    }
  });

  $('.close-button').click(function() {
    $('.popup-claim').fadeOut(function() {
      $('body').removeClass('locked');
    });
  });
});





//----------

