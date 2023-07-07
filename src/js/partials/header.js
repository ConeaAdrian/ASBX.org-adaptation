document.addEventListener('DOMContentLoaded', function() {
  var addButtons = document.querySelectorAll('.add-button');

  addButtons.forEach(function(addButton) {
    addButton.addEventListener('click', function(event) {
      event.preventDefault();

      var parentForm = this.closest('.jobsite-card');
      var errorMessage = parentForm.querySelector('.error-message');
      var jobTitleSelect = parentForm.querySelector('#jobTitleSelect');
      var fromYearSelect = parentForm.querySelector('#fromYearSelect');
      var toYearSelect = parentForm.querySelector('#toYearSelect');

      if (jobTitleSelect.value === 'None' || fromYearSelect.value === 'None' || toYearSelect.value === 'None') {
        errorMessage.style.display = 'block';

        setTimeout(function() {
          errorMessage.style.display = 'none';
        }, 3000);
      } else {
        parentForm.submit(); // Submit the form
      }
    });

    var fromYearSelect = addButton.closest('.jobsite-card').querySelector('#fromYearSelect');
    var toYearSelect = addButton.closest('.jobsite-card').querySelector('#toYearSelect');

    toYearSelect.disabled = true;

    var beforeOption = toYearSelect.querySelector('#before');
    if (beforeOption) {
      beforeOption.remove();
    }

    fromYearSelect.addEventListener('change', function() {
      var selectedFromYear = this.value;
      var toYearOptions = Array.from(toYearSelect.options);

      toYearOptions.forEach(function(option) {
        if (selectedFromYear === "Before") {
          option.style.display = (option.id !== "before") ? "" : "none";
        } else {
          var optionYear = parseInt(option.value);
          if (isNaN(optionYear) || optionYear >= parseInt(selectedFromYear)) {
            option.style.display = "";
          } else {
            option.style.display = "none";
          }
        }
      });

      if (this.value !== "None") {
        toYearSelect.disabled = false;
      } else {
        toYearSelect.disabled = true;
      }
    });
  });
});



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
