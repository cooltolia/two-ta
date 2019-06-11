(function() {
    $slider = $('.instagram-preview__list');

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
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 900,
                settings: 'unslick'
            }
        ]
    });
})();
