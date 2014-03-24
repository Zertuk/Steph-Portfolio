//isotope image gallery
var $container = $('#container');

$container.isotope({
    itemSelector : '.item'
 });

$('#filter button').click(function() {
    var selector = $(this).attr('data-filter');
    $container.isotope({ filter: selector })
});




//make navbar translucent when not at top
$(window).scroll(function() {   
    $(".navbar").css({opacity: 0.85});

    if ($(window).scrollTop() === 0) {
    $(".navbar").css({opacity: 1});
    }
});

//oh god this is so bad why am i doing this this way im stupid 
//switch the displayed section when navbar link clicked
$("li .image-page").on('click', (function(){
    $("#images").fadeIn('slow');
    $("#about").hide();
    $(".caroufredsel_wrapper").hide();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .about-page").on('click', (function(){
    $("#images").hide();
    $("#about").fadeIn('slow');
    $(".caroufredsel_wrapper").hide();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .home-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $(".caroufredsel_wrapper").fadeIn('slow');
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .video-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $(".caroufredsel_wrapper").hide();
    $("#videos").fadeIn('slow');
    $("#contact").hide();
    $("#resume").hide();

}));

$("li .contact-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $(".caroufredsel_wrapper").hide();
    $("#videos").hide();
    $("#contact").fadeIn('slow');
    $("#resume").hide();

}));

$("li .resume-page").on('click', (function(){
    $("#images").hide();
    $("#about").hide();
    $(".caroufredsel_wrapper").hide();
    $("#videos").hide();
    $("#contact").hide();
    $("#resume").fadeIn('slow');

}));

//caroFredSel carousel
$(document).ready(function() {
    $('#carousel').carouFredSel({
        responsive: true,
        height: 'variable',     
        align: "center",
        items               : 1,
        direction           : "left",
        items: {
            height: 'auto',
            
        },
        scroll : {
            items           : 1,
            duration        : 1000,                         
            pauseOnHover    : false,
            fx: 'crossfade'

        }                   

    });
});


