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
 
 
 
 //--------

 
//  $(document).ready(function() {
//   $('.popup-claim').hide();

//   $('.button-open').click(function() {
//     $('.popup-claim').fadeIn();
//     $('body').addClass('locked');
//   });

//   $('.chase').change(function() {
//     var job = $('#job').val();
//     var start = $('#start').val();
//     var end = $('#end').val();
//     if (job && start && end) {
//       $('.popup-button').removeAttr('disabled');
//       $('.popup-claim').removeClass('error');
//       $('.close-button-alt').hide();
//       $('.button-add').css({
//         'background-color': '#324a74',
//         'border-color': '#324a74',
//         'color': '#ffffff'
//       });
//     } else {
//       $('.popup-button').attr('disabled', 'disabled');
//       $('.close-button-alt').show();
//       $('.button-add').css({
//         'background-color': '#acaaaa',
//         'border-color': '#324A74',
//         'color': ''
//       });
//     }
//   });

//   $('.popup-button').click(function(e) {
//     e.preventDefault();
//     var job = $('#job').val();
//     var start = $('#start').val();
//     var end = $('#end').val();
//     if (job && start && end) {
//       $('.popup-claim').fadeOut(function() {
//         $('body').removeClass('locked');
//         $('#job').val('');
//         $('#start').val('');
//         $('#end').val('');
//         $('.button-add').css({
//           'background-color': '#acaaaa',
//           'border-color': '#324A74',
//           'color': ''
//         });
//       });
//     } else {
//       $('.popup-claim').addClass('error');
//     }
//   });

//   $('.close-button').click(function() {
//     $('.popup-claim').fadeOut(function() {
//       $('body').removeClass('locked');
//       $('#job').val('');
//       $('#start').val('');
//       $('#end').val('');
//       $('.button-add').css({
//         'background-color': '#acaaaa',
//         'border-color': '#324A74',
//         'color': ''
//       });
//     });
//   });
// });


 
 
 
 
 //----------
 
 

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
