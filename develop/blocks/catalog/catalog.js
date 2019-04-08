(function() {
    var filter = $('.catalog__filter');
    var products = $('.products');

    if (filter.length > 0) {
        var filterOffset = filter.offset().top;
        var filterHeight = filter.outerHeight(true);

        $(document).on('scroll', function(e) {
            var scrollTop = $(this).scrollTop();

            if (scrollTop >= filterOffset) {
                filter.addClass('fixed');
                products.css('paddingTop', filterHeight + 'px');
            } else {
                filter.removeClass('fixed');
                products.css('paddingTop', 0);
            }
        });
    }
})();
