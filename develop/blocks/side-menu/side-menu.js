;
(function () {
    var first = $('.firstNav');
    var second = $('.secondNav');
    var third = $('.thirdNav');
    var actions = $('.actions');
    var back1 = $('.back1');
    var back2 = $('.back2');

    var height = first.outerHeight() + 30;
    actions.css('top', height + 'px');

    $('.side-menu .link1').on('click', function () {
        first.removeClass('active')
        second.addClass('active')
        var height = second.outerHeight() + 30;
        actions.css('top', height + 'px')
    })

    $('.side-menu .link2').on('click', function () {
        second.removeClass('active')
        third.addClass('active')
        var height = third.outerHeight() + 30;
        actions.css('top', height + 'px')
    })

    back1.on('click', function () {
        second.removeClass('active')
        first.addClass('active')
        var height = first.outerHeight() + 30;
        actions.css('top', height + 'px')
    })
    back2.on('click', function () {
        third.removeClass('active')
        second.addClass('active')
        var height = second.outerHeight() + 30;
        actions.css('top', height + 'px')
    })
})();