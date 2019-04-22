(function() {
    var header = $('.main-header');
    var hiddenMenu = $('.main-nav__second-menu');
    var searchTrigger = $('.main-header__action--search');
    var search = $('.search');

    var cartPreviewTrigger = $('.main-header__action--cart');
    var cartPreview = $('.cart-preview');
    var cartPreviewClose = $('.cart-preview__close');

    var cartPreviewProductRemove = $('.cart-preview__product-remove');

    cartPreviewProductRemove.on('click', function() {
        var _this = $(this);
        var product = _this.parent();
        product.addClass('js-removed')

        setTimeout(function() {
            product.slideUp();
        }, 500)
    })

    cartPreviewTrigger.on('click', function() {
        cartPreview.toggleClass('js-active');
    });

    cartPreviewClose.on('click', function() {
        cartPreview.removeClass('js-active');
    })

    var searchReset = $('.search__reset');
    var searchClose = $('.search__close');
    var searchInput = $('.search__input');

    searchReset.on('click', function() {
        searchInput.val('');
    });

    searchClose.on('click', function() {
        search.removeClass('active');
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
        } else {
            header.removeClass('minimized');
            hiddenMenu.removeClass('shifted');
        }
    });
})();
