$(document).ready(function(e) {
    $(".scroll-up").hide();
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".scroll-up").fadeIn();
      } else {
        $(".scroll-up").fadeOut();
      }
    });
    $(".scroll-up").click(function() {
  
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
      return false;
    });
  });