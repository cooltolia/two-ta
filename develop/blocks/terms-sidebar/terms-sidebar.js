(function() {
    var wrapper = $('.terms');
    if (wrapper.length === 0) return;

    var wrapperHeight = wrapper.outerHeight(true);
    var sidebar = $('.terms-sidebar');
    var sidebarHeight = sidebar.outerHeight(true);

    var offset_t = wrapper.offset().top - $(window).scrollTop();
    console.log(offset_t);

    if (window.matchMedia('(min-width: 769px)').matches) {
        $(document).on('scroll', function() {
            var offset_t = wrapper.offset().top - $(window).scrollTop();
            if (offset_t < 50) {
                if (-offset_t > wrapperHeight - sidebarHeight - 50) {
                    return;
                }

                var translate = -offset_t + 50;
                sidebar.css('transform', 'translateY(' + translate + 'px)');
            } else {
                sidebar.css('transform', 'translateY(' + 0 + ')');
            }
        });
    }
})();
