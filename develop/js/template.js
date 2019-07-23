$.noConflict();
jQuery(document).ready(function($) {
    $('body').removeClass('pageload');

    window.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function mainJsLogic() {
        //=require ../blocks/**/*.js
        debugger;

        setTimeout(function() {
            var header = $('.main-header');
            var headerHeight = header.outerHeight();

            $('body').css('paddingTop', headerHeight + 'px');
        }, 50);

        console.log('inited');
    }

    mainJsLogic();

    $(window).on('resize', mainJsLogic);

    // (function () {
    /*    function logElementEvent(eventName, element) {
            console.log(new Date().getTime(), eventName, element.getAttribute('data-src'));
        }

        function logEvent(eventName, elementsLeft) {
            console.log(new Date().getTime(), eventName, elementsLeft + " images left");
        } */

    // function createImageFragment(srcUrl) {
    //     var imageFragment = document.createElement('img');
    //     imageFragment.setAttribute('src', srcUrl);
    //     return imageFragment;
    // }
    /* ll = new LazyLoad({
            threshold: 500,
            elements_selector: ".lazyload",
            callback_enter: function (element) {
                function callback_load(event) {
                    element.classList.add('loaded');
                    element.classList.remove('loading');
                    imageFragment.removeEventListener('load', callback_load);
                }
                var imageFragment = createImageFragment(element.getAttribute('data-src'));
                imageFragment.addEventListener('load', callback_load);
                element.classList.add('loading');              
            },
            callback_error: function (element) {
                // logElementEvent("ERROR", element);
                element.src = "https://placeholdit.imgix.net/~text?txtsize=21&txt=Fallback%20image&w=280&h=280";
            }
        }); */
    // }());
});
