$(document).ready(function(l){$(window).scroll(function(){100<$(this).scrollTop()?($(".scroll-up").fadeIn(),$(".scroll-up").addClass("show")):($(".scroll-up").fadeOut(),$(".scroll-up").removeClass("show"))}),$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}),$(document).ready(function(){$(".faq-item").addClass("closed"),$(".faq-item").click(function(){$(this).toggleClass("open closed"),$(this).children(".answer").slideToggle()})});