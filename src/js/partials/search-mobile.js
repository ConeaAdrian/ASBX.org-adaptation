// function handleInput(inputId) {
//     var inputElement = document.getElementById(inputId);
//     var closeButtonId = "close-button-" + inputId.split('-')[0];
//     var closeButtonElement = document.getElementById(closeButtonId);

//     if (inputElement.value) {
//         closeButtonElement.style.display = "block";
//     } else {
//         closeButtonElement.style.display = "none";
//     }
// }

// function clearInput(inputId) {
//     var inputElement = document.getElementById(inputId);
//     var closeButtonId = "close-button-" + inputId.split('-')[0];
//     var closeButtonElement = document.getElementById(closeButtonId);

//     inputElement.value = "";
//     closeButtonElement.style.display = "none";
// }

// function populateInput(liElement) {
//     const text = liElement.querySelector('p').textContent;
//     const inputId = 'compensation-input';
//     const inputElement = document.getElementById(inputId);
//     inputElement.value = text;

//     handleInput(inputId);
// }

// window.onload = function() {
//     const inputIds = ['location-input', 'compensation-input'];
//     for (let inputId of inputIds) {
//         handleInput(inputId);
//         var closeButtonId = "close-button-" + inputId.split('-')[0];
//         var closeButtonElement = document.getElementById(closeButtonId);
//         closeButtonElement.style.display = "none";
//     }
// };
  

// document.getElementById("open-search-block").addEventListener("click", function() {
//     document.getElementById("search-block").style.display = "block";
// });

// document.getElementById("close-search-block").addEventListener("click", function() {
//     document.getElementById("search-block").style.display = "none";
// });