(function() {
    var colorTrigger = $('.color-select__label');
    var colorDropDown = $('.color-select__drop-down');
    var catalogOverlay = $('.catalog__overlay');

    var colorItem = $('.color-select__item');

    var reset = $('.color-select__reset');

    var orderTrigger = $('.order-select__label');
    var orderDropDown = $('.order-select__drop-down');

    var orderItem = $('.order-select__item');

    colorItem.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).toggleClass('selected');
    });

    reset.on('click', function(e) {
        e.preventDefault();
        colorItem.each(function() {
            $(this).removeClass('selected');
        });
    });

    //TODO
    // I wish I knew how to rewrite this
    $(document).click(function(e) {
        e.stopPropagation();

        if (
            colorDropDown.has(e.target).length === 0 &&
            $(e.target)[0] !== colorTrigger[0] &&
            orderDropDown.has(e.target).length === 0 &&
            $(e.target)[0] !== orderTrigger[0]
        ) {
            colorTrigger.removeClass('active');
            colorDropDown.removeClass('active');

            orderTrigger.removeClass('active');
            orderDropDown.removeClass('active');

            catalogOverlay.removeClass('active');
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            colorTrigger.removeClass('active');
            colorDropDown.removeClass('active');

            catalogOverlay.removeClass('active');

            orderTrigger.removeClass('active');
            orderDropDown.removeClass('active');
        }
    });

    catalogOverlay.click(function() {
        $(this).removeClass('active');
    });

    colorTrigger.on('click', function(e) {
        var width = $('body').outerWidth();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            colorDropDown.removeClass('active');
            catalogOverlay.removeClass('active');
        } else {
            $(this).addClass('active');
            colorDropDown.css('width', width + 'px');
            colorDropDown.addClass('active');
            catalogOverlay.addClass('active');
        }
    });

    orderItem.on('click', function(e) {
        e.preventDefault();
        orderItem.removeClass('selected');
        $(this).addClass('selected');

        orderTrigger.removeClass('active');
        orderDropDown.removeClass('active');
        catalogOverlay.removeClass('active');
    });

    orderTrigger.on('click', function(e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            orderDropDown.removeClass('active');
            catalogOverlay.removeClass('active');
        } else {
            $(this).addClass('active');
            orderDropDown.addClass('active');
            catalogOverlay.addClass('active');
        }
    });
})();
