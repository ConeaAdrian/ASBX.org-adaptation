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
