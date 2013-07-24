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
    $(".single__filmstrip").flexorder({
        breakpoint: 1024,
        targetContainer: $(".single__imageblock"),
        targetPosition: "end"
    });
}

function bindSvgeezy() {
    svgeezy.init(false, 'png');
}

function lightboxVCenter() {
    var winH = $(window).height();
    var lbImgH = $(".lightbox__img").outerHeight();
    var top = (winH - lbImgH) / 2;
    $(".lightbox__content").css("top",top + "px");
}

function lightbox(url) {
    if( $('.lightbox').length > 0 ) {
        $('.lightbox__img').html('<img src="' + url + '">');
        $('.lightbox').fadeIn("fast");
    } else {
        var lightbox =
        '<div class="lightbox">' +
            '<div class="lightbox__content">' +
                '<div class="lightbox__img">' +
                    '<img src="' + url +'">' +
                '</div>' +
                '<div class="lightbox__controls">' +
                    '<div class="lightbox__control--left"></div>' +
                    '<div class="lightbox__control--right"></div>' +
                '</div>' +
            '</div>' +
        '</div>';
        $('body').append(lightbox);
    }
    lightboxVCenter();
    event.preventDefault();
}

function updateSingleView(medium, large) {
    $("#imageblock-link").attr("href",large);
    $("#imageblock-link img").attr("src", medium);
}

function preloadImages() {
    if( $("#filmstrip a").length ) {
        $("#filmstrip a").each(function() {
            var urlLg = $(this).attr("href"),
                urlMed = $(this).children(),
                imgLg = new Image(),
                imgMed = new Image();

            imgLg.src = urlLg;
            imgMed.src = urlLg;
        });
    }
}

var waitOnEvent = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "1";
        }
        if (timers[uniqueId]) {
            clearTimeout (timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();