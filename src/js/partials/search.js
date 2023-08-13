const number_list_select = 9
const is_search = false
​
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + "=")) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
​
var CSRF_TOKEN = getCookie("csrftoken");
axios.defaults.xsrfHeaderName = "X-CSRFToken";
​
​
window.onload = async function () {
    localStorage.removeItem("current-city")
    localStorage.removeItem("current-state")
    const main_search = document.getElementById("main-search-form")
    const filter_job_site = document.getElementById("filter-job-site")
​
    if (main_search || filter_job_site) {
        const elements = document.getElementsByClassName("custom-search-items")
        document.addEventListener("click", function () {
            for (e of elements) {
                e.style.display = "none"
            }
​
        }, true)
    }
    if (filter_job_site) {
        getJobSiteData(filter_job_site)
    }
    if (main_search) {
        if (localStorage.getItem("cities")) {
        } else {
            await getSearchData()
        }
        await axios.get("https://ipapi.co/json/")
            .then(function (response) {
                const current = {
                    "state_abbr": response.data["region_code"],
                    "city": response.data["city"]
                }
                const e = document.getElementById("current-location-item")
                e.setAttribute("data-city", `${current.city}`)
                e.setAttribute("data-state", `${current.state_abbr}`)
            });
    }
}
​
async function getJobSiteData(e) {
    const state = e.querySelector("#filter-state-data").value
    const city = e.querySelector("#filter-city-data").value
    if (!(city === localStorage.getItem("current-city")) && !(state === localStorage.getItem("current-state"))) {
        await axios.post("/core/api/v1/getfilterjobsitedata/", {
            header: {
                "X-CSRFToken": CSRF_TOKEN,
            },
            "city": city,
            "state_abbr": state
        }).then(async function (response) {
            localStorage.setItem("jobsites", JSON.stringify(response.data.jobsites))
            localStorage.setItem("current-city", city)
            localStorage.setItem("current-state", state)
        })
    }
    console.log(JSON.parse(localStorage.getItem("jobsites")))
}
​
async function getSearchData() {
    await axios.get("/core/api/v1/getsearchdata/", {})
        .then(async function (response) {
            localStorage.setItem("cities", JSON.stringify(response.data.cities))
            localStorage.setItem("zips", JSON.stringify(response.data.zips))
        })
}
​
async function openCustomSelect(e) {
    const element = e.parentElement.querySelector(".custom-search-items")
    if (element.style.display == "none") {
        element.style.display = "block"
    }
}
​
function searchEngineFilter(list_item, list_in) {
    if (list_in.length <= list_item.length) {
        var issearch = true
        for (let i = 0; i < list_in.length; i++) {
            if (!list_item[i].startsWith(list_in[i])) {
                issearch = false
                break;
            }
        }
        if (!issearch) {
            issearch = true
            const diff = list_item.length - list_in.length
            for (let i = list_item.length - 1; i >= diff; i--) {
                if (!list_item[i].startsWith(list_in[i - diff])) {
                    issearch = false
                    break;
                }
            }
        }
        return issearch
    }
    return false
}
​
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}
​
async function filterEngine(e) {
    const element = e.parentElement.querySelector("#custom-search-input-items")
    const input = e.value
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
    if (input.length > 2) {
        const inputValue = toTitleCase(input).split(" ")
        const arrJobSite = JSON.parse(localStorage.getItem("jobsites"))
        let arrResult = []
        for (let item of arrJobSite) {
            const list_item = toTitleCase(item.name).split(" ")
            if (searchEngineFilter(list_item, inputValue)) {
                arrResult.push(item)
                if (arrResult.length === number_list_select) {
                    break
                }
            }
        }
        for (let j_item of arrResult) {
            const new_item = document.createElement("div")
            new_item.setAttribute("data-name", `${j_item.name}`)
            const item_value = j_item.name.split(" ")
​
            if (item_value[0].startsWith(inputValue[0])) {
                for (let i = 0; i < inputValue.length; i++) {
                    item_value[i] = `<b>${inputValue[i]}</b>` + item_value[i].slice(inputValue[i].length)
                }
            } else {
                const diff = item_value.length - inputValue.length
                for (let i = item_value.length - 1; i >= diff; i--) {
                    item_value[i] = `<b>${inputValue[i - diff]}</b>` + item_value[i].slice(inputValue[i - diff].length)
                }
            }
            new_item.innerHTML = item_value.join(" ")
            new_item.addEventListener("click", async function () {
                await selectItemFilter(this)
            })
            element.appendChild(new_item)
        }
    }
}
​
async function searchEngine(e) {
    const element = e.parentElement.querySelector("#custom-search-input-items")
    const input = e.value
    while (element.children.length > 1) {
        element.removeChild(element.lastChild);
    }
    if (input.length > 2 && isNaN(input)) {
        const inputValue = toTitleCase(input.replace(",", "")).split(" ")
        const arrCity = JSON.parse(localStorage.getItem("cities"))
        let arrResult = []
        for (let item of arrCity) {
            const list_item = toTitleCase(`${item.name} ${item.state__abbr}`).split(" ")
            if (searchEngineFilter(list_item, inputValue)) {
                arrResult.push(item)
                if (arrResult.length === number_list_select) {
                    break
                }
            }
        }
        for (let c_item of arrResult) {
            const new_item = document.createElement("div")
            new_item.setAttribute("data-city", `${c_item.name}`)
            new_item.setAttribute("data-state", `${c_item.state__abbr}`)
            const item_value = `${c_item.name}, ${c_item.state__abbr}`.split(" ")
​
            if (item_value[0].startsWith(inputValue[0])) {
                for (let i = 0; i < inputValue.length; i++) {
                    item_value[i] = `<b>${inputValue[i]}</b>` + item_value[i].slice(inputValue[i].length)
                }
            } else {
                const diff = item_value.length - inputValue.length
                for (let i = item_value.length - 1; i >= diff; i--) {
                    item_value[i] = `<b>${inputValue[i - diff]}</b>` + item_value[i].slice(inputValue[i - diff].length)
                }
            }
            item_value[item_value.length - 1] = item_value[item_value.length - 1].toUpperCase()
            new_item.innerHTML = item_value.join(" ")
            new_item.addEventListener("click", async function () {
                await selectItemInput(this)
            })
            element.appendChild(new_item)
        }
    } else if (input.length > 1 && !isNaN(input)) {
        const arrZip = JSON.parse(localStorage.getItem("zips"))
        let arrResult = []
        for (let item of arrZip) {
            if (item.code.startsWith(input)) {
                arrResult.push(item)
                if (arrResult.length === number_list_select) {
                    break
                }
            }
        }
        for (let z_item of arrResult) {
            const new_item = document.createElement("div")
            new_item.setAttribute("data-zip", `${z_item.code}`)
            new_item.addEventListener("click", async function () {
                await selectItemInput(this, false)
            })
            new_item.innerHTML = `<b>${input}</b>` + z_item.code.slice(input.length)
            element.appendChild(new_item)
        }
    }
}
​
async function selectItemSelect(e) {
    const main_select = e.parentElement.parentElement.querySelector("#search-form-select")
    const compensation_data = e.getAttribute("data-compensation")
    const compensation_text = e.innerText
    main_select.options[0].value = compensation_data
    main_select.options[0].innerText = compensation_text
    e.parentElement.style.display = "none"
}
​
​
async function selectItemFilter(e, is_boiler = false) {
    const input_boiler = e.parentElement.parentElement.parentElement.querySelector("#filter-boiler-data")
    const input_jobsitite = e.parentElement.parentElement.parentElement.querySelector("#filter-jobsite-data")
    const main_input = e.parentElement.parentElement.parentElement.querySelector("#search-form-input")
    const data_name = e.getAttribute("data-name")
    main_input.value = data_name
    if (is_boiler) {
        input_boiler.value = data_name
        input_jobsitite.value = ""
    } else {
        input_boiler.value = ""
        input_jobsitite.value = data_name
    }
     e.parentElement.style.display = "none"
}
​
​
async function selectItemInput(e, is_city = true) {
    const input_city = e.parentElement.parentElement.parentElement.querySelector("#search-city-data")
    const input_state = e.parentElement.parentElement.parentElement.querySelector("#search-state-data")
    const input_zip = e.parentElement.parentElement.parentElement.querySelector("#search-zip-data")
    const main_input = e.parentElement.parentElement.parentElement.querySelector("#search-form-input")
    if (is_city) {
        const data_city = e.getAttribute("data-city")
        const data_state = e.getAttribute("data-state")
        main_input.value = `${data_city}, ${data_state}`
        input_city.value = data_city
        input_state.value = data_state
        input_zip.value = ""
    } else {
        const data_zip = e.getAttribute("data-zip")
        main_input.value = data_zip
        input_city.value = ""
        input_state.value = ""
        input_zip.value = data_zip
    }
    e.parentElement.style.display = "none"
}








async function TestOpen() {
    var searchPrincipal = document.getElementById("search-principal");
    if (window.innerWidth <= 767) {
        if (searchPrincipal.style.display === "none" || searchPrincipal.style.display === "") {
            searchPrincipal.style.display = "block";
        } else {
            searchPrincipal.style.display = "none";
        }
    }
}

function closeSearch(button) {
    var searchPrincipal = document.getElementById("search-principal");
    searchPrincipal.style.display = "none";
}

async function openClaims() {
    var claimsSection = document.getElementById("claims-select-mobile");
    if (window.innerWidth <= 767) {
        if (claimsSection.style.display === "none" || claimsSection.style.display === "") {
            claimsSection.style.display = "block";
        } else {
            claimsSection.style.display = "none";
        }
    }
}

function closeClaims() {
    var claimsSection = document.getElementById("claims-select-mobile");
    claimsSection.style.display = "none";
}