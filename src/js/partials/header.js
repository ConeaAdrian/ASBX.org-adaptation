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



//functional back

function goBack() {
  console.log("link", document.referrer);
  if (window.location.pathname !== "/") {
    window.history.go(-1);
    return false;
  }
}
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      var scrollUpButton = document.querySelector(".go-back");
      if (scrollUpButton) {
        scrollUpButton.style.display = "block";
      }
    } else {
      var scrollUpButton = document.querySelector(".go-back");
      if (scrollUpButton) {
        scrollUpButton.style.display = "none";
      }
    }
  });
});