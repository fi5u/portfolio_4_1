/*(function($) {
    $.when(
        $.getScript( templateUrl + "/assets/js/lib/jquery.flexorder.js" ),
        $.getScript( templateUrl + "/assets/js/lib/jquery.placeholder.js" ),
        $.getScript( templateUrl + "/assets/js/lib/jquery.placeholder.js" ),
        $.getScript( templateUrl + "/assets/js/lib/jquery.preload.js" ),
        $.getScript( templateUrl + "/assets/js/lib/svgeezy.js" ),
        $.getScript( templateUrl + "/assets/js/variables.js" ),
        $.getScript( templateUrl + "/assets/js/functions.js" ),
        $.getScript( templateUrl + "/assets/js/events.js" )

    ).done(function(){

        alert("done5");

        swapBackgroundImgs();
        singleLarge();
        bindFlexorder();
        bindSvgeezy();
        bindPlaceholder();
        preloadImages();

    });
})( jQuery );*/



swapBackgroundImgs();
singleLarge();
bindFlexorder();
bindSvgeezy();
bindPlaceholder();
preloadImages();