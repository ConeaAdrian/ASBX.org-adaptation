// document.addEventListener('DOMContentLoaded', function() {
//   var addButtons = document.querySelectorAll('.add-button');

//   addButtons.forEach(function(addButton) {
//     addButton.addEventListener('click', function(event) {
//       event.preventDefault();

//       var parentForm = this.closest('.jobsite-card');
//       if (!parentForm) {
//         console.error("Ancestor element with class 'jobsite-card' not found.");
//         return;
//       }

//       var errorMessage = parentForm.querySelector('.error-message');
//       var jobTitleSelect = parentForm.querySelector('#jobTitleSelect');
//       var fromYearSelect = parentForm.querySelector('#fromYearSelect');
//       var toYearSelect = parentForm.querySelector('#toYearSelect');

//       if (jobTitleSelect.value === 'None' || fromYearSelect.value === 'None' || toYearSelect.value === 'None') {
//         errorMessage.style.display = 'block';

//         setTimeout(function() {
//           errorMessage.style.display = 'none';
//         }, 3000);
//       } else {
//         parentForm.submit(); // Submit the form
//       }
//     });

//     var parentCard = addButton.closest('.jobsite-card');
//     var fromYearSelect = parentCard.querySelector('#fromYearSelect');
//     var toYearSelect = parentCard.querySelector('#toYearSelect');

//     toYearSelect.disabled = true;

//     var beforeOption = toYearSelect.querySelector('#before');
//     if (beforeOption) {
//       beforeOption.remove();
//     }

//     fromYearSelect.addEventListener('change', function() {
//       var selectedFromYear = this.value;
//       var toYearOptions = Array.from(toYearSelect.options);

//       toYearOptions.forEach(function(option) {
//         if (selectedFromYear === "Before") {
//           option.style.display = (option.id !== "before") ? "" : "none";
//         } else {
//           var optionYear = parseInt(option.value);
//           option.style.display = isNaN(optionYear) || optionYear >= parseInt(selectedFromYear) ? "" : "none";
//         }
//       });

//       toYearSelect.disabled = (this.value === "None");
//     });
//   });
// });




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