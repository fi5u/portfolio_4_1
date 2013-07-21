function toggleTextarea(activate) {
    if(activate) {
        $("textarea").addClass("active");
    } else {
        if($("textarea").val() === "") {
            $("textarea").removeClass("active");
        }
    }
}

function bindFlexorder() {
/*    $(".single__textblock").flexorder({
        breakpoint: 768,
        targetContainer: $(".single__filmstrip-contact")
    });

    $(".single__filmstrip").flexorder({
        breakpoint: 768,
        targetContainer: $(".single__imagetext"),
        targetPosition: "end"
    });*/

    $(".single__filmstrip").flexorder({
        breakpoint: 1024,
        targetContainer: $(".single__imageblock"),
        targetPosition: "end"
    });
}