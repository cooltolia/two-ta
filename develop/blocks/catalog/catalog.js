(function() {
    var filter = $('.catalog__filter');

    if (filter.length > 0) {
        Stickyfill.add(filter);

        var filterOffset = filter.offset().top;
        var filterHeight = filter.outerHeight(true);
        debugger;
        var header = $('.main-header');
        var headerHeight = header.outerHeight();
        filter.css('top', headerHeight + 'px');

        $(document).on('scroll', function(e) {
            var scrollTop = $(this).scrollTop();

            var header = $('.main-header.minimized');
            var headerHeight = header.outerHeight();
            filter.css('top', headerHeight + 'px');
            // if (scrollTop >= filterOffset + 50) {
            //     filter.addClass('fixed');
            //     headerHeight = headerHeight || 0;
            //     filter.css('top', headerHeight + 'px');
            //     // products.css('paddingTop', filterHeight + 'px');
            // } else {
            //     filter.removeClass('fixed');
            //     // products.css('paddingTop', 0);
            // }
        });
    }
})();
