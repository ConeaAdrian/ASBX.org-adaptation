// var button = document.getElementById('ShowButton');

// if (button) {
//   button.addEventListener('click', function() {
//     var hiddenColumns = document.querySelectorAll('.hidden-column');
  
//     if (hiddenColumns.length > 0) {
//       for (var i = 0; i < hiddenColumns.length; i++) {
//         hiddenColumns[i].classList.remove('hidden-column');
//       }
//       button.innerText = "Hide";
//     } else {
//       var columnsToHide = document.querySelectorAll('.city-column th:nth-child(n+7), .trust-fund-column td:nth-child(n+7), .job-sites-column td:nth-child(n+7)');
//       for (var j = 0; j < columnsToHide.length; j++) {
//         columnsToHide[j].classList.add('hidden-column');
//       }
//       button.innerText = "Show More";
//     }
//   });
// }


//--scrop search

let lastScroll = 0
const search_containe = document.querySelector(".header-search")
const header_containe = document.querySelector(".header-section")
if (search_containe && header_containe) {
    window.addEventListener("scroll", async function () {
        const currentScroll = window.pageYOffset
        if (currentScroll < lastScroll) {
            search_containe.style.top = `${header_containe.offsetHeight}px`
        } else {
            search_containe.style.top = `-30px`
        }
        lastScroll = currentScroll

    }, true)
}