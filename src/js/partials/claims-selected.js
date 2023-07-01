$(document).ready(function() {
  $('.profession').click(function() {
    $(this).toggleClass('active');
    $(this).next('.profession__content').slideToggle();
  });

  // Deschide elementele by default
  $('.profession').each(function() {
    $(this).addClass('active');
    $(this).next('.profession__content').slideDown();
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var jobSites = document.getElementById('jobSites');
  var boilerLocations = document.getElementById('boilerLocations');
  var compensationAmounts = document.getElementById('compensationAmounts');
  var trustFunds = document.getElementById('trustFunds');
  var calculator = document.getElementById('calculator');

  var jobSitesTitle = document.getElementById('jobSitesTitle');
  var boilerLocationsTitle = document.getElementById('boilerLocationsTitle');
  var compensationAmountsTitle = document.getElementById('compensationAmountsTitle');
  var trustFundsTitle = document.getElementById('trustFundsTitle');
  var calculatorTitle = document.getElementById('calculatorTitle');

  jobSites.addEventListener('click', function() {
    jobSitesTitle.scrollIntoView({ behavior: 'smooth' });
  });

  boilerLocations.addEventListener('click', function() {
    boilerLocationsTitle.scrollIntoView({ behavior: 'smooth' });
  });

  compensationAmounts.addEventListener('click', function() {
    compensationAmountsTitle.scrollIntoView({ behavior: 'smooth' });
  });

  trustFunds.addEventListener('click', function() {
    trustFundsTitle.scrollIntoView({ behavior: 'smooth' });
  });

  calculator.addEventListener('click', function() {
    calculatorTitle.scrollIntoView({ behavior: 'smooth' });
  });
});
