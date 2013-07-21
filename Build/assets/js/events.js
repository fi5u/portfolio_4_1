$("#menu-trigger").click(function() {
    $("html").toggleClass("nav-open");
});

$("textarea").focusin(function() {
    toggleTextarea(true);
});

$("textarea").focusout(function() {
    toggleTextarea();
});