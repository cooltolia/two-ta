;(function() {
    var $trigger = $('.color-select__label');
    $trigger.on('click', function() {
        $(this).toggleClass('active');
    })
})();