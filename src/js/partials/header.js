document.addEventListener('DOMContentLoaded', function() {
    var addButtons = document.querySelectorAll('.add-button');
    var jobTitleSelect = document.getElementById('jobTitleSelect');
    var fromYearSelect = document.getElementById('fromYearSelect');
    var toYearSelect = document.getElementById('toYearSelect');
  
    addButtons.forEach(function(addButton) {
      addButton.addEventListener('click', function(event) {
        event.preventDefault();
  
        var parentForm = this.closest('.jobsite-card');
        var errorMessage = parentForm.querySelector('.error-message');
  
        if (jobTitleSelect.value === 'None' || fromYearSelect.value === 'None' || toYearSelect.value === 'None') {
          errorMessage.style.display = 'block';
  
          setTimeout(function() {
            errorMessage.style.display = 'none';
          }, 3000);
        } else {
          parentForm.submit(); // Submit the form
        }
      });
    });
  
    fromYearSelect.addEventListener('change', function() {
      var selectedYear = parseInt(this.value);
  
      for (var i = 0; i < toYearSelect.options.length; i++) {
        var option = toYearSelect.options[i];
        var year = parseInt(option.value);
  
        if (year < selectedYear) {
          option.style.display = 'none'; // Hide the option
        } else {
          option.style.display = 'block'; // Show the option
        }
      }
  
      // Enable or disable the toYearSelect dropdown based on the selected option
      if (selectedYear === 0) {
        toYearSelect.disabled = true;
      } else {
        toYearSelect.disabled = false;
      }
    });
  
    fromYearSelect.dispatchEvent(new Event('change')); // Trigger the change event initially
    
    if (fromYearSelect.value !== 'None') {
      fromYearSelect.style.display = 'block';
    }
  
    fromYearSelect.addEventListener('mousedown', function() {
      if (jobTitleSelect.value === 'None') {
        return false; // Prevent selection if no job title is selected
      }
    });
  
    toYearSelect.addEventListener('mousedown', function() {
      var selectedYear = parseInt(fromYearSelect.value);
  
      for (var i = 0; i < toYearSelect.options.length; i++) {
        var option = toYearSelect.options[i];
        var year = parseInt(option.value);
  
        if (year < selectedYear) {
          option.disabled = true;
        } else {
          option.disabled = false;
        }
      }
    });
  
    jobTitleSelect.addEventListener('change', function() {
      if (jobTitleSelect.value === 'None') {
        fromYearSelect.disabled = true;
        toYearSelect.disabled = true;
      } else {
        fromYearSelect.disabled = false;
        toYearSelect.disabled = false;
      }
    });
  });
  