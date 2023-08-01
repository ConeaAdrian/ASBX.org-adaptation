function add_claim(e) {
  let t =
    e.parentElement.parentElement.parentElement.querySelector("#popup-claim");
  e = t.querySelector(".close-button");
  let n = t.querySelector(".button-add"),
    l =
      ((t.style.display = "block"),
      e.addEventListener("click", function () {
        t.style.display = "none";
      }),
      t.querySelectorAll(".chase"));
  l.forEach(function (e) {
    e.addEventListener("change", function () {
      Array.from(l).every(function (e) {
        return "" !== e.value;
      })
        ? ((n.disabled = !1), (n.style.backgroundColor = "#324A74"))
        : ((n.disabled = !0), (n.style.backgroundColor = ""));
    });
  });
}
for (
  var j,
    ll,
    selElmnt,
    a,
    b,
    c,
    x = document.getElementsByClassName("custom-select"),
    l = x.length,
    i = 0;
  i < l;
  i++
) {
  for (
    ll = (selElmnt = x[i].getElementsByTagName("select")[0]).length,
      (a = document.createElement("DIV")).setAttribute(
        "class",
        "select-selected"
      ),
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML,
      x[i].appendChild(a),
      (b = document.createElement("DIV")).setAttribute(
        "class",
        "select-items select-hide"
      ),
      j = 1;
    j < ll;
    j++
  )
    ((c = document.createElement("DIV")).innerHTML =
      selElmnt.options[j].innerHTML),
      c.addEventListener("click", function (e) {
        for (
          var t,
            n,
            l,
            o = this.parentNode.parentNode.getElementsByTagName("select")[0],
            i = o.length,
            c = this.parentNode.previousSibling,
            s = 0;
          s < i;
          s++
        )
          if (o.options[s].innerHTML == this.innerHTML) {
            for (
              o.selectedIndex = s,
                c.innerHTML = this.innerHTML,
                l = (t =
                  this.parentNode.getElementsByClassName("same-as-selected"))
                  .length,
                n = 0;
              n < l;
              n++
            )
              t[n].removeAttribute("class");
            this.setAttribute("class", "same-as-selected");
            break;
          }
        c.click();
      }),
      b.appendChild(c);
  x[i].appendChild(b),
    a.addEventListener("click", function (e) {
      e.stopPropagation(),
        closeAllSelect(this),
        this.nextSibling.classList.toggle("select-hide"),
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(e) {
  for (
    var t = [],
      n = document.getElementsByClassName("select-items"),
      l = document.getElementsByClassName("select-selected"),
      o = n.length,
      i = l.length,
      c = 0;
    c < i;
    c++
  )
    e == l[c] ? t.push(c) : l[c].classList.remove("select-arrow-active");
  for (c = 0; c < o; c++) t.indexOf(c) && n[c].classList.add("select-hide");
}
function updateVisibility() {
  var e = $(window).width() <= 992;
  const t = $(".information-benefits");
  t.hide(),
    e
      ? ($(".AVG-claims .information-benefits").show(),
        $(".ER-claims, .IR-claims, .AVG-claims")
          .off("click")
          .on("click", function () {
            t.hide(), $(this).find(".information-benefits").show();
          }))
      : (t.show(), $(".ER-claims, .IR-claims, .AVG-claims").off("click"));
}
function toggleInformationBenefits(e) {
  $(e).find(".information-benefits").toggle();
}
function handleInput(e) {
  var t = document.getElementById(e),
    e = "close-button-" + e.split("-")[0],
    e = document.getElementById(e);
  t.value ? (e.style.display = "block") : (e.style.display = "none");
}
function clearInput(e) {
  var t = document.getElementById(e),
    e = "close-button-" + e.split("-")[0],
    e = document.getElementById(e);
  (t.value = ""), (e.style.display = "none");
}
function populateInput(e) {
  var e = e.querySelector("p").textContent,
    t = "compensation-input";
  (document.getElementById(t).value = e), handleInput(t);
}
document.addEventListener("click", closeAllSelect),
  document.addEventListener("DOMContentLoaded", function () {
    document
      .querySelectorAll("nav ul li a:not(:only-child)")
      .forEach(function (e) {
        e.addEventListener("click", function (e) {
          e.stopPropagation();
          let t = this.nextElementSibling;
          (t.style.display = "none" === t.style.display ? "block" : "none"),
            document.querySelectorAll(".nav-dropdown").forEach(function (e) {
              e !== t && (e.style.display = "none");
            });
        });
      }),
      document.querySelector("html").addEventListener("click", function () {
        document.querySelectorAll(".nav-dropdown").forEach(function (e) {
          e.style.display = "none";
        });
      }),
      document
        .querySelector("#nav-toggle")
        .addEventListener("click", function () {
          var e = document.querySelector("nav ul");
          this.classList.contains("active")
            ? ((e.style.display = "none"), this.classList.remove("active"))
            : ((e.style.display = "block"), this.classList.add("active"));
        });
  }),
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".add-button").forEach(function (e) {
      e.addEventListener("click", function (e) {
        e.preventDefault();
        var e = this.closest(".add-navy"),
          t = e.querySelector(".error-message"),
          n = e.querySelector("#select1"),
          l = e.querySelector("#beforeCheckbox"),
          o = e.querySelector("#afterCheckbox");
        "" === n.value || (!1 === l.checked && !1 === o.checked)
          ? ((t.style.display = "block"),
            setTimeout(function () {
              t.style.display = "none";
            }, 3e3))
          : e.submit();
      });
    });
  }),
  $(document).ready(function (e) {
    $(".scroll-up").hide(),
      $(window).scroll(function () {
        100 < $(this).scrollTop()
          ? $(".scroll-up").fadeIn()
          : $(".scroll-up").fadeOut();
      }),
      $(".scroll-up").click(function () {
        return (
          document.body.scrollIntoView({ behavior: "smooth", block: "start" }),
          !1
        );
      });
  }),
  $(document).ready(function () {
    updateVisibility(), $(window).resize(updateVisibility);
    var e = $("#switch");
    const l = $(".legal-text"),
      o = $(".your-own-text"),
      i = $(".legal-representation"),
      c = $(".your-own");
    e.prop("checked", !1),
      l.css({ color: "#181059", fontSize: "16px", fontWeight: "500" }),
      i.show(),
      c.hide(),
      e.on("click", function () {
        var e = $(this).is(":checked"),
          t = e ? "" : "#181059",
          n = $(window).width() <= 475 ? "14px" : "16px";
        l.css({ color: t, fontSize: n, fontWeight: e ? "" : "500" }),
          o.css({
            color: e ? "#181059" : "",
            fontSize: n,
            fontWeight: e ? "500" : "",
          }),
          i.toggle(),
          c.toggle();
      });
  }),
  (window.onload = function () {
    var e;
    for (e of ["location-input", "compensation-input"]) {
      handleInput(e);
      var t = "close-button-" + e.split("-")[0];
      document.getElementById(t).style.display = "none";
    }
  }),
  document
    .getElementById("open-search-block")
    .addEventListener("click", function () {
      document.getElementById("search-block").style.display = "block";
    }),
  document
    .getElementById("close-search-block")
    .addEventListener("click", function () {
      document.getElementById("search-block").style.display = "none";
    }),
  window.addEventListener("resize", function () {
    var e = document.querySelector(".claims-select"),
      t = document.querySelector(".claims-select-mobile");
    767 < window.innerWidth
      ? t && t.innerHTML && ((e.innerHTML = t.innerHTML), (t.innerHTML = ""))
      : e && e.innerHTML && ((t.innerHTML = e.innerHTML), (e.innerHTML = ""));
  }),
  window.dispatchEvent(new Event("resize")),
  $(document).ready(function () {
    $("a").on("click", function (e) {
      var t;
      "" !== this.hash &&
        (e.preventDefault(),
        (t = this.hash),
        $("html, body").animate(
          { scrollTop: $(t).offset().top },
          800,
          function () {
            window.location.hash = t;
          }
        ));
    });
  });
