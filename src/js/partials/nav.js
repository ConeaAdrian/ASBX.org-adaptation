(function ($) {
  $(function () {
    $("nav ul li a:not(:only-child)").click(function (e) {
      $(this).siblings(".nav-dropdown").toggle();

      $(".nav-dropdown").not($(this).siblings()).hide();
      e.stopPropagation();
    });

    $("html").click(function () {
      $(".nav-dropdown").hide();
    });

    $("#nav-toggle").click(function () {
      $("nav ul").slideToggle();
    });

    $("#nav-toggle").on("click", function () {
      this.classList.toggle("active");
    });
  });
})(jQuery);



const switchButton = document.getElementById('switch');
  const legalText = document.querySelector('.legal-text');
  const yourOwnText = document.querySelector('.your-own-text');
  const legalRepresentationDiv = document.querySelector('.legal-representation');
  const yourOwnDiv = document.querySelector('.your-own');


  switchButton.checked = false;
  legalText.style.color = '#181059';
  legalText.style.fontSize = '16px';
  legalText.style.fontWeight = '700';
  legalRepresentationDiv.style.display = 'block';
  yourOwnDiv.style.display = 'none';

  switchButton.addEventListener('click', function() {
    
    legalText.style.color = this.checked ? '' : '#181059';
    legalText.style.fontSize = this.checked ? '' : '16px';
    legalText.style.fontWeight = this.checked ? '' : '700';
    yourOwnText.style.color = this.checked ? '#181059' : '';
    yourOwnText.style.fontSize = this.checked ? '16px' : '';
    yourOwnText.style.fontWeight = this.checked ? '700' : '';

  
    legalRepresentationDiv.style.display = this.checked ? 'none' : 'block';
    yourOwnDiv.style.display = this.checked ? 'block' : 'none';
  });