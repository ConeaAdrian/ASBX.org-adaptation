$(document).ready(function (e) {
 //scroll up
 $(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
   $(".scroll-up").fadeIn();
   $(".scroll-up").addClass("show");
  } else {
   $(".scroll-up").fadeOut();
   $(".scroll-up").removeClass("show");
  }
 });

 //Click event to scroll to top
 $(".scroll-up").click(function () {
  $("html, body").animate(
   {
    scrollTop: 0,
   },
   800
  );
  return false;
 });
});

$(document).ready(function (e) {
  //scroll up
  $(window).scroll(function () {
   if ($(this).scrollTop() > 100) {
    $(".scroll-up").fadeIn();
    $(".scroll-up").addClass("show");
   } else {
    $(".scroll-up").fadeOut();
    $(".scroll-up").removeClass("show");
   }
  });
 
  //Click event to scroll to top
  $(".scroll-up").click(function () {
   $("html, body").animate(
    {
     scrollTop: 0,
    },
    800
   );
   return false;
  });
 });
 
 $(document).ready(function() {
   $('.validation-calculator > div').hide();
   $('.validation-calculator').hide();
 
   $('.client-question__content .button').click(function() {
     $('.validation-calculator').fadeIn();
     $('.number-validation').fadeIn();
     $('body').addClass('locked');
   });
 
   $('.number-validation .button').click(function() {
     $('.number-validation').fadeOut();
     $('.code-confirmation').fadeIn();
   });
 
   $('.code-confirmation .button').click(function() {
     $('.code-confirmation').fadeOut();
     $('.thank-you').fadeIn();
   });
 
   $('.thank-you .button').click(function() {
     $('.thank-you').fadeOut();
     $('.validation-calculator').fadeOut();
     $('body').removeClass('locked');
   });
 });
 

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


const itemsPerPage = 10; // Numărul maxim de elemente afișate pe pagină
const boxes = document.querySelectorAll('.job-site__box');
const pageButtons = document.querySelectorAll('.page-button');
const prevButton = document.querySelector('.pagination__list__prev');
const nextButton = document.querySelector('.pagination__list__next');

let currentPage = 1;

// Funcție pentru afișarea elementelor corespunzătoare paginii curente
function showItems(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  boxes.forEach((box, index) => {
    if (index >= startIndex && index < endIndex) {
      box.classList.add('visible');
    } else {
      box.classList.remove('visible');
    }
  });
}

// Funcție pentru actualizarea paginilor și afișarea elementelor corespunzătoare paginii curente
function updatePagination() {
  pageButtons.forEach((button) => {
    button.classList.remove('active');
  });

  pageButtons[currentPage - 1].classList.add('active');
  showItems(currentPage);
}

// Funcție pentru gestionarea acțiunii de apăsare a unui buton de pagină
function handlePageClick(event) {
  event.preventDefault();

  const targetPage = parseInt(event.target.textContent);

  if (!isNaN(targetPage)) {
    currentPage = targetPage;
    updatePagination();
  }
}

// Funcție pentru gestionarea acțiunii de apăsare a butonului "Previous"
function handlePrevClick(event) {
  event.preventDefault();

  if (currentPage > 1) {
    currentPage--;
    updatePagination();
  }
}

// Funcție pentru gestionarea acțiunii de apăsare a butonului "Next"
function handleNextClick(event) {
  event.preventDefault();

  if (currentPage < pageButtons.length) {
    currentPage++;
    updatePagination();
  }
}

// Adăugați evenimentele de click pentru butoanele de paginare
pageButtons.forEach((button) => {
  button.addEventListener('click', handlePageClick);
});

prevButton.addEventListener('click', handlePrevClick);
nextButton.addEventListener('click', handleNextClick);

// Inițializați paginarea
updatePagination();
