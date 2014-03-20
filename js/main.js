
//make navbar translucent when not at top
$(window).scroll(function() {   
    $(".navbar").css({opacity: 0.85});

    if ($(window).scrollTop() === 0) {
    $(".navbar").css({opacity: 1});
    }
});



$("li .image-page").on('click', (function(){
    $("#images").show();
    $("#about").hide();
    $("#myCarousel").hide();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .about-page").on('click', (function(){
    $("#images").hide();
    $("#about").fadeIn('slow');
    $("#myCarousel").hide();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .home-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $("#myCarousel").show();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .video-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $("#myCarousel").hide();
    $("#videos").show();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .contact-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $("#myCarousel").hide();
    $("#videos").hide();
    $("#contact").show();
    $("#resume").hide();

}));

$("li .resume-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $("#myCarousel").hide();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").show();

}));





