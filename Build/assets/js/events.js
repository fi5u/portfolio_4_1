$("#menu-trigger").click(function() {
    $("html").toggleClass("nav-open");
});

$("textarea").focusin(function() {
    toggleTextarea(true);
});

$("textarea").focusout(function() {
    toggleTextarea();
});

$("#imageblock").on("click", "a#imageblock-link", function(event) {
    var url = $("#imageblock a").attr("href");
    lightbox(url);
});

$("body").on("click", ".lightbox", function(event) {
    $(".lightbox").fadeOut("fast");
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