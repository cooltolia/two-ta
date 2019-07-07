(function() {
    var colorTrigger = $('.color-select__label');
    var colorDropDown = $('.color-select__drop-down');
    var catalogOverlay = $('.catalog__overlay');

    var colorItem = $('.color-select__item');

    var reset = $('.color-select__reset');

    var filter = $('.catalog__filter');

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

    catalogOverlay.on('click', function() {
        catalogOverlay.removeClass('active');
    });

    colorTrigger.on('click', function(e) {
        var width = $('body').outerWidth();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            colorDropDown.removeClass('active');
            catalogOverlay.removeClass('active');
            filter.removeClass('active');
        } else {
            $(this).addClass('active');
            colorDropDown.css('width', width + 'px');
            colorDropDown.addClass('active');
            catalogOverlay.addClass('active');
            filter.addClass('active');
        }

        $(document).click(function(e) {
            if (!$(e.target).is(colorTrigger) && colorTrigger.has(e.target).length === 0) {
                if (!$(e.target).is(colorDropDown) && colorDropDown.has(e.target).length === 0) {
                    colorTrigger.removeClass('active');
                    colorDropDown.removeClass('active');
                }
            } else {
                return;
            }
        });

        $(document).keyup(function(e) {
            if (e.keyCode === 27) {
                colorTrigger.removeClass('active');
                colorDropDown.removeClass('active');

                catalogOverlay.removeClass('active');
                filter.removeClass('active');
            }
        });
    });
})();
