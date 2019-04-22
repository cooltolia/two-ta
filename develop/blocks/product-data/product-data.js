(function() {
    var $title = $('.product-data__accordion-title');
    var $data = $('.product-data__accordion-data');

    if (window.matchMedia('(min-width: 1200px)').matches) {
        $title.addClass('active');
        $data.addClass('active');
    }
    $title.on('click', function() {
        $(this).addClass('active');

        var $nextData = $(this).next('.product-data__accordion-data');

        $title.not($(this)).each(function() {
            $(this).removeClass('active');
        });

        $data.not($nextData).each(function() {
            $(this).slideUp(250, function() {
                $(this).removeClass('active');
            });
        });

        if ($nextData.hasClass('active')) {
            $(this).removeClass('active');

            $nextData.slideUp(250, function() {
                $nextData.removeClass('active');
            });

            return;
        }

        $nextData.slideDown(250, function() {
            $nextData.addClass('active');
        });
    });

    var cartButton = $('.main-header__action--cart');
    var indicator = cartButton.find('.indicator');
    var addToCartButton = $('.product-data .js-add-to-cart');
    addToCartButton.on('click', function(e) {
        e.preventDefault();

        $('#addedToCart').modal('show');

        indicator.addClass('js-active');
    });
})();
