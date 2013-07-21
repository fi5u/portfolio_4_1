/*
 * jquery.flexorder.js 1.2
 *
 * Copyright 2013, Tommy Fisher http://www.tommyfisher.net
 *
 */

(function($) {

    "use strict";

    /* create an iteration var to help in the creation of the class */
    var iteration = 0;

    $.fn.flexorder = function(options) {

        var settings = {
            breakpoint : 960,
            targetContainer : $(this).parent(),
            targetPosition : "start"
        };


        if (options) {
            $.extend(settings, options);
        }

        return this.each(function(i, el) {
            /* remember selector's original order position */
            var originalLocation = {};
            if ($(el).prev().length) {
                /* not originally first child */
                originalLocation.prev = $(el).prev()[0];
            } else {
                /* originally a first child */
                originalLocation.parent = $(el).parent()[0];
            }

            /* create a class to add to the flexed parent */
            var flexClass = "flexorder-flexed" + iteration;

            var initiateFlexorder = function() {
                var winW = $(window).width();

                if (winW < settings.breakpoint && !$(el.parentNode).hasClass(flexClass)) {
                    /* flex the order of the item */

                    if (settings.targetPosition === "start") {
                        $(el).prependTo(settings.targetContainer[i]);

                        /* if added to the start add in a linebreak after to preserve inline-block spacing */
                        $(el).before("\n");
                    } else {
                        $(el).appendTo(settings.targetContainer[i]);
                    }
                    $(el.parentNode).addClass(flexClass);
                } else if (winW >= settings.breakpoint && $(el.parentNode).hasClass(flexClass)) {
                    $(el.parentNode).removeClass(flexClass);

                    /* return the flexed item back into the orignal flow */
                    if (originalLocation.parent) {
                        /* element was a first child */
                        $(originalLocation.parent).prepend(el);
                    } else {
                        /* element was not a first child */
                        /* add a line break to preserve inline-block spacing */
                        $(originalLocation.prev).after(el).after("\n");
                    }
                }
            };

            initiateFlexorder();

            $(window).resize(function() {
                var timer = null;
                return function() {
                    clearTimeout(timer);
                    timer = setTimeout(initiateFlexorder, 100);
                };

                //initiateFlexorder();
            }());

            /* increment the iteration */
            ++iteration;
        });
    };

}(jQuery));