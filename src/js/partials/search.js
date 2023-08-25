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