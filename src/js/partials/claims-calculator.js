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





//Adaptation for jump element to information element

$(document).ready(function(){
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            document.querySelector(hash).scrollIntoView({behavior: "smooth"});
        }
    });
});
