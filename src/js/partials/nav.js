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
          console.log('Este permis');
          
          // Dezactivează butonul
          this.disabled = true;
        }
      });
    });
  });
  