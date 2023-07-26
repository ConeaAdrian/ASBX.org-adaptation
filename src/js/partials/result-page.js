function updateVisibility() {
    if ($(window).width() <= 992) {
      $(".ER-claims .information-benefits, .IR-claims .information-benefits").hide();
      $(".AVG-claims .information-benefits").show();
  
      $(".ER-claims, .IR-claims").off('click').on('click', function() {
        $(".information-benefits").hide();
        $(this).find(".information-benefits").show();
      });
  
      $(".AVG-claims").off('click').on('click', function() {
        $(".information-benefits").hide();
        $(this).find(".information-benefits").show();
      });
    } else {
      $(".information-benefits").show();
      $(".ER-claims, .IR-claims, .AVG-claims").off('click');
    }
  }
  
  $(document).ready(function() {
    updateVisibility();
    $(window).resize(updateVisibility);
  });
  


const switchButton = document.getElementById('switch');
const legalText = document.querySelector('.legal-text');
const yourOwnText = document.querySelector('.your-own-text');
const legalRepresentationDiv = document.querySelector('.legal-representation');
const yourOwnDiv = document.querySelector('.your-own');


switchButton.checked = false;
legalText.style.color = '#181059';
legalText.style.fontSize = '16px';
legalText.style.fontWeight = '500';
legalRepresentationDiv.style.display = 'block';
yourOwnDiv.style.display = 'none';

switchButton.addEventListener('click', function() {
  
  legalText.style.color = this.checked ? '' : '#181059';
  legalText.style.fontSize = this.checked ? '' : '16px';
  legalText.style.fontWeight = this.checked ? '' : '500';
  yourOwnText.style.color = this.checked ? '#181059' : '';
  yourOwnText.style.fontSize = this.checked ? '16px' : '';
  yourOwnText.style.fontWeight = this.checked ? '500' : '';


  legalRepresentationDiv.style.display = this.checked ? 'none' : 'block';
  yourOwnDiv.style.display = this.checked ? 'block' : 'none';

  const deviceWidth = window.innerWidth;
  if (deviceWidth <= 475) {
    legalText.style.fontSize = this.checked ? '14px' : '14px';
    yourOwnText.style.fontSize = this.checked ? '14px' : '14px';
  }
});




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