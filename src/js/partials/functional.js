document.addEventListener("DOMContentLoaded", function () {
  let lis = document.querySelectorAll(".state-list li:nth-child(n+26)");
  for (let li of lis) {
    li.style.display = "none";
  }

  document.getElementById("ShowButton").addEventListener("click", function () {
    let lis = document.querySelectorAll(".state-list li:nth-child(n+26)");
    let button = document.getElementById("ShowButton");

    if (lis[0].style.display === "none" || lis[0].style.display === "") {
      for (let li of lis) {
        li.style.display = "list-item";
      }
      button.innerText = "Hide";
    } else {
      for (let li of lis) {
        li.style.display = "none";
      }
      button.innerText = "Show All";
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      if (link.hash !== "" && isValidHash(link.hash)) {
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

function isValidHash(hash) {
  if (hash === "#!") return false;
  return true;
}



document.addEventListener("DOMContentLoaded", function () {
  let faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    let icon = question.querySelector(".toggle-icon");
    let answer = question.nextElementSibling;

    icon.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
    <path d="M1.46094 1.95508H15.4609"  stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
      `;

    // Open answers initially
    answer.style.display = "block";

    question.addEventListener("click", function () {
      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M8.46094 1.95508V15.9551" stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.46094 8.95508H15.4609" stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          `;
      } else {
        answer.style.display = "block";
        icon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
        <path d="M1.46094 1.95508H15.4609"  stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
          `;
      }
    });
  });
});



document.addEventListener("DOMContentLoaded", function() {
  var selectJob = document.querySelector('.select-job');
  var otherInput = document.getElementById('otherInput');
  
  selectJob.addEventListener('change', function() {
      if (this.value === 'other') {
          otherInput.style.display = 'block';
      } else {
          otherInput.style.display = 'none';
      }
  });
});
