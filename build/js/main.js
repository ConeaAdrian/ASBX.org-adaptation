function add_claim(e){let t=e.parentElement.parentElement.parentElement.querySelector("#popup-claim");e=t.querySelector(".close-button");let o=t.querySelector(".button-add"),n=(t.style.display="block",e.addEventListener("click",function(){t.style.display="none"}),t.querySelectorAll(".chase"));n.forEach(function(e){e.addEventListener("change",function(){Array.from(n).every(function(e){return""!==e.value})?(o.disabled=!1,o.style.backgroundColor="#324A74"):(o.disabled=!0,o.style.backgroundColor="")})})}$(document).ready(function(e){$(window).scroll(function(){100<$(this).scrollTop()?($(".scroll-up").fadeIn(),$(".scroll-up").addClass("show")):($(".scroll-up").fadeOut(),$(".scroll-up").removeClass("show"))}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}),$(document).ready(function(e){$(window).scroll(function(){100<$(this).scrollTop()?($(".scroll-up").fadeIn(),$(".scroll-up").addClass("show")):($(".scroll-up").fadeOut(),$(".scroll-up").removeClass("show"))}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}),$(document).ready(function(){$(".validation-calculator > div").hide(),$(".validation-calculator").hide(),$(".client-question__content .button").click(function(){$(".validation-calculator").fadeIn(),$(".number-validation").fadeIn(),$("body").addClass("locked")}),$(".number-validation .button").click(function(){$(".number-validation").fadeOut(),$(".code-confirmation").fadeIn()}),$(".code-confirmation .button").click(function(){$(".code-confirmation").fadeOut(),$(".thank-you").fadeIn()}),$(".thank-you .button").click(function(){$(".thank-you").fadeOut(),$(".validation-calculator").fadeOut(),$("body").removeClass("locked")})}),$(document).ready(function(){$(".profession").click(function(){$(this).toggleClass("active"),$(this).next(".profession__content").slideToggle()}),$(".profession").each(function(){$(this).addClass("active"),$(this).next(".profession__content").slideDown()})}),document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("jobSites"),t=document.getElementById("boilerLocations"),o=document.getElementById("compensationAmounts"),n=document.getElementById("trustFunds"),l=document.getElementById("calculator"),c=document.getElementById("jobSitesTitle"),i=document.getElementById("boilerLocationsTitle"),a=document.getElementById("compensationAmountsTitle"),d=document.getElementById("trustFundsTitle"),s=document.getElementById("calculatorTitle");e.addEventListener("click",function(){c.scrollIntoView({behavior:"smooth"})}),t.addEventListener("click",function(){i.scrollIntoView({behavior:"smooth"})}),o.addEventListener("click",function(){a.scrollIntoView({behavior:"smooth"})}),n.addEventListener("click",function(){d.scrollIntoView({behavior:"smooth"})}),l.addEventListener("click",function(){s.scrollIntoView({behavior:"smooth"})})}),function(t){t(function(){t("nav ul li a:not(:only-child)").click(function(e){t(this).siblings(".nav-dropdown").toggle(),t(".nav-dropdown").not(t(this).siblings()).hide(),e.stopPropagation()}),t("html").click(function(){t(".nav-dropdown").hide()}),t("#nav-toggle").click(function(){t("nav ul").slideToggle()}),t("#nav-toggle").on("click",function(){this.classList.toggle("active")})})}(jQuery),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".add-button").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var e=this.closest(".jobsite-card"),t=e.querySelector(".error-message"),o=e.querySelector("#jobTitleSelect"),n=e.querySelector("#fromYearSelect"),e=e.querySelector("#toYearSelect");"None"===o.value||"None"===n.value||"None"===e.value?(t.style.display="block",setTimeout(function(){t.style.display="none"},3e3)):(console.log("Este permis"),this.disabled=!0)})})});