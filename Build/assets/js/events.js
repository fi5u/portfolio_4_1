$("#menu-trigger").click(function() {
    $("html").toggleClass("nav-open");
});

$("textarea").focusin(function() {
    toggleTextarea(true);
});

$("textarea").focusout(function() {
    toggleTextarea();
});

$(".portfolio__item").bind('touchstart', function(e){
    $(".portfolio__item.active").removeClass("active");
    $(this).addClass("active");
});

$("body").on("click", ".lightbox__controls a", function(event) {
    var url = $(this).attr("href");
    lightbox(url);
});

$("#imageblock").on("click", "a#imageblock-link", function(event) {
    var url = $("#imageblock a").attr("href");
    lightbox(url);

    $.preload(url,{
        interval : 200
    }).progress(function (image) {
        lightboxVCenter();
    });

});


$("body").on("click touchstart", ".lightbox, .lightbox__controls", function(event) {
    event.stopPropagation();
    if( $(this).attr("class") !== "lightbox__controls" ) {
        lightboxAction("close");
    }
});


$("#filmstrip").on("click", "a", function(event) {
    event.preventDefault();

    var large = $(this).attr("href");
    var medium = $(this).children("img").attr("data-medium");

    updateSingleView(medium, large);
});

$(window).resize(function() {
    waitOnEvent(function() {
        lightboxVCenter();
    }, 500, "reset1");
});