function toggleTextarea(activate) {
    if(activate) {
        $("textarea").addClass("active");
    } else {
        if($("textarea").val() === "") {
            $("textarea").removeClass("active");
        }
    }
}