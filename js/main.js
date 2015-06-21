// Menu toggle
$(window).resize(function() {
    myWinWidth();
});

function myWinWidth() {
    var winWidth = $(window).width();
    // console.log(winWidth);
    if(winWidth < 580){
    // if(winWidth < 348){
        $("#toggle_menu").show();
        $( ".nav-ul" ).hide()
    }else{
        $("#toggle_menu").hide();
        $( ".nav-ul" ).show();
    }
    return false;
};

$( "#toggle_menu" ).click(function() {
    $( ".nav-ul" ).slideToggle( "slow" );
});

// Carousel start
$(document).ready(function() {
    $("#owl-slide").owlCarousel({
        items : 4,
        lazyLoad : true,
        navigation : true,
        autoPlay: true
    });
    $("#owl-slide1").owlCarousel({
        // items : 1,
        lazyLoad : true,
        navigation : true,
        autoPlay: true,
        singleItem : true
    });
    $("#owl-slide2").owlCarousel({
        // items : 1,
        lazyLoad : true,
        navigation : true,
        autoPlay: true,
        singleItem : true
    });
});