// Lướt xuống hiên rõ thanh bar
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
})

// Click vào nút info để hiện thông tin phim sắp chiếu
function open_and_move2(){
    win3=window.open("slider7.html","","width=600,height=500")
    win3.moveTo(screen.width/2-300,screen.height/2-250)
}
// Responsive slide
if($(window).width() <= 991) {
    $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
    .removeClass("container")
    .addClass("container-fluid")
} else {
    $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
    .removeClass("container-fluid")
    .addClass("container")
}
$(window).resize(function() {
    if($(window).width() <= 991) {
        $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
        .removeClass("container")
        .addClass("container-fluid")
    } else {
        $(`#container-fantasy, #container-action, #container-romantic, #container-comedy, #container-horror`)
        .removeClass("container-fluid")
        .addClass("container")
    }
})
