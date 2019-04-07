;
(function () {
    var trigger = $('.order-select__label');
    var dropDown = $('.order-select__drop-down');

    var item = $('.order-select__item');

    item.on('click', function (e) {
        e.preventDefault();
        item.removeClass('selected');
        $(this).addClass('selected')
    })

    $(document).on('click', function (e) {
        trigger.removeClass('active');
        dropDown.removeClass('active');
    });

    trigger.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).toggleClass('active');
        dropDown.toggleClass('active');
    })
})();