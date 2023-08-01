document.addEventListener('DOMContentLoaded', function() {
  var addButtons = document.querySelectorAll('.add-button');

  addButtons.forEach(function(addButton) {
    addButton.addEventListener('click', function(event) {
      event.preventDefault();

      var parentForm = this.closest('.add-navy');
      var errorMessage = parentForm.querySelector('.error-message');
      var jobTitleSelect = parentForm.querySelector('#select1');
      var beforeCheckbox = parentForm.querySelector('#beforeCheckbox');
      var afterCheckbox = parentForm.querySelector('#afterCheckbox');

      if (jobTitleSelect.value === '' || (beforeCheckbox.checked === false && afterCheckbox.checked === false)) {
        errorMessage.style.display = 'block';

        setTimeout(function() {
          errorMessage.style.display = 'none';
        }, 3000);
      } else {
        parentForm.submit(); // Submit the form
      }
    });
  });
});


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