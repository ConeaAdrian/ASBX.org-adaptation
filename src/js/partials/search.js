// async function TestOpen() {
//     var searchPrincipal = document.getElementById("search-principal");
//     if (window.innerWidth <= 767) {
//         if (searchPrincipal.style.display === "none" || searchPrincipal.style.display === "") {
//             searchPrincipal.style.display = "block";
//         } else {
//             searchPrincipal.style.display = "none";
//         }
//     }
// }

// function closeSearch(button) {
//     var searchPrincipal = document.getElementById("search-principal");
//     searchPrincipal.style.display = "none";
// }

// async function openClaims() {
//     var claimsSection = document.getElementById("claims-select-mobile");
//     if (window.innerWidth <= 992) {
//         if (claimsSection.style.display === "none" || claimsSection.style.display === "") {
//             claimsSection.style.display = "block";
//         } else {
//             claimsSection.style.display = "none";
//         }
//     }
// }

// function closeClaims() {
//     var claimsSection = document.getElementById("claims-select-mobile");
//     claimsSection.style.display = "none";
// }

// let opensearch = false;

// function errorCallback(error) {
//   setCookie("block_geolocation", "1", 1);
//   const element = document.querySelector(".search-items");
//   while (element.lastChild) {
//     element.removeChild(element.lastChild);
//   }
// }

// async function successCallback(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   axios.defaults.xsrfHeaderName = "X-CSRFToken";
//   await axios
//     .post("/core/api/v1/getapikey/", {
//       name: "HERE",
//     })
//     .then(function (response) {
//       if (response.data.status) {
//         const key = decode(response.data.api_key);
//         setCookie("hero_apy_key", key, 1);
//         getCurrentLocation(lat, lon, key);
//       }
//     });
// }

// function initMainSearch() {
//   document.addEventListener(
//     "click",
//     function (event) {
//       event.stopPropagation();
//       const select_items = document.querySelector(".search-items");
//       const select_type = document.querySelector(".search-type-items");
//       select_items.removeAttribute("style");
//       select_type.removeAttribute("style");
//     },
//     false
//   );
// }
// async function getCurrentLocation(lat, lon, key) {
//   await axios
//     .get(
//       `https://geocode.search.hereapi.com/v1/revgeocode?at=${lat}%2C${lon}&apiKey=${key}`
//     )
//     .then(function (response) {
//       let current = {
//         state_abbr: response.data.items[0].address.stateCode,
//         city: response.data.items[0].address.city,
//       };
//       if (!current.state_abbr) {
//         current.state_abbr = "N/A";
//       }
//       setCurrentLocation(current);
//       setWithExpiry("location", current, 1);
//     });
// }
// function setCurrentLocation(location) {
//   const e = document.querySelector("#current-location");
//   e.setAttribute("data-city-name", location.city);
//   e.setAttribute("data-state-abbr", location.state_abbr);
//   selectItemInput(e);
// }

// function decode(string) {
//   let new_string = "";
//   for (let i = 0; i < string.length; i++) {
//     new_string = string[i] + new_string;
//   }
//   return new_string;
// }

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function (txt) {
//     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }
// function appendItem(parent, new_item, item_value, inputValue) {
//   for (let i = 0; i < item_value.length; i++) {
//     for (let j = 0; j < inputValue.length; j++) {
//       if (item_value[i].startsWith(inputValue[j])) {
//         item_value[i] =
//           `<b style="font-size: inherit; font-weight: 700;">${inputValue[j]}</b>` +
//           item_value[i].slice(inputValue[j].length);
//         break;
//       }
//     }
//   }
//   new_item.innerHTML = item_value.join(" ");
//   new_item.setAttribute("onclick", "selectItemInput(this, event)");
//   new_item.classList.add("search-item");
//   parent.appendChild(new_item);
// }

// function createState(element, item, inputValue) {
//   const new_item = document.createElement("div");
//   new_item.setAttribute("data-state-abbr", item.abbr);
//   new_item.setAttribute("data-state-name", item.name);
//   new_item.setAttribute("data-search-type", item.type);
//   const item_value = item.name.split(" ");
//   appendItem(element, new_item, item_value, inputValue);
// }

// function createMilitary(element, item, inputValue) {
//   const new_item = document.createElement("div");
//   new_item.setAttribute("data-state-abbr", item.state__abbr);
//   new_item.setAttribute("data-city-name", item.city__name);
//   new_item.setAttribute("data-jobsite-name", item.name);
//   new_item.setAttribute("data-search-type", item.type);
//   const item_value = item.full_name.split(" ");
//   appendItem(element, new_item, item_value, inputValue);
// }

// function createZipCode(element, item, inputValue) {
//   const new_item = document.createElement("div");
//   new_item.setAttribute("data-zip", item.code);
//   new_item.setAttribute("data-search-type", item.type);
//   const item_value = item.code.split(" ");
//   appendItem(element, new_item, item_value, inputValue);
// }

// function createCity(element, item, inputValue) {
//   const new_item = document.createElement("div");
//   new_item.setAttribute("data-city-name", item.name);
//   new_item.setAttribute("data-search-type", item.type);
//   new_item.setAttribute("data-state-abbr", item.state__abbr);
//   const item_value = item.full_name.split(" ");
//   appendItem(element, new_item, item_value, inputValue);
// }

// async function searchEngine(e) {
//   const element = e.parentElement.querySelector(".search-items");
//   const input = e.value;
//   const inputValue = toTitleCase(input.replace(",", "")).split(" ");
//   let arrResult = [];
//   element.style.display = "block";
//   if (input.length > 2) {
//     axios.defaults.xsrfHeaderName = "X-CSRFToken";
//     arrResult = await axios
//       .post("/search/api/v1/search_engine/", {
//         input: input,
//       })
//       .then((response) => {
//         if (response.data.status) return response.data.response;
//         else return [];
//       });
//   }
//   while (element.lastChild) {
//     element.removeChild(element.lastChild);
//   }
//   for (let item of arrResult) {
//     switch (item.type) {
//       case "city":
//         createCity(element, item, inputValue);
//         break;
//       case "state":
//         createState(element, item, inputValue);
//         break;
//       case "jobsite":
//         createMilitary(element, item, inputValue);
//         break;
//       case "zip":
//         createZipCode(element, item, inputValue);
//     }
//   }
// }

// function selectItemInput(e) {
//   const parent = document.querySelector(".search-content");
//   const input_city_name = parent.querySelector("#search-city");
//   const input_state_abbr = parent.querySelector("#search-state");
//   const input_zip = parent.querySelector("#search-zip-code");
//   const input_jobsite = parent.querySelector("#search-jobsite-name");
//   const search_type = parent.querySelector("#search-type");
//   const main_input = parent.querySelector(".search-input");
//   const search_select_type = e.getAttribute("data-search-type");
//   let is_valid = false;
//   let city_name;
//   let state_abbr;
//   let jobsite_name;
//   let zip_code;
//   let state_name;
//   switch (search_select_type) {
//     case "zip":
//       zip_code = e.getAttribute("data-zip");
//       main_input.value = zip_code;
//       input_city_name.value = "";
//       input_state_abbr.value = "";
//       input_jobsite.value = "";
//       search_type.value = search_select_type;
//       input_zip.value = zip_code;
//       is_valid = true;
//       break;
//     case "jobsite":
//       city_name = e.getAttribute("data-city-name");
//       state_abbr = e.getAttribute("data-state-abbr");
//       jobsite_name = e.getAttribute("data-jobsite-name");
//       main_input.value = `${jobsite_name}, ${city_name}, ${state_abbr}`;
//       input_city_name.value = city_name;
//       input_state_abbr.value = state_abbr;
//       input_jobsite.value = jobsite_name;
//       search_type.value = search_select_type;
//       input_zip.value = "";
//       is_valid = true;
//       break;
//     case "city":
//       city_name = e.getAttribute("data-city-name");
//       state_abbr = e.getAttribute("data-state-abbr");
//       main_input.value = `${city_name}, ${state_abbr}`;
//       input_city_name.value = city_name;
//       input_state_abbr.value = state_abbr;
//       input_jobsite.value = "";
//       search_type.value = search_select_type;
//       input_zip.value = "";
//       is_valid = true;
//       break;
//     case "state":
//       state_name = e.getAttribute("data-state-name");
//       state_abbr = e.getAttribute("data-state-abbr");
//       main_input.value = state_name;
//       input_city_name.value = "";
//       input_state_abbr.value = state_abbr;
//       input_jobsite.value = "";
//       search_type.value = search_select_type;
//       input_zip.value = "";
//       is_valid = true;
//       break;
//   }
//   e.parentElement.removeAttribute("style");
//   if (is_valid) {
//     parent.submit();
//   }
// }

// function actionSearch(e, event) {
//   event.stopPropagation();
//   const main_input = e.querySelector("search-input").value;
//   const search_items = e.querySelector("search-items");
//   const current_location = e.querySelector("#current-location");
//   if (main_input.length > 2) {
//     let index = 0;
//     if (current_location.innerText.length > 0) {
//       index = 1;
//     }
//     if (search_items.children.length > index) {
//       selectItemInput(search_items.children[index]);
//     } else {
//       e.submit();
//     }
//   }
// }

// let lastScroll = 0;
// window.onload = async function () {
//   await initMainSearch();
//   const search_container = document.querySelector(".header-search");
//   if (search_container) {
//     window.addEventListener(
//       "scroll",
//       async function () {
//         const search_container = document.querySelector(".header-search");
//         const currentScroll = window.scrollY;
//         if (currentScroll < lastScroll) {
//           search_container.removeAttribute("style");
//         } else {
//           search_container.style.transitionDelay = "0s,0s";
//           search_container.style.zIndex = "-101";
//           search_container.style.top = "-80px";
//         }
//         lastScroll = currentScroll;
//       },
//       true
//     );
//   }
// };
// function extendSearch(event, action = 0) {
//   event.stopPropagation();
//   if (
//     action === 1 &&
//     window.innerWidth > 550 &&
//     !document.querySelector(".search-type-items").getAttribute("style")
//   ) {
//     let Scroll;
//     if (location.pathname === "/") {
//       const search = document.querySelector(".search-input");
//       const searchInputObj = search.getBoundingClientRect();
//       const scrollTopY = window.scrollY;
//       const posY = searchInputObj.y;
//       Scroll = scrollTopY + posY - 70;
//       const text = document.querySelector(".index-search__content > p");
//       text.style.color = "#003366";
//     } else {
//       closeClaims();
//       const search_container = document.querySelector(".header-search");
//       search_container.removeAttribute("style");
//     }
//     window.scrollTo({ top: Scroll, behavior: "smooth" });
//     openTypeItem(event);
//   } else if (window.innerWidth <= 550) {
//     document.querySelector("body").style.overflow = "hidden";
//     const type_wrapper = document.querySelector(".search-type-wrapper");
//     type_wrapper.style.display = "block";
//     const close_search = document.querySelector(".close-search");
//     close_search.style.display = "block";
//     const search_wrapper = document.querySelector(".container-search");
//     search_wrapper.classList.add("opened-search");
//     const search_overlay = document.querySelector(".search-overlay");
//     search_overlay.style.display = "block";
//     openTypeItem(event);
//     opensearch = true;
//   }
// }

// function openItems(event) {
//   event.stopPropagation();
//   const type_items = document.querySelector(".search-type-items");
//   const element = document.querySelector(".search-items");
//   type_items.removeAttribute("style");
//   if (element.getAttribute("style")) {
//     element.removeAttribute("style");
//     return true;
//   }
//   element.style.display = "block";
// }
// function closeSearch() {
//   document.querySelector("body").removeAttribute("style");
//   const type_items = document.querySelector(".search-type-items");
//   type_items.removeAttribute("style");
//   const select_items = document.querySelector(".search-items");
//   select_items.removeAttribute("style");
//   const type_wrapper = document.querySelector(".search-type-wrapper");
//   type_wrapper.removeAttribute("style");
//   const close_search = document.querySelector(".close-search");
//   close_search.removeAttribute("style");
//   const search_wrapper = document.querySelector(".container-search");
//   search_wrapper.classList.remove("opened-search");
//   const search_overlay = document.querySelector(".search-overlay");
//   search_overlay.removeAttribute("style");
//   opensearch = false;
// }
// function preSetCurrentLocation() {
//   const current_location = getWithExpiry("location");
//   if (current_location) {
//     setCurrentLocation(current_location);
//   } else {
//     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
//   }
// }

// function selectType(e, event) {
//   event.stopPropagation();
//   const parent = e.parentElement;
//   const selected = e.parentElement.parentElement.querySelector(
//     ".search-selected-type"
//   );
//   const insert_data = `<img src="${e.dataset.src}" class="select-type-icon"> ${e.dataset.type}`;
//   const form = document.querySelector("form.search-content");
//   form.querySelector("#search-type").value = e.dataset.type;
//   selected.innerHTML = insert_data;
//   const element = document.querySelector(".search-items");
//   while (element.lastChild) {
//     element.removeChild(element.lastChild);
//   }
//   if (
//     e.dataset.type === "Location" &&
//     (getCookie("block_geolocation") !== "1" || !getCookie("block_geolocation"))
//   ) {
//     const el = document.createElement("div");
//     el.setAttribute("onclick", "preSetCurrentLocation()");
//     el.setAttribute("id", "current-location");
//     el.classList.add("search-item");
//     el.innerText = "Current Location";
//     el.setAttribute("data-city-name", "");
//     el.setAttribute("data-state-abbr", "");
//     element.appendChild(el);
//   }
//   parent.removeAttribute("style");
// }
// function openTypeItem(event) {
//   event.stopPropagation();
//   const type_items = document.querySelector(".search-type-items");
//   const element = document.querySelector(".search-items");
//   element.removeAttribute("style");
//   if (type_items.getAttribute("style")) {
//     type_items.removeAttribute("style");
//     return true;
//   }
//   type_items.style.display = "block";
// }
// window.addEventListener("resize", function () {
//   if (window.innerWidth >= 550 && opensearch) {
//     closeSearch(new Event("click"));
//   }
// });

// function toSearch(event) {
//   extendSearch(event, 1);
// }

// window.addEventListener("scroll", function () {
//   if (window.innerWidth >= 550 && opensearch) {
//     closeSearch(new Event("click"));
//   }
// });
