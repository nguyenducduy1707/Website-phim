// Navbar and back-to-top scroll animation
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
    $('.back-to-top').toggleClass('scrolled', $(this).scrollTop() > 550);
});
// Info button to display upcoming film
let upcomingBtn = document.getElementById("upcomingBtn");
upcomingBtn.onclick = function openUpcomingFilmWindow() {
    win3=window.open("slider7.html","","width=600,height=500")
    win3.moveTo(screen.width/2-300,screen.height/2-250)
}
// Responsive slide, change the opacity and unclickable video in <main> when toggle
let mainToggle = document.getElementById("mainToggle");
let main = document.getElementsByTagName("main")[0];
if($(window).width() <= 991) {
    $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
    .removeClass("container")
    .addClass("container-fluid");
    mainToggle.onclick = function() {
        if($("#navbarsExample01").is(":visible") == true) {
            main.style.opacity = "1";
            main.style.pointerEvents = "all"
        } else {
            main.style.opacity = "0.2";
            main.style.pointerEvents = "none"
        }
    }
} else {
    $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
    .removeClass("container-fluid")
    .addClass("container")
}
$(window).resize(function() {
    if($(window).width() <= 991) {
        $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
        .removeClass("container")
        .addClass("container-fluid");
        if($("#navbarsExample01").is(":visible") == true) {
            main.style.opacity = "0.2";
            main.style.pointerEvents = "none"
        } else {
            main.style.opacity = "1";
            main.style.pointerEvents = "all"
        }
    } else {
        $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
        .removeClass("container-fluid")
        .addClass("container");
        main.style.opacity = "1";
        main.style.pointerEvents = "all"
    }
})
// Click outside to close navbar, when you are on navbar, <main> tag is blurred, and unclickable
$(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
    }
});
