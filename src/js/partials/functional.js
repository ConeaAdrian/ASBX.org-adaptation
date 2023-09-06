document.addEventListener('DOMContentLoaded', function() {
  let lis = document.querySelectorAll('.state-list li:nth-child(n+26)');
  for (let li of lis) {
      li.style.display = 'none';
  }

  document.getElementById('ShowButton').addEventListener('click', function() {
      let lis = document.querySelectorAll('.state-list li:nth-child(n+26)');
      let button = document.getElementById('ShowButton');
      
      if (lis[0].style.display === 'none' || lis[0].style.display === '') {
          for (let li of lis) {
              li.style.display = 'list-item';
          }
          button.innerText = 'Hide';
      } else {
          for (let li of lis) {
              li.style.display = 'none';
          }
          button.innerText = 'Show All';
      }
  });
});


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