window.addEventListener("resize", function() {
    var claimsSelect = document.querySelector('.claims-select');
    var claimsSelectMobile = document.querySelector('.claims-select-mobile');

    if (window.innerWidth > 767) {
        if (claimsSelectMobile && claimsSelectMobile.innerHTML) {
            claimsSelect.innerHTML = claimsSelectMobile.innerHTML;
            claimsSelectMobile.innerHTML = '';
        }
    } else {
        if (claimsSelect && claimsSelect.innerHTML) {
            claimsSelectMobile.innerHTML = claimsSelect.innerHTML;
            claimsSelect.innerHTML = '';
        }
    }
});

// Trigger the resize event to handle the case when the page loads
window.dispatchEvent(new Event('resize'));


//claims calculator functional
function toggleClaims(element) {
    const parentDiv = element.closest('.claims-result');
    const dataDiv = parentDiv.querySelector('.claims-result__data-information');
    const arrowImg = parentDiv.querySelector('.arrow-claim');
    
    const isActive = parentDiv.id === 'active';
  
    if (!isActive) {
      dataDiv.style.display = 'block';
      arrowImg.classList.add('rotate');
      parentDiv.id = 'active';
    } else {
      dataDiv.style.display = 'none';
      arrowImg.classList.remove('rotate');
      parentDiv.id = '';
    }
}

function openActiveClaim() {
    const activeClaim = document.getElementById('active');
    if (activeClaim) {
        const dataDiv = activeClaim.querySelector('.claims-result__data-information');
        const arrowImg = activeClaim.querySelector('.arrow-claim');

        dataDiv.style.display = 'block';
        arrowImg.classList.add('rotate');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    openActiveClaim();
});





//Adaptation for jump element to information element

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (event) => {
        if (link.hash !== "") {
          event.preventDefault();
          const hash = link.hash;
          const targetPosition = document.querySelector(hash).offsetTop - 20;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  });