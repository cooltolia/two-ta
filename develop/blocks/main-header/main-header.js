(function() {
    var header = $('.main-header');
    var hiddenMenu = $('.main-nav__second-menu');

    $(document).on('scroll', function(e) {
        var scrollTop = $(this).scrollTop();

        if (scrollTop >= 100) {
            header.addClass('minimized');
            var headerHeight = header.outerHeight();
            hiddenMenu.css('top', headerHeight + 'px');
        } else {
            header.removeClass('minimized');
            var headerHeight = header.outerHeight();
            hiddenMenu.css('top', headerHeight + 'px');
        }
    });
})();
