function add_claim(e){let t=e.parentElement.parentElement.parentElement.querySelector("#popup-claim");e=t.querySelector(".close-button");let n=t.querySelector(".button-add"),l=(t.style.display="block",e.addEventListener("click",function(){t.style.display="none"}),t.querySelectorAll(".chase"));l.forEach(function(e){e.addEventListener("change",function(){Array.from(l).every(function(e){return""!==e.value})?(n.disabled=!1,n.style.backgroundColor="#324A74"):(n.disabled=!0,n.style.backgroundColor="")})})}async function TestOpen(){var e=document.getElementById("search-principal");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeSearch(e){document.getElementById("search-principal").style.display="none"}async function openClaims(){var e=document.getElementById("claims-select-mobile");window.innerWidth<=992&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeClaims(){document.getElementById("claims-select-mobile").style.display="none"}function isValidHash(e){return"#!"!==e}function updateVisibility(){window.innerWidth}function startClaims(){document.getElementById("claimForm").style.display="block"}function createOverlay(){const e=document.createElement("div");return e.classList.add("overlay"),e.addEventListener("click",function(){document.getElementById("claimForm").style.display="none",document.body.removeChild(e)}),e}function toggleClaims(e){var e=e.closest(".claims-result"),t=e.querySelector(".claims-result__data-information"),n=e.querySelector(".arrow-claim");"active"===e.id?(t.style.display="none",n.classList.remove("rotate"),e.id=""):(t.style.display="block",n.classList.add("rotate"),e.id="active")}function openActiveClaim(){var e,t=document.getElementById("active");t&&(e=t.querySelector(".claims-result__data-information"),t=t.querySelector(".arrow-claim"),e.style.display="block",t.classList.add("rotate"))}async function TestOpen(){var e=document.getElementById("search-principal");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeSearch(e){document.getElementById("search-principal").style.display="none"}async function openClaims(){var e=document.getElementById("claims-select-mobile");window.innerWidth<=992&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeClaims(){document.getElementById("claims-select-mobile").style.display="none"}document.addEventListener("DOMContentLoaded",function(){var e;for(e of document.querySelectorAll(".state-list li:nth-child(n+26)"))e.style.display="none";document.getElementById("ShowButton").addEventListener("click",function(){var e=document.querySelectorAll(".state-list li:nth-child(n+26)"),t=document.getElementById("ShowButton");if("none"===e[0].style.display||""===e[0].style.display){for(var n of e)n.style.display="list-item";t.innerText="Hide"}else{for(var l of e)l.style.display="none";t.innerText="Show All"}})}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{""!==t.hash&&isValidHash(t.hash)&&(e.preventDefault(),e=t.hash,e=document.querySelector(e).offsetTop-20,window.scrollTo({top:e,behavior:"smooth"}))})})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-question").forEach(e=>{let t=e.querySelector(".toggle-icon"),n=e.nextElementSibling;t.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
    <path d="M1.46094 1.95508H15.4609"  stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
      `,n.style.display="block",e.addEventListener("click",function(){"block"===n.style.display?(n.style.display="none",t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M8.46094 1.95508V15.9551" stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.46094 8.95508H15.4609" stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          `):(n.style.display="block",t.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
        <path d="M1.46094 1.95508H15.4609"  stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
          `)})})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".add-button").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var e=this.closest(".add-navy"),t=e.querySelector(".error-message"),n=e.querySelector("#select1"),l=e.querySelector("#beforeCheckbox"),o=e.querySelector("#afterCheckbox");""===n.value||!1===l.checked&&!1===o.checked?(t.style.display="block",setTimeout(function(){t.style.display="none"},3e3)):e.submit()})})}),document.addEventListener("DOMContentLoaded",function(){updateVisibility(),window.addEventListener("resize",updateVisibility);var e=document.getElementById("switch");const l=document.querySelector(".legal-text"),o=document.querySelector(".your-own-text"),i=document.querySelector(".legal-representation"),s=document.querySelector(".your-own");e.addEventListener("click",function(){var e=this.checked,t=e?"":"#181059",n=window.innerWidth<=475?"16px":"18px";l.style.color=t,l.style.fontSize=n,l.style.fontWeight=e?"":"500",o.style.color=e?"#181059":"",o.style.fontSize=n,o.style.fontWeight=e?"500":"",i.style.display=e?"none":"block",s.style.display=e?"block":"none"})}),window.addEventListener("resize",function(){var e=document.querySelector(".claims-select"),t=document.querySelector(".claims-select-mobile");767<window.innerWidth?t&&t.innerHTML&&(e.innerHTML=t.innerHTML,t.innerHTML=""):e&&e.innerHTML&&(t.innerHTML=e.innerHTML,e.innerHTML="")}),window.dispatchEvent(new Event("resize")),document.addEventListener("DOMContentLoaded",function(){openActiveClaim()}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("nav ul li a:not(:only-child)").forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation();let t=this.nextElementSibling;t&&(t.style.display="flex"!==t.style.display?"flex":"none",document.querySelectorAll(".nav-dropdown").forEach(function(e){e!==t&&(e.style.display="none")}))})}),document.querySelector("html").addEventListener("click",function(){document.querySelectorAll(".nav-dropdown").forEach(function(e){e.style.display="none"})}),document.querySelector("#nav-toggle").addEventListener("click",function(){var e=document.querySelector("nav ul");this.classList.contains("active")?(e.style.display="none",this.classList.remove("active")):(e.style.display="flex",this.classList.add("active"))})});