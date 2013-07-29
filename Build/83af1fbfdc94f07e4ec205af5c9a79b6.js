/*
 * jquery.flexorder.js 1.2
 *
 * Copyright 2013, Tommy Fisher http://www.tommyfisher.net
 *
 */
!function(e){"use strict";var t=0;e.fn.flexorder=function(a){var r={breakpoint:960,targetContainer:e(this).parent(),targetPosition:"start"};return a&&e.extend(r,a),this.each(function(a,n){var i={};e(n).prev().length?i.prev=e(n).prev()[0]:i.parent=e(n).parent()[0];var l="flexorder-flexed"+t,o=function(){var t=e(window).width();t<r.breakpoint&&!e(n.parentNode).hasClass(l)?("start"===r.targetPosition?(e(n).prependTo(r.targetContainer[a]),e(n).before("\n")):e(n).appendTo(r.targetContainer[a]),e(n.parentNode).addClass(l)):t>=r.breakpoint&&e(n.parentNode).hasClass(l)&&(e(n.parentNode).removeClass(l),i.parent?e(i.parent).prepend(n):e(i.prev).after(n).after("\n"))};o(),e(window).resize(function(){var e=null;return function(){clearTimeout(e),e=setTimeout(o,100)}}()),++t})}}(jQuery),function(e,t,a){function r(e){var t={},r=/^jQuery\d+$/;return a.each(e.attributes,function(e,a){a.specified&&!r.test(a.name)&&(t[a.name]=a.value)}),t}function n(e,r){var n=this,i=a(n);if(n.value==i.attr("placeholder")&&i.hasClass("placeholder"))if(i.data("placeholder-password")){if(i=i.hide().next().show().attr("id",i.removeAttr("id").data("placeholder-id")),e===!0)return i[0].value=r;i.focus()}else n.value="",i.removeClass("placeholder"),n==t.activeElement&&n.select()}function i(){var e,t=this,i=a(t),l=this.id;if(""==t.value){if("password"==t.type){if(!i.data("placeholder-textinput")){try{e=i.clone().attr({type:"text"})}catch(o){e=a("<input>").attr(a.extend(r(this),{type:"text"}))}e.removeAttr("name").data({"placeholder-password":!0,"placeholder-id":l}).bind("focus.placeholder",n),i.data({"placeholder-textinput":e,"placeholder-id":l}).before(e)}i=i.removeAttr("id").hide().prev().attr("id",l).show()}i.addClass("placeholder"),i[0].value=i.attr("placeholder")}else i.removeClass("placeholder")}var l,o,s="placeholder"in t.createElement("input"),c="placeholder"in t.createElement("textarea"),u=a.fn,d=a.valHooks;s&&c?(o=u.placeholder=function(){return this},o.input=o.textarea=!0):(o=u.placeholder=function(){var e=this;return e.filter((s?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":n,"blur.placeholder":i}).data("placeholder-enabled",!0).trigger("blur.placeholder"),e},o.input=s,o.textarea=c,l={get:function(e){var t=a(e);return t.data("placeholder-enabled")&&t.hasClass("placeholder")?"":e.value},set:function(e,r){var l=a(e);return l.data("placeholder-enabled")?(""==r?(e.value=r,e!=t.activeElement&&i.call(e)):l.hasClass("placeholder")?n.call(e,!0,r)||(e.value=r):e.value=r,l):e.value=r}},s||(d.input=l),c||(d.textarea=l),a(function(){a(t).delegate("form","submit.placeholder",function(){var e=a(".placeholder",this).each(n);setTimeout(function(){e.each(i)},10)})}),a(e).bind("beforeunload.placeholder",function(){a(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery),/*!
 * jQuery Preload Plugin 1.0
 *
 * Copyright 2013 Bart Tegenbosch <bart@onedott.nl>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function(e){"use strict";var t={interval:500,notifyErrors:!1};e.preload=function(a,r){if(!a||0===a.length)throw new Error("No sources to preload");a&&!a.shift&&(a=[a.toString()]);var n=e.extend(t,r),i=[],l=[],o=e.Deferred();return e.each(a,function(e,t){var r=new Image;r.src=t.toString();var s=window.setInterval(function(){r.complete&&(o.notify(r,!1),l.push(r),window.clearInterval(s)),l.length+i.length==a.length&&o.resolve(l,i)},n.interval);r.onerror=function(){n.notifyErrors&&o.notify(r,!0),i.push(t),window.clearInterval(s)}}),o.promise()}}(jQuery);/*
 * SVGeezy.js 1.0
 *
 * Copyright 2012, Ben Howdle http://twostepmedia.co.uk
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sun Aug 26 20:38 2012 GMT
 */
var svgeezy=function(){return{init:function(e,t){this.avoid=e||!1,this.filetype=t||"png",this.svgSupport=this.supportsSvg(),this.svgSupport||(this.images=document.getElementsByTagName("img"),this.imgL=this.images.length,this.fallbacks())},fallbacks:function(){for(;this.imgL--;)if(!this.hasClass(this.images[this.imgL],this.avoid)||!this.avoid){var e=this.images[this.imgL].getAttribute("src");if(null===e)continue;if("svg"==this.getFileExt(e)){var t=e.replace(".svg","."+this.filetype);this.images[this.imgL].setAttribute("src",t)}}},getFileExt:function(e){var t=e.split(".").pop();return-1!==t.indexOf("?")&&(t=t.split("?")[0]),t},hasClass:function(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>-1},supportsSvg:function(){return document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")}}}();
;