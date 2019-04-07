;
(function () {
    var option = $('.layout-select__option');
    var products = $('.products__list')

    if (window.matchMedia("(min-width: 1200px)").matches) {
        var initialLayout = option.filter('.layout-select__option--six');
        initialLayout.addClass('active');
    } else if (window.matchMedia("(min-width: 768px)").matches) {
        var initialLayout = option.filter('.layout-select__option--three');
        initialLayout.addClass('active');
    } else {
        var initialLayout = option.filter('.layout-select__option--two');
        initialLayout.addClass('active');
    }

    option.on('click', function (e) {
        e.preventDefault();
        if ($(this).hasClass('active')) return;

        option.removeClass('active');
        $(this).addClass('active');

        var targetLayout = $(this).data('layout');

        products.removeClass(function (index, classNames) {
            var current_classes = classNames.split(" "),
                classes_to_remove = [];

            $.each(current_classes, function (index, class_name) {
                if (/layout.*/.test(class_name)) {
                    classes_to_remove.push(class_name);
                }
            });
            return classes_to_remove.join(" ");
        });

        products.addClass(targetLayout);
    })

})();