//make navbar translucent when not at top
$(window).scroll(function() {   
    $(".navbar").css({opacity: 0.85});

    if ($(window).scrollTop() === 0) {
    $(".navbar").css({opacity: 1});
    }
});
