function updateVisibility() {
  const isSmallScreen = $(window).width() <= 992;
  const infoBenefits = $(".information-benefits");

  infoBenefits.hide();

  if (isSmallScreen) {
    $(".AVG-claims .information-benefits").show();

    $(".ER-claims, .IR-claims, .AVG-claims").off('click').on('click', function() {
      infoBenefits.hide();
      $(this).find(".information-benefits").show();
    });
  } else {
    infoBenefits.show();
    $(".ER-claims, .IR-claims, .AVG-claims").off('click');
  }
}

$(document).ready(function() {
  updateVisibility();
  $(window).resize(updateVisibility);

  const switchButton = $('#switch');
  const legalText = $('.legal-text');
  const yourOwnText = $('.your-own-text');
  const legalRepresentationDiv = $('.legal-representation');
  const yourOwnDiv = $('.your-own');

  switchButton.prop('checked', false);
  legalText.css({ color: '#181059', fontSize: '16px', fontWeight: '500' });
  legalRepresentationDiv.show();
  yourOwnDiv.hide();

  switchButton.on('click', function() {
    const isChecked = $(this).is(':checked');
    const style = isChecked ? '' : '#181059';
    const fontSize = $(window).width() <= 475 ? '14px' : '16px';

    legalText.css({ color: style, fontSize: fontSize, fontWeight: isChecked ? '' : '500' });
    yourOwnText.css({ color: isChecked ? '#181059' : '', fontSize: fontSize, fontWeight: isChecked ? '500' : '' });
    legalRepresentationDiv.toggle();
    yourOwnDiv.toggle();
  });
});
function toggleInformationBenefits(element) {
  const infoBenefits = $(element).find(".information-benefits");
  infoBenefits.toggle();
}


// (function ($) {
//   $(function () {
//     $("nav ul li a:not(:only-child)").click(function (e) {
//       $(this).siblings(".nav-dropdown").toggle();

//       $(".nav-dropdown").not($(this).siblings()).hide();
//       e.stopPropagation();
//     });

//     $("html").click(function () {
//       $(".nav-dropdown").hide();
//     });

//     $("#nav-toggle").click(function () {
//       $("nav ul").slideToggle();
//     });

//     $("#nav-toggle").on("click", function () {
//       this.classList.toggle("active");
//     });
//   });
// })(jQuery);