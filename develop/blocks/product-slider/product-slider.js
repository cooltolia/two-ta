(function() {
    $slider = $('.product-slider__images');

    $slider.slick({
        speed: 500,
        arrows: false,
        dots: true,
        infinite: true,
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
        mobileFirst: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    customPaging: function(slider, i) {
                        var slide = i + 1;
                        return (
                            '<image class="product-slider__thumbnail" src="/images/product-slider/product' +
                            slide +
                            '.jpg"></image>'
                        );
                    }
                }
            }
        ]
    });
})();
