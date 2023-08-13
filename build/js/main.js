function add_claim(e){let t=e.parentElement.parentElement.parentElement.querySelector("#popup-claim");e=t.querySelector(".close-button");let n=t.querySelector(".button-add"),a=(t.style.display="block",e.addEventListener("click",function(){t.style.display="none"}),t.querySelectorAll(".chase"));a.forEach(function(e){e.addEventListener("change",function(){Array.from(a).every(function(e){return""!==e.value})?(n.disabled=!1,n.style.backgroundColor="#324A74"):(n.disabled=!0,n.style.backgroundColor="")})})}function updateVisibility(){var e=$(window).width()<=992;const t=$(".information-benefits");t.hide(),e?($(".AVG-claims .information-benefits").show(),$(".ER-claims, .IR-claims, .AVG-claims").off("click").on("click",function(){t.hide(),$(this).find(".information-benefits").show()})):(t.show(),$(".ER-claims, .IR-claims, .AVG-claims").off("click"))}function toggleInformationBenefits(e){$(e).find(".information-benefits").toggle()}function toggleClaims(e){var e=e.closest(".claims-result"),t=e.querySelector(".claims-result__data-information"),n=e.querySelector(".arrow-claim");"active"===e.id?(t.style.display="none",n.classList.remove("rotate"),e.id=""):(t.style.display="block",n.classList.add("rotate"),e.id="active")}function openActiveClaim(){var e,t=document.getElementById("active");t&&(e=t.querySelector(".claims-result__data-information"),t=t.querySelector(".arrow-claim"),e.style.display="block",t.classList.add("rotate"))}document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll("nav ul li a:not(:only-child)").forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation();let t=this.nextElementSibling;t.style.display="none"===t.style.display?"block":"none",document.querySelectorAll(".nav-dropdown").forEach(function(e){e!==t&&(e.style.display="none")})})}),document.querySelector("html").addEventListener("click",function(){document.querySelectorAll(".nav-dropdown").forEach(function(e){e.style.display="none"})}),document.querySelector("#nav-toggle").addEventListener("click",function(){var e=document.querySelector("nav ul");this.classList.contains("active")?(e.style.display="none",this.classList.remove("active")):(e.style.display="block",this.classList.add("active"))})}),document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".add-button").forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();var e=this.closest(".add-navy"),t=e.querySelector(".error-message"),n=e.querySelector("#select1"),a=e.querySelector("#beforeCheckbox"),i=e.querySelector("#afterCheckbox");""===n.value||!1===a.checked&&!1===i.checked?(t.style.display="block",setTimeout(function(){t.style.display="none"},3e3)):e.submit()})})}),$(document).ready(function(e){$(".scroll-up").hide(),$(window).scroll(function(){100<$(this).scrollTop()?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()}),$(".scroll-up").click(function(){return document.body.scrollIntoView({behavior:"smooth",block:"start"}),!1})}),$(document).ready(function(){updateVisibility(),$(window).resize(updateVisibility);var e=$("#switch");const a=$(".legal-text"),i=$(".your-own-text"),l=$(".legal-representation"),o=$(".your-own");e.prop("checked",!1),a.css({color:"#181059",fontSize:"16px",fontWeight:"500"}),l.show(),o.hide(),e.on("click",function(){var e=$(this).is(":checked"),t=e?"":"#181059",n=$(window).width()<=475?"14px":"16px";a.css({color:t,fontSize:n,fontWeight:e?"":"500"}),i.css({color:e?"#181059":"",fontSize:n,fontWeight:e?"500":""}),l.toggle(),o.toggle()})}),window.addEventListener("resize",function(){var e=document.querySelector(".claims-select"),t=document.querySelector(".claims-select-mobile");767<window.innerWidth?t&&t.innerHTML&&(e.innerHTML=t.innerHTML,t.innerHTML=""):e&&e.innerHTML&&(t.innerHTML=e.innerHTML,e.innerHTML="")}),window.dispatchEvent(new Event("resize")),document.addEventListener("DOMContentLoaded",function(){openActiveClaim()}),$(document).ready(function(){$("a").on("click",function(e){""!==this.hash&&(e.preventDefault(),e=this.hash,document.querySelector(e).scrollIntoView({behavior:"smooth"}))})});const number_list_select=9,is_search=!1;function getCookie(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),a=0;a<n.length;a++){var i=n[a].trim();if(i.substring(0,e.length+1)===e+"="){t=decodeURIComponent(i.substring(e.length+1));break}}return t}var CSRF_TOKEN=getCookie("csrftoken");async function getJobSiteData(e){const t=e.querySelector("#filter-state-data").value,n=e.querySelector("#filter-city-data").value;n!==localStorage.getItem("current-city")&&t!==localStorage.getItem("current-state")&&await axios.post("/core/api/v1/getfilterjobsitedata/",{header:{"X-CSRFToken":CSRF_TOKEN},city:n,state_abbr:t}).then(async function(e){localStorage.setItem("jobsites",JSON.stringify(e.data.jobsites)),localStorage.setItem("current-city",n),localStorage.setItem("current-state",t)}),console.log(JSON.parse(localStorage.getItem("jobsites")))}async function getSearchData(){await axios.get("/core/api/v1/getsearchdata/",{}).then(async function(e){localStorage.setItem("cities",JSON.stringify(e.data.cities)),localStorage.setItem("zips",JSON.stringify(e.data.zips))})}async function openCustomSelect(e){e=e.parentElement.querySelector(".custom-search-items");"none"==e.style.display&&(e.style.display="block")}function searchEngineFilter(t,n){if(n.length<=t.length){var a=!0;for(let e=0;e<n.length;e++)if(!t[e].startsWith(n[e])){a=!1;break}if(!a){var a=!0,i=t.length-n.length;for(let e=t.length-1;e>=i;e--)if(!t[e].startsWith(n[e-i])){a=!1;break}}return a}return!1}function toTitleCase(e){return e.replace(/\w\S*/g,function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})}async function filterEngine(e){for(var t=e.parentElement.querySelector("#custom-search-input-items"),e=e.value;t.firstChild;)t.removeChild(t.lastChild);if(2<e.length){var n,a,i=toTitleCase(e).split(" "),l=[];for(n of JSON.parse(localStorage.getItem("jobsites"))){var o=toTitleCase(n.name).split(" ");if(searchEngineFilter(o,i)&&(l.push(n),l.length===number_list_select))break}for(a of l){var r=document.createElement("div"),c=(r.setAttribute("data-name",""+a.name),a.name.split(" "));if(c[0].startsWith(i[0]))for(let e=0;e<i.length;e++)c[e]=`<b>${i[e]}</b>`+c[e].slice(i[e].length);else{var s=c.length-i.length;for(let e=c.length-1;e>=s;e--)c[e]=`<b>${i[e-s]}</b>`+c[e].slice(i[e-s].length)}r.innerHTML=c.join(" "),r.addEventListener("click",async function(){await selectItemFilter(this)}),t.appendChild(r)}}}async function searchEngine(e){for(var t=e.parentElement.querySelector("#custom-search-input-items"),n=e.value;1<t.children.length;)t.removeChild(t.lastChild);if(2<n.length&&isNaN(n)){var a,i,l=toTitleCase(n.replace(",","")).split(" "),o=[];for(a of JSON.parse(localStorage.getItem("cities"))){var r=toTitleCase(a.name+" "+a.state__abbr).split(" ");if(searchEngineFilter(r,l)&&(o.push(a),o.length===number_list_select))break}for(i of o){var c=document.createElement("div"),s=(c.setAttribute("data-city",""+i.name),c.setAttribute("data-state",""+i.state__abbr),(i.name+", "+i.state__abbr).split(" "));if(s[0].startsWith(l[0]))for(let e=0;e<l.length;e++)s[e]=`<b>${l[e]}</b>`+s[e].slice(l[e].length);else{var d=s.length-l.length;for(let e=s.length-1;e>=d;e--)s[e]=`<b>${l[e-d]}</b>`+s[e].slice(l[e-d].length)}s[s.length-1]=s[s.length-1].toUpperCase(),c.innerHTML=s.join(" "),c.addEventListener("click",async function(){await selectItemInput(this)}),t.appendChild(c)}}else if(1<n.length&&!isNaN(n)){var u,m,f=[];for(u of JSON.parse(localStorage.getItem("zips")))if(u.code.startsWith(n)&&(f.push(u),f.length===number_list_select))break;for(m of f){var y=document.createElement("div");y.setAttribute("data-zip",""+m.code),y.addEventListener("click",async function(){await selectItemInput(this,!1)}),y.innerHTML=`<b>${n}</b>`+m.code.slice(n.length),t.appendChild(y)}}}async function selectItemSelect(e){var t=e.parentElement.parentElement.querySelector("#search-form-select"),n=e.getAttribute("data-compensation"),a=e.innerText;t.options[0].value=n,t.options[0].innerText=a,e.parentElement.style.display="none"}async function selectItemFilter(e,t=!1){var n=e.parentElement.parentElement.parentElement.querySelector("#filter-boiler-data"),a=e.parentElement.parentElement.parentElement.querySelector("#filter-jobsite-data"),i=e.parentElement.parentElement.parentElement.querySelector("#search-form-input"),l=e.getAttribute("data-name");i.value=l,t?(n.value=l,a.value=""):(n.value="",a.value=l),e.parentElement.style.display="none"}async function selectItemInput(e,t=!0){var n,a=e.parentElement.parentElement.parentElement.querySelector("#search-city-data"),i=e.parentElement.parentElement.parentElement.querySelector("#search-state-data"),l=e.parentElement.parentElement.parentElement.querySelector("#search-zip-data"),o=e.parentElement.parentElement.parentElement.querySelector("#search-form-input");t?(t=e.getAttribute("data-city"),n=e.getAttribute("data-state"),o.value=t+", "+n,a.value=t,i.value=n,l.value=""):(t=e.getAttribute("data-zip"),o.value=t,a.value="",i.value="",l.value=t),e.parentElement.style.display="none"}async function TestOpen(){var e=document.getElementById("search-principal");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeSearch(e){document.getElementById("search-principal").style.display="none"}async function openClaims(){var e=document.getElementById("claims-select-mobile");window.innerWidth<=767&&("none"===e.style.display||""===e.style.display?e.style.display="block":e.style.display="none")}function closeClaims(){document.getElementById("claims-select-mobile").style.display="none"}axios.defaults.xsrfHeaderName="X-CSRFToken",window.onload=async function(){localStorage.removeItem("current-city"),localStorage.removeItem("current-state");var t=document.getElementById("main-search-form"),n=document.getElementById("filter-job-site");if(t||n){const a=document.getElementsByClassName("custom-search-items");document.addEventListener("click",function(){for(e of a)e.style.display="none"},!0)}n&&getJobSiteData(n),t&&(localStorage.getItem("cities")||await getSearchData(),await axios.get("https://ipapi.co/json/").then(function(e){const t=e.data.region_code,n=e.data.city;e=document.getElementById("current-location-item");e.setAttribute("data-city",""+n),e.setAttribute("data-state",""+t)}))};