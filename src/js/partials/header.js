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

    // Here is the new code to update the toYearSelect options based on fromYearSelect value
    var fromYearSelect = addButton.closest('.jobsite-card').querySelector('#fromYearSelect');
    var toYearSelect = addButton.closest('.jobsite-card').querySelector('#toYearSelect');

    // Initially disable the toYearSelect
    toYearSelect.disabled = true;

    // Remove "Before" option from "toYearSelect"
    var beforeOption = toYearSelect.querySelector('option[value="Before"]');
    if (beforeOption) {
        beforeOption.remove();
    }

    fromYearSelect.addEventListener('change', function() {
      var selectedFromYear = this.value;
      var toYearOptions = Array.from(toYearSelect.options);

      toYearOptions.forEach(function(option) {
        if (selectedFromYear === "Before") {
          option.style.display = (option.value !== "Before") ? "" : "none";
        } else {
          var optionYear = parseInt(option.value);
          if (isNaN(optionYear) || optionYear >= parseInt(selectedFromYear)) {
            option.style.display = "";
          } else {
            option.style.display = "none";
          }
        }
      });

      // Enable toYearSelect once an option is selected in fromYearSelect
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
  
        var parentForm = this.closest('.boiler-card');
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
  document.addEventListener('DOMContentLoaded', function() {
    var addButtons = document.querySelectorAll('.add-button');
  
    addButtons.forEach(function(addButton) {
      addButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        var parentForm = this.closest('.add-navy'); // Am corectat clasa în care cautăm formularul
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
  