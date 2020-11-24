// // // Chống copy, bôi đen trang web
//     $(document).ready(function(){
//     $('*').bind('cut copy paste contextmenu', function (e) {
//         e.preventDefault();
//     })});

// // Lướt xuống hiên rõ thanh bar
$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 0);
})