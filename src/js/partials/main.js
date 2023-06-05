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
 

 function add_claim(el) {
  let popup = el.parentElement.parentElement.parentElement.querySelector("#popup-claim");
  let closeButton = popup.querySelector(".close-button");
  let addClaimsButton = popup.querySelector(".button-add");

  popup.style.display = "block";

  closeButton.addEventListener("click", function() {
    popup.style.display = "none";
  });

  let dropdowns = popup.querySelectorAll(".chase");
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener("change", function() {
      let selectedOptions = Array.from(dropdowns).every(function(dropdown) {
        return dropdown.value !== "";
      });

      if (selectedOptions) {
        addClaimsButton.disabled = false;
        addClaimsButton.style.backgroundColor = "#324A74";
      } else {
        addClaimsButton.disabled = true;
        addClaimsButton.style.backgroundColor = "";
      }
    });
  });
}
