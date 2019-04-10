$.noConflict();
jQuery(document).ready(function($) {
    $('body').removeClass('pageload');

    

    
    (function() {

        var filter = $('.catalog__filter');

        var products = $('.products');

    

        if (filter.length > 0) {

            var filterOffset = filter.offset().top;

            var filterHeight = filter.outerHeight(true);

    

            $(document).on('scroll', function(e) {

                var scrollTop = $(this).scrollTop();

                var header = $('.main-header');

                var headerHeight = header.outerHeight();

                

                if (scrollTop >= filterOffset) {

                    filter.addClass('fixed');

                    filter.css('top', headerHeight + 'px');

                    products.css('paddingTop', filterHeight + 'px');

                } else {

                    filter.removeClass('fixed');

                    products.css('paddingTop', 0);

                }

            });

        }

    })();

    

    
    (function() {

        var colorTrigger = $('.color-select__label');

        var colorDropDown = $('.color-select__drop-down');

        var catalogOverlay = $('.catalog__overlay');

    

        var colorItem = $('.color-select__item');

    

        var reset = $('.color-select__reset');

    

        var orderTrigger = $('.order-select__label');

        var orderDropDown = $('.order-select__drop-down');

    

        var orderItem = $('.order-select__item');

    

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

    

        //TODO

        // I wish I knew how to rewrite this

        $(document).click(function(e) {

            e.stopPropagation();

    

            if (

                colorDropDown.has(e.target).length === 0 &&

                $(e.target)[0] !== colorTrigger[0] &&

                orderDropDown.has(e.target).length === 0 &&

                $(e.target)[0] !== orderTrigger[0]

            ) {

                colorTrigger.removeClass('active');

                colorDropDown.removeClass('active');

    

                orderTrigger.removeClass('active');

                orderDropDown.removeClass('active');

    

                catalogOverlay.removeClass('active');

            }

        });

    

        $(document).keyup(function(e) {

            if (e.keyCode === 27) {

                colorTrigger.removeClass('active');

                colorDropDown.removeClass('active');

    

                catalogOverlay.removeClass('active');

    

                orderTrigger.removeClass('active');

                orderDropDown.removeClass('active');

            }

        });

    

        catalogOverlay.click(function() {

            $(this).removeClass('active');

        });

    

        colorTrigger.on('click', function(e) {

            var width = $('body').outerWidth();

    

            if ($(this).hasClass('active')) {

                $(this).removeClass('active');

                colorDropDown.removeClass('active');

                catalogOverlay.removeClass('active');

            } else {

                $(this).addClass('active');

                colorDropDown.css('width', width + 'px');

                colorDropDown.addClass('active');

                catalogOverlay.addClass('active');

            }

        });

    

        orderItem.on('click', function(e) {

            e.preventDefault();

            orderItem.removeClass('selected');

            $(this).addClass('selected');

    

            orderTrigger.removeClass('active');

            orderDropDown.removeClass('active');

            catalogOverlay.removeClass('active');

        });

    

        orderTrigger.on('click', function(e) {

            if ($(this).hasClass('active')) {

                $(this).removeClass('active');

                orderDropDown.removeClass('active');

                catalogOverlay.removeClass('active');

            } else {

                $(this).addClass('active');

                orderDropDown.addClass('active');

                catalogOverlay.addClass('active');

            }

        });

    })();

    

    
    

    
    

    
    

    
    

    
    

    
    

    
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

                    breakpoint: 768,

                    settings: 'unslick'

                }

            ]

        });

    })();

    

    
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

    
    

    
    (function() {

        var header = $('.main-header');

        var hiddenMenu = $('.main-nav__second-menu');

        var searchTrigger = $('.main-header__action--search');

        var search = $('.search');

    

        searchTrigger.on('click', function() {

            if (search.hasClass('active')) {

                search.removeClass('active');

            } else {

                search.addClass('active');

            }

        });

    

        $(document).click(function(e) {

            if (search.has(e.target).length === 0 && $(e.target)[0] !== searchTrigger[0]) {

                search.removeClass('active');

            } else return;

        });

    

        $(document).on('scroll', function(e) {

            var scrollTop = $(this).scrollTop();

    

            if (scrollTop >= 200) {

                header.addClass('minimized');

                hiddenMenu.addClass('shifted');

                // var headerHeight = header.outerHeight();

                // hiddenMenu.css('top', headerHeight + 'px');

            } else {

                header.removeClass('minimized');

                hiddenMenu.removeClass('shifted');

                // var headerHeight = header.outerHeight();

                // hiddenMenu.css('top', headerHeight + 'px');

            }

        });

    })();

    

    
    

    
    ;(function() {

        

    })()

    
    

    
    ;

    (function () {

    

        // $(":input").inputmask();

    

        var $modals = $('.modal');

    

    

        /**

         * fix possible bug with padding-right;

         */

        $('.modal').on("hidden.bs.modal", function (e) {

            if ($('.modal:visible').length) {

                $('body').addClass('modal-open');

            } else {

                $('body').css('padding-right', '0px')

            }

        });

    

        $modals.each(function () {

            $(this).on("shown.bs.modal", function (event) {

    

                var xhr = new XMLHttpRequest();

    

                var currentModal = $(this);

                var currentForm = $(this).find('form');

                var formName = currentForm.attr('name');

    

                var firstInput = $(this).find('input')[0];

                if (firstInput) {

                    firstInput.focus()

                }

    

                var mobileInput = $(this).find('input[name="phone"]');

                var submit = $(this).find('button[name="submit"]');

                var isValid = Inputmask.isValid(mobileInput.val(), {

                    inputFormat: "+7 (999) 999 99 99"

                });

    

                if (isValid) {

                    submit.attr('disabled', false)

                }

    

                mobileInput.inputmask('+7 (999) 999 99 99', {

                    oncomplete: function () {

                        submit.attr('disabled', false)

                    },

                    onincomplete: function () {

                        submit.prop('disabled', true)

                    }

                });

    

                currentForm.on('submit', function (e) {

                    e.preventDefault();

    

                    xhr.onreadystatechange = function () {

                        if (xhr.readyState === 4) {

                            mobileInput.val('');

                            submit.removeClass("loading");

                            submit.prop('disabled', true);

    

                            if (xhr.status === 200) {

                                $('#success').modal();

                                currentForm.off()

                            } else {

                                currentForm.off()

                                alert("Возникла ошибка при отправке формы. Код ошибки: " + xhr.status + " " + xhr.statusText);

                            }

                        }

                    };

    

                    window.dataLayer = window.dataLayer || [];

                    window.dataLayer.push({

                        'event': 'feedbackFormSubmit',

                        'category': 'form-submit',

                        'action': 'submitForm',

                    });

    

                    currentModal.modal('hide');

                    var formData = new FormData(document.forms[formName]);

                    xhr.open("POST", "sendform.php", true);

                    xhr.send(formData);

                });

            });

    

        });

    

    })();

    
    (function() {

        

    })();

    

    
    

    
    

    
    (function() {

        var $title = $('.product-data__accordion-title');

        var $data = $('.product-data__accordion-data');

    

        if (window.matchMedia('(min-width: 1200px)').matches) {

            $title.addClass('active');

            $data.addClass('active');

        }

        $title.on('click', function() {

            $(this).addClass('active');

    

            var $nextData = $(this).next('.product-data__accordion-data');

    

            $title.not($(this)).each(function() {

                $(this).removeClass('active');

            });

    

            $data.not($nextData).each(function() {

                $(this).slideUp(250, function() {

                    $(this).removeClass('active');

                });

            });

    

            if ($nextData.hasClass('active')) {

                $(this).removeClass('active');

    

                $nextData.slideUp(250, function() {

                    $nextData.removeClass('active');

                });

    

                return;

            }

    

            $nextData.slideDown(250, function() {

                $nextData.addClass('active');

            });

        });

    })();

    

    
    (function() {

        $slider = $('.product-instagram__list');

    

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

                    settings: 'unslick'

                }

            ]

        });

    })();

    

    
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

    

    
    

    
    

    
    

    
    

    
    (function() {

        if (window.matchMedia('(max-width: 768px)').matches) {

            var $hamburger = $('.hamburger');

            var $nav = $('.main-header__side-menu');

            var $actions = $('.side-menu__actions');

            var $closeMenu = $('.side-menu__close');

    

            var $deepLinks = $('.side-menu .has-subnav');

            var $backLinks = $('.side-menu__back');

    

            var $currentMenu = $('.side-menu__top-menu');

            var height = $currentMenu.outerHeight() + 30;

            

            $actions.css('top', height + 'px');

    

            $hamburger.on('click', function() {

                $nav.addClass('active');

                $('body').addClass('menu-opened');

            });

    

            $closeMenu.on('click', function() {

                $nav.removeClass('active');

                $('body').removeClass('menu-opened');

            });

    

            $deepLinks.on('click', function(e) {

                e.preventDefault();

    

                var $this = $(this);

    

                var currentMenu = $this.parents('ul');

                var nextMenu = $this.next();

    

                var height = nextMenu.outerHeight() + 30;

                $actions.css('top', height + 'px');

    

                currentMenu.removeClass('active');

                nextMenu.addClass('active');

            });

    

            $backLinks.on('click', function(e) {

                e.preventDefault();

    

                var $this = $(this);

    

                var currentMenu = $this.parents('ul');

                var previousMenu = currentMenu.parents('ul');

    

                var height = $(previousMenu[0]).outerHeight() + 30;

                $actions.css('top', height + 'px');

    

                $(currentMenu[0]).removeClass('active');

                $(previousMenu[0]).addClass('active');

            });

        }

    })();

    

    
    

    
    

    
    

    
    (function() {

        var sidebar = $('.terms__sidebar');

        var content = $('.terms__content');

    

        if (window.matchMedia('(max-width: 768px)').matches) {

           if (sidebar.length > 0) {

               var h = sidebar.outerHeight();

               content.css('paddingTop', h + 'px');

           }

        }

        

    })();

    

    
    

    
    (function() {

        var slider = $('.top-screen__slider');

        slider.slick({

            slidesToShow: 1,

            slidesToScroll: 1,

            arrows: false,

            autoplay: true,

            autoplaySpeed: 5000,

            adaptiveHeight: true

        });

    })();

    

    var header = $('.main-header');
    var headerHeight = header.outerHeight();

    $('body').css('paddingTop', headerHeight + 'px');

    // (function () {
    /*    function logElementEvent(eventName, element) {
            console.log(new Date().getTime(), eventName, element.getAttribute('data-src'));
        }

        function logEvent(eventName, elementsLeft) {
            console.log(new Date().getTime(), eventName, elementsLeft + " images left");
        } */

    // function createImageFragment(srcUrl) {
    //     var imageFragment = document.createElement('img');
    //     imageFragment.setAttribute('src', srcUrl);
    //     return imageFragment;
    // }
    /* ll = new LazyLoad({
            threshold: 500,
            elements_selector: ".lazyload",
            callback_enter: function (element) {
                function callback_load(event) {
                    element.classList.add('loaded');
                    element.classList.remove('loading');
                    imageFragment.removeEventListener('load', callback_load);
                }
                var imageFragment = createImageFragment(element.getAttribute('data-src'));
                imageFragment.addEventListener('load', callback_load);
                element.classList.add('loading');              
            },
            callback_error: function (element) {
                // logElementEvent("ERROR", element);
                element.src = "https://placeholdit.imgix.net/~text?txtsize=21&txt=Fallback%20image&w=280&h=280";
            }
        }); */
    // }());
});
