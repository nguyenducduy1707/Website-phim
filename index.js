// Chống copy, bôi đen trang web
    $(document).ready(function(){
    $('*').bind('cut copy paste contextmenu', function (e) {
        e.preventDefault();
    })});

// Lướt xuống hiên rõ thanh bar
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
})

// Volume screen
let btnPlayPause = document.getElementById("btnPlayPause");
let videoFullscreen = document.getElementById("video-fullscreen");
btnPlayPause.onclick = function() {
    if (videoFullscreen.paused) {
        videoFullscreen.play();
        btnPlayPause.innerHTML = ` <i class="fa fa-pause-circle"></i>`
    } else {
        videoFullscreen.pause();
        btnPlayPause.innerHTML = ` <i class="fa fa-play-circle"></i>`
    }
}