function add_claim(e){let t=e.parentElement.parentElement.parentElement.querySelector("#popup-claim");e=t.querySelector(".close-button");let n=t.querySelector(".button-add"),o=(t.style.display="block",e.addEventListener("click",function(){t.style.display="none"}),t.querySelectorAll(".chase"));o.forEach(function(e){e.addEventListener("change",function(){Array.from(o).every(function(e){return""!==e.value})?(n.disabled=!1,n.style.backgroundColor="#324A74"):(n.disabled=!0,n.style.backgroundColor="")})})}async function TestOpen(){var e=document.getElementById("search-principal");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeSearch(e){document.getElementById("search-principal").style.display="none"}async function openClaims(){var e=document.getElementById("claims-select-mobile");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeClaims(){document.getElementById("claims-select-mobile").style.display="none"}document.addEventListener("DOMContentLoaded",function(){var e;for(e of document.querySelectorAll(".state-list li:nth-child(n+26)"))e.style.display="none";document.getElementById("ShowButton").addEventListener("click",function(){var e=document.querySelectorAll(".state-list li:nth-child(n+26)"),t=document.getElementById("ShowButton");if("none"===e[0].style.display||""===e[0].style.display){for(var n of e)n.style.display="list-item";t.innerText="Hide"}else{for(var o of e)o.style.display="none";t.innerText="Show All"}})});let lastScroll=0;const search_containe=document.querySelector(".header-search"),header_containe=document.querySelector(".header-section");function updateVisibility(){var e=window.innerWidth<=992,t=document.querySelectorAll(".information-benefits");t.forEach(e=>e.style.display="none"),e?(document.querySelector(".AVG-claims .information-benefits").style.display="block",document.querySelectorAll(".ER-claims, .IR-claims, .AVG-claims").forEach(e=>{e.removeEventListener("click",toggleOnClick),e.addEventListener("click",toggleOnClick)})):(t.forEach(e=>e.style.display="block"),document.querySelectorAll(".ER-claims, .IR-claims, .AVG-claims").forEach(e=>{e.removeEventListener("click",toggleOnClick)}))}function toggleOnClick(e){toggleInformationBenefits(e.currentTarget.querySelector(".information-benefits"))}function toggleInformationBenefits(e){992<window.innerWidth||(document.querySelectorAll(".information-benefits").forEach(e=>e.style.display="none"),e.style.display="block")}function startClaims(){document.getElementById("claimForm").style.display="block"}function createOverlay(){const e=document.createElement("div");return e.classList.add("overlay"),e.addEventListener("click",function(){document.getElementById("claimForm").style.display="none",document.body.removeChild(e)}),e}function toggleClaims(e){var e=e.closest(".claims-result"),t=e.querySelector(".claims-result__data-information"),n=e.querySelector(".arrow-claim");"active"===e.id?(t.style.display="none",n.classList.remove("rotate"),e.id=""):(t.style.display="block",n.classList.add("rotate"),e.id="active")}function openActiveClaim(){var e,t=document.getElementById("active");t&&(e=t.querySelector(".claims-result__data-information"),t=t.querySelector(".arrow-claim"),e.style.display="block",t.classList.add("rotate"))}async function TestOpen(){var e=document.getElementById("search-principal");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeSearch(e){document.getElementById("search-principal").style.display="none"}async function openClaims(){var e=document.getElementById("claims-select-mobile");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeClaims(){document.getElementById("claims-select-mobile").style.display="none"}search_containe&&header_containe&&window.addEventListener("scroll",async function(){var e=window.pageYOffset;e<lastScroll?search_containe.style.top=header_containe.offsetHeight+"px":search_containe.style.top="-30px",lastScroll=e},!0),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".faq-question").forEach(e=>{let t=e.querySelector(".toggle-icon"),n=e.nextElementSibling;t.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
    <path d="M1.46094 1.95508H15.4609" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
      `,n.style.display="block",e.addEventListener("click",function(){"block"===n.style.display?(n.style.display="none",t.innerHTML=`
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
          <path d="M8.46094 1.95508V15.9551" stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M1.46094 8.95508H15.4609" stroke="#170F49" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
          `):(n.style.display="block",t.innerHTML=`
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="3" viewBox="0 0 17 3" fill="none">
        <path d="M1.46094 1.95508H15.4609" stroke="#4A3AFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
          `)})})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".add-button").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var e=this.closest(".add-navy"),t=e.querySelector(".error-message"),n=e.querySelector("#select1"),o=e.querySelector("#beforeCheckbox"),l=e.querySelector("#afterCheckbox");""===n.value||!1===o.checked&&!1===l.checked?(t.style.display="block",setTimeout(function(){t.style.display="none"},3e3)):e.submit()})})}),$(document).ready(function(e){$(".scroll-up").hide(),$(window).scroll(function(){100<$(this).scrollTop()?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()}),$(".scroll-up").click(function(){return document.body.scrollIntoView({behavior:"smooth",block:"start"}),!1})}),document.addEventListener("DOMContentLoaded",function(){updateVisibility(),window.addEventListener("resize",updateVisibility);var e=document.getElementById("switch");const o=document.querySelector(".legal-text"),l=document.querySelector(".your-own-text"),i=document.querySelector(".legal-representation"),c=document.querySelector(".your-own");e.checked=!1,o.style.color="#181059",o.style.fontSize="18px",o.style.fontWeight="500",i.style.display="block",c.style.display="none",e.addEventListener("click",function(){var e=this.checked,t=e?"":"#181059",n=window.innerWidth<=475?"16px":"18px";o.style.color=t,o.style.fontSize=n,o.style.fontWeight=e?"":"500",l.style.color=e?"#181059":"",l.style.fontSize=n,l.style.fontWeight=e?"500":"",i.style.display=e?"none":"block",c.style.display=e?"block":"none"})}),window.addEventListener("resize",function(){var e=document.querySelector(".claims-select"),t=document.querySelector(".claims-select-mobile");767<window.innerWidth?t&&t.innerHTML&&(e.innerHTML=t.innerHTML,t.innerHTML=""):e&&e.innerHTML&&(t.innerHTML=e.innerHTML,e.innerHTML="")}),window.dispatchEvent(new Event("resize")),document.addEventListener("DOMContentLoaded",function(){openActiveClaim()}),document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("a").forEach(t=>{t.addEventListener("click",e=>{""!==t.hash&&(e.preventDefault(),e=t.hash,e=document.querySelector(e).offsetTop-20,window.scrollTo({top:e,behavior:"smooth"}))})})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("nav ul li a:not(:only-child)").forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation();let t=this.nextElementSibling;t.style.display="none"===t.style.display?"block":"none",document.querySelectorAll(".nav-dropdown").forEach(function(e){e!==t&&(e.style.display="none")})})}),document.querySelector("html").addEventListener("click",function(){document.querySelectorAll(".nav-dropdown").forEach(function(e){e.style.display="none"})}),document.querySelector("#nav-toggle").addEventListener("click",function(){var e=document.querySelector("nav ul");this.classList.contains("active")?(e.style.display="none",this.classList.remove("active")):(e.style.display="block",this.classList.add("active"))})});