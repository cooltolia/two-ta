(function() {
    var cartProductRemove = $('.cart-product__remove');
    var cartProductCounter = $('.cart-product__counter');
    var cartSumNode = $('.cart__result-sum .value');
    var cartSum = 0;

    if (cartProductRemove.length === 0) return;

    cartProductRemove.on('click', function() {
        var _this = $(this);
        var productWrapper = _this.parent().parent();
        productWrapper.addClass('js-removed');

        var price = parseInt(
            _this
                .parent()
                .find('.cart-product__price .value')
                .text()
        );
        var current = _this.parent().find('.current');
        var currentNumber = parseInt(current.text());

        cartSum -= price * currentNumber;
        cartSumNode.text(cartSum);

        setTimeout(function() {
            productWrapper.slideUp();
        }, 500);
    });

    cartProductCounter.each(function() {
        var _this = $(this);

        var plus = _this.find('.plus');
        var minus = _this.find('.minus');
        var current = _this.find('.current');
        var currentNumber = parseInt(current.text());

        var price = parseInt(
            _this
                .parent()
                .find('.cart-product__price .value')
                .text()
        );

        cartSum += price * currentNumber;
        cartSumNode.text(cartSum);

        plus.on('click', function() {
            if (currentNumber === 99) return;
            currentNumber++;

            cartSum += price;
            cartSumNode.text(cartSum);

            current.text(currentNumber);
        });

        minus.on('click', function() {
            if (currentNumber === 1) return;
            currentNumber--;

            cartSum -= price;
            cartSumNode.text(cartSum);

            current.text(currentNumber);
        });
    });
})();
