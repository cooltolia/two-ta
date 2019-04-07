;(function() {
    var trigger = $('.color-select__label');
    var dropDown = $('.color-select__drop-down');

    var item = $('.color-select__item');
    
    var reset = $('.color-select__reset');

    item.on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('selected')
    })

    reset.on('click', function (e) {
        e.preventDefault();
        item.each(function() {
            $(this).removeClass('selected')
        })
    })

    $(document).on('click', function(e) {
        trigger.removeClass('active');
        dropDown.removeClass('active');
    });

    trigger.on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();

        var width = $('body').outerWidth();

        $(this).toggleClass('active');
        dropDown.css('width', width + 'px');
        dropDown.toggleClass('active');
    })
})();