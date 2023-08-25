var button = document.getElementById('ShowButton');

if (button) {
  button.addEventListener('click', function() {
    var hiddenColumns = document.querySelectorAll('.hidden-column');
  
    if (hiddenColumns.length > 0) {
      for (var i = 0; i < hiddenColumns.length; i++) {
        hiddenColumns[i].classList.remove('hidden-column');
      }
      button.innerText = "Hide";
    } else {
      var columnsToHide = document.querySelectorAll('.city-column th:nth-child(n+5), .trust-fund-column td:nth-child(n+5), .job-sites-column td:nth-child(n+5)');
      for (var j = 0; j < columnsToHide.length; j++) {
        columnsToHide[j].classList.add('hidden-column');
      }
      button.innerText = "Show More";
    }
  });
}



let lastScrollTop = 0; // Variabilă pentru a ține evidența ultimei poziții de scroll

window.addEventListener('scroll', function() {
  let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let searchElement = document.getElementById('search-principal');

  if (currentScrollTop > lastScrollTop) {
    // Utilizatorul face scroll în jos
    searchElement.classList.add('hidden');
    searchElement.classList.remove('sticky');
  } else {
    // Utilizatorul face scroll în sus
    searchElement.classList.add('sticky');
    searchElement.classList.remove('hidden');
  }
  lastScrollTop = currentScrollTop;
});
