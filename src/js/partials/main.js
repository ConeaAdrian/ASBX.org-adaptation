 function add_claim(el) {
  let popup = el.parentElement.parentElement.parentElement.querySelector("#popup-claim");
  let closeButton = popup.querySelector(".close-button");
  let addClaimsButton = popup.querySelector(".button-add");

  popup.style.display = "block";

  closeButton.addEventListener("click", function() {
    popup.style.display = "none";
  });

  let dropdowns = popup.querySelectorAll(".chase");
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener("change", function() {
      let selectedOptions = Array.from(dropdowns).every(function(dropdown) {
        return dropdown.value !== "";
      });

      if (selectedOptions) {
        addClaimsButton.disabled = false;
        addClaimsButton.style.backgroundColor = "#324A74";
      } else {
        addClaimsButton.disabled = true;
        addClaimsButton.style.backgroundColor = "";
      }
    });
  });
}