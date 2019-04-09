(function() {
    var header = $('.main-header');
    var hiddenMenu = $('.main-nav__second-menu');

    $(document).on('scroll', function(e) {
        var scrollTop = $(this).scrollTop();

        if (scrollTop >= 200) {
            header.addClass('minimized');
            hiddenMenu.addClass('shifted');
            // var headerHeight = header.outerHeight();
            // hiddenMenu.css('top', headerHeight + 'px');
        } else {
            header.removeClass('minimized');
            hiddenMenu.removeClass('shifted');
            // var headerHeight = header.outerHeight();
            // hiddenMenu.css('top', headerHeight + 'px');
        }
    });
})();
