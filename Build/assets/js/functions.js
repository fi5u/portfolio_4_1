/*function checkFileExists(testUrl) {
    var returnVar;
    //check if file exists
    $.ajax({
        url: testUrl,
        type:'HEAD',
        error: function() {
            returnVar = 0;
        },
        success: function() {
            returnVar = 1;
        }
    });
    return returnVar;
}
*/

function is_retina(url) {
    var retinaExt = "@2x";
    //remove extension
    var filename = url.substr(0, url.lastIndexOf('.'));
    var testStr = filename.slice( -3 );

    if(testStr === retinaExt) {
        return true;
    } else {
        return false;
    }
}

function getRetinaUrl(url) {
    //get the filetype
    var urlFiletype = url.split(".").pop();
    //get filename without ext
    var urlFilename = url.substr(0, url.lastIndexOf('.'));
    //get retina url
    var retinaUrl = urlFilename + "@2x." + urlFiletype;

    return retinaUrl;
}

function singleLarge() {
    if( retina ) {
        //change first image link to retina
        var testUrl = $("#imageblock-link").attr("href");
        if( !is_retina(testUrl) ) {
            var retinaUrl = getRetinaUrl(testUrl);

            //check if file exists
            $.ajax({
                url: retinaUrl,
                type:'HEAD',
                error: function() {
                    //file not exists
                },
                success: function() {
                    $("#imageblock-link").attr("href", retinaUrl);
                }
            });
        }

        //change each filmstrip img and link to retina
        $("#filmstrip a").each(function() {
            var self = $(this);
            var testLg = $(this).attr("href");
            var testMed = $(this).children("img").attr("data-medium");

            if( !is_retina(testLg) ) {
                var retinaLgUrl = getRetinaUrl(testLg);
                //check if file exists
                $.ajax({
                    url: retinaLgUrl,
                    type:'HEAD',
                    error: function() {
                        //file not exists
                    },
                    success: function() {
                        $(self).attr("href", retinaLgUrl);
                    }
                });
            }

            if( !is_retina(testMed) ) {
                var retinaMedUrl = getRetinaUrl(testMed);
                //check if file exists
                $.ajax({
                    url: retinaMedUrl,
                    type:'HEAD',
                    error: function() {
                        //file not exists
                    },
                    success: function() {
                        $(self).children("img").attr("data-medium", retinaMedUrl);
                    }
                });
            }
        });
    }
}

function swapBackgroundImgs() {
    if( retina ) {
        $(".portfolio__item__visual").each(function() {
            var self = $(this);
            var cssProp = $(self).css("backgroundImage");
            //get the url on its own
            var url = cssProp.substring(4).slice(0, -1);

            var retinaUrl = getRetinaUrl(url);

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

/*            if( checkFileExists(retinaUrl) === 1 ) {
                alert("exists");
                $(self).css({
                    backgroundImage: "url("+retinaUrl+")"
                });
            } else {
                alert("no exist");
            }*/
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
    if( retina ) {
        var retinaMed = getRetinaUrl(medium);
        var retinaLg = getRetinaUrl(large);

        $.ajax({
            url: retinaLg,
            type:'HEAD',
            error: function() {
                $("#imageblock-link").attr("href", large);
            },
            success: function() {
                $("#imageblock-link").attr("href", retinaLg);
            }
        });

        $.ajax({
            url: retinaMed,
            type:'HEAD',
            error: function() {
                $("#imageblock-link img").attr("src", medium);
            },
            success: function() {
                $("#imageblock-link img").attr("src", retinaMed);
            }
        });


    } else {
        $("#imageblock-link").attr("href",large);
        $("#imageblock-link img").attr("src", medium);
    }
}

function preloadImages() {
    $("#filmstrip a").each(function() {
        var urlLg = $(this).attr("href"),
            urlMed = $(this).children("img").attr("data-medium"),
            imgLg = new Image(),
            imgMed = new Image();

        if( retina ) {
            if( !is_retina(urlLg) ) {
                var retinaLg = getRetinaUrl(urlLg);

                //check if file exists
                $.ajax({
                    url: retinaLg,
                    type:'HEAD',
                    success: function() {
                        urlLg = retinaLg;
                        imgLg.src = urlLg;
                    }
                });
            }

            if( !is_retina(urlMed) ) {
                var retinaMed = getRetinaUrl(urlMed);

                //check if file exists
                $.ajax({
                    url: retinaMed,
                    type:'HEAD',
                    success: function() {
                        urlMed = retinaMed;
                        imgMed.src = urlLg;
                    }
                });
            }
        } else { //not retina
            imgLg.src = urlLg;
            imgMed.src = urlLg;
        }
    });
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