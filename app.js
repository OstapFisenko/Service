$(function() {

    let header = $("header");
    let intro = $("intro");
    let introH = intro.innerHeight();
    let scrollPoss = $(Window).scrollTop();

    $(Window).on("scroll", function() {
        scrollPoss = $(this).scrollTop;

        if( scrollPoss > introH ){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        };

    });

});