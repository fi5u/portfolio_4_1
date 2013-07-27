function swapBackgroundImgs() {
    if( retina ) {
        $(".portfolio__item__visual").each(function() {
            var self = $(this);
            var cssProp = $(self).css("backgroundImage");
            //get the url on its own
            var url = cssProp.substring(4).slice(0, -1);
            //get the filetype
            var urlFiletype = url.split(".").pop();
            //get filename without ext
            var urlFilename = url.substr(0, url.lastIndexOf('.'));
            //get retina url
            var retinaUrl = urlFilename + "@2x." + urlFiletype;

            //check if file exists
            $.ajax({
                url: retinaUrl,
                type:'HEAD',
                error: function() {
                    //file not exists
                },
                success: function() {
                    $(self).css({
                        backgroundImage: "url("+retinaUrl+")"
                    });
                }
            });
        });
    }
}


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

    $(".single--404__block1 .contact").flexorder({
        breakpoint: 768,
        targetContainer: $(".single--404__block2"),
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

function lightboxAction(action) {
    if( action === "close" ) {
        $(".lightbox").fadeOut("fast");
    }
}

function lightbox(url) {
    //get the urls for the lightbox arrows
    var nextUrl = $("#filmstrip a[href='"+url+"']").next().attr("href");
    var prevUrl = $("#filmstrip a[href='"+url+"']").prev().attr("href");
    if( !nextUrl ) {
        nextUrl = $("#filmstrip a:first").attr("href");
    }
    if( !prevUrl ) {
        prevUrl = $("#filmstrip a:last").attr("href");
    }

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
                    '<a class="lightbox__control--left"></a>' +
                    '<a class="lightbox__control--right"></a>' +
                '</div>' +
            '</div>' +
        '</div>';
        $('body').append(lightbox);
    }

    $(".lightbox__control--right").attr("href",nextUrl);
    $(".lightbox__control--left").attr("href",prevUrl);

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