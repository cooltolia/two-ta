(function() {
    var header = $('.main-header');
    var hiddenMenu = $('.main-nav__second-menu');
    var searchTrigger = $('.main-header__action--search');
    var search = $('.search');

    var searchReset = $('.search__reset');
    var searchInput = $('.search__input');

    searchReset.on('click', function() {
        searchInput.val('')
    });

    searchTrigger.on('click', function() {
        if (search.hasClass('active')) {
            search.removeClass('active');
        } else {
            search.addClass('active');
        }
    });

    $(document).click(function(e) {
        if (search.has(e.target).length === 0 && $(e.target)[0] !== searchTrigger[0]) {
            search.removeClass('active');
        } else return;
    });

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
