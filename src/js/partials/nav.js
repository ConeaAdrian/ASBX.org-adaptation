(function($) { // Begin jQuery
    $(function() { // DOM ready
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.nav-dropdown').toggle();
        // Close one dropdown when selecting another
        $('.nav-dropdown').not($(this).siblings()).hide();
        e.stopPropagation();
      });
      // Clicking away from dropdown will remove the dropdown class
      $('html').click(function() {
        $('.nav-dropdown').hide();
      });
      // Toggle open and close nav styles on click
      $('#nav-toggle').click(function() {
        $('nav ul').slideToggle();
      });
      // Hamburger to X toggle
      $('#nav-toggle').on('click', function() {
        this.classList.toggle('active');
      });
    }); // end DOM ready
  })(jQuery); // end jQuery

  document.addEventListener('DOMContentLoaded', function() {
    function resetCheckboxes() {
      beforeCheckbox.checked = false;
      afterCheckbox.checked = false;
    }
  
    function displayError(errorElementId) {
      var errorElement = document.getElementById(errorElementId);
      errorElement.style.display = "block";
      setTimeout(function() {
        errorElement.style.display = "none";
      }, 3000);
    }
  
    var beforeCheckbox = document.getElementById('beforeCheckbox');
    var afterCheckbox = document.getElementById('afterCheckbox');
    var select1 = document.getElementById('select1');
    
    beforeCheckbox.addEventListener('change', function() {
      if (this.checked) {
        afterCheckbox.checked = false;
      }
    });
    
    afterCheckbox.addEventListener('change', function() {
      if (this.checked) {
        beforeCheckbox.checked = false;
      }
    });
    
    select1.addEventListener('change', resetCheckboxes);
    
    document.getElementById('addButton').addEventListener('click', function(event) {
      event.preventDefault();
      
      var jobTitle = document.getElementById('jobTitleSelect').value;
      var fromYear = document.getElementById('fromYearSelect').value;
      var toYear = document.getElementById('toYearSelect').value;
      
      if (jobTitle === "" || fromYear === "" || toYear === "") {
        displayError('errorMessage');
      } else {
        document.getElementById('errorMessage').style.display = "none";
        // You can add other codes to execute if the form is valid
      }
    });
    
    document.getElementById('boilerButton').addEventListener('click', function(event) {
      event.preventDefault();
      
      var job = document.getElementById('select1').value;
      
      if (job === "" || (beforeCheckbox.checked === afterCheckbox.checked)) {
        displayError('errorMessageBoiler');
      } else {
        document.getElementById('errorMessageBoiler').style.display = "none";
      }
      
      resetCheckboxes();
    });
  });
  