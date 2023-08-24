
//--------
document.getElementById('ShowButton').addEventListener('click', function() {
    var hiddenColumns = document.querySelectorAll('.hidden-column');
    var button = document.getElementById('ShowButton');
  
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
  