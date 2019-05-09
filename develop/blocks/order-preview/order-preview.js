(function() {
    var wrapper = $('.checkout__wrapper');
    var wrapperHeight = wrapper.outerHeight(true);
    var preview = $('.order-preview');
    var previewHeight = preview.outerHeight(true);
    if (wrapper.length === 0) return;

    var offset_t = wrapper.offset().top - $(window).scrollTop();
    console.log(offset_t);

    if (window.matchMedia('(min-width: 769px)').matches) {

        $(document).on('scroll', function() {
            var offset_t = wrapper.offset().top - $(window).scrollTop();
            if (offset_t < 50) {

                if (-offset_t > wrapperHeight - previewHeight - 100) {
                    return;
                }

                var translate = -offset_t + 100;
                preview.css('transform', 'translateY(' + translate + 'px)');
            } else {
                preview.css('transform', 'translateY(' + 0 + ')');
            }
        });
    }
})();
