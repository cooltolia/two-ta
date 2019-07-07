(function() {
    var orderTrigger = $('.order-select__label');
    var orderDropDown = $('.order-select__drop-down');
    var orderItem = $('.order-select__item');

    var filter = $('.catalog__filter');

    var catalogOverlay = $('.catalog__overlay');

    var colorTrigger = $('.color-select__label');
    filter.on('click', function(e) {
        if (
            !$(e.target).is(orderTrigger) &&
            orderDropDown.has(e.target).length === 0 &&
            (!$(e.target).is(colorTrigger) && colorTrigger.has(e.target).length === 0)
        ) {
            catalogOverlay.trigger('click');
        }
    });

    orderItem.on('click', function(e) {
        e.preventDefault();
        orderItem.removeClass('selected');
        $(this).addClass('selected');

        orderTrigger.removeClass('active');
        orderDropDown.removeClass('active');
        catalogOverlay.removeClass('active');
        filter.removeClass('active');
    });

    orderTrigger.on('click', function(e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            orderDropDown.removeClass('active');
            catalogOverlay.removeClass('active');
            filter.removeClass('active');
        } else {
            $(this).addClass('active');
            orderDropDown.addClass('active');
            catalogOverlay.addClass('active');
            filter.addClass('active');
        }

        $(document).click(function(e) {
            if (!$(e.target).is(orderTrigger) && orderTrigger.has(e.target).length === 0) {
                if (!$(e.target).is(orderDropDown) && orderDropDown.has(e.target).length === 0) {
                    orderTrigger.removeClass('active');
                    orderDropDown.removeClass('active');
                }
            } else {
                return;
            }
        });

        $(document).keyup(function(e) {
            if (e.keyCode === 27) {
                catalogOverlay.removeClass('active');

                orderTrigger.removeClass('active');
                orderDropDown.removeClass('active');
                filter.removeClass('active');
            }
        });
    });
})();
