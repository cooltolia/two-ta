$.noConflict();
jQuery(document).ready(function($) {
    $('body').removeClass('pageload');

    window.debounce = function(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

    function mainJsLogic() {
        
                
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
        
                
                (function() {
            var filter = $('.catalog__filter');
        
            if (filter.length > 0) {
                Stickyfill.add(filter);
        
                var filterOffset = filter.offset().top;
                var filterHeight = filter.outerHeight(true);
                debugger;
                var header = $('.main-header');
                var headerHeight = header.outerHeight();
                filter.css('top', headerHeight + 'px');
        
                $(document).on('scroll', function(e) {
                    var scrollTop = $(this).scrollTop();
        
                    var header = $('.main-header.minimized');
                    var headerHeight = header.outerHeight();
                    filter.css('top', headerHeight + 'px');
                    // if (scrollTop >= filterOffset + 50) {
                    //     filter.addClass('fixed');
                    //     headerHeight = headerHeight || 0;
                    //     filter.css('top', headerHeight + 'px');
                    //     // products.css('paddingTop', filterHeight + 'px');
                    // } else {
                    //     filter.removeClass('fixed');
                    //     // products.css('paddingTop', 0);
                    // }
                });
            }
        })();
        
                (function() {
            var link = $('.checkout-form__input-info a');
            if (link.length === 0) return;
        
            link.on("click", function(e) {
                if ("#" !== $(this).attr("href")[0])
                    return !0;
                e.preventDefault();
                var target = $(this.hash);
                $("html, body").animate({
                    scrollTop: target.offset().top - 100
                }, 300)
            });
        })();
                
                
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
        
                
                
                
                (function() {
            /** future function for ajax form submit */
            var form = $('.footer-appeal__form');
            
            form.on('submit', function(e) {
                e.preventDefault();
        
                $('#appealSubmitted').modal('show');
                form.find('input').val('');
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
        
            var cartPreviewTrigger = $('.main-header__action--cart');
            var cartPreview = $('.cart-preview');
            var cartPreviewClose = $('.cart-preview__close');
        
            var cartPreviewProductRemove = $('.cart-preview__product-remove');
        
            cartPreviewProductRemove.on('click', function() {
                var _this = $(this);
                var product = _this.parent();
                product.addClass('js-removed')
        
                setTimeout(function() {
                    product.slideUp();
                }, 500)
            })
        
            cartPreviewTrigger.on('click', function() {
                cartPreview.toggleClass('js-active');
            });
        
            cartPreviewClose.on('click', function() {
                cartPreview.removeClass('js-active');
            })
        
            var searchReset = $('.search__reset');
            var searchClose = $('.search__close');
            var searchInput = $('.search__input');
        
            searchReset.on('click', function() {
                searchInput.val('');
            });
        
            searchClose.on('click', function() {
                search.removeClass('active');
            });
        
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
        
                if (scrollTop >= 100) {
                    header.addClass('minimized');
                    hiddenMenu.addClass('shifted');
                } else {
                    header.removeClass('minimized');
                    hiddenMenu.removeClass('shifted');
                }
            });
        })();
        
                
                
                
                (function() {
            /**
             * fix possible bug with padding-right;
             */
            $('.modal').on('hidden.bs.modal', function(e) {
                if ($('.modal:visible').length) {
                    $('body').addClass('modal-open');
                } else {
                    $('body').css('padding-right', '0px');
                }
            });
        
            var loginModal = $('#loginModal');
            var signupModal = $('#signupModal');
            var triggerLoginModal = signupModal.find('.change-modal');
            var triggerSignupModal = loginModal.find('.change-modal');
        
            triggerLoginModal.on('click', function() {
                signupModal.hide()
                loginModal.show();
            });
            triggerSignupModal.on('click', function() {
                loginModal.hide()
                signupModal.show();
            });
        })();
        
                (function() {
            var wrapper = $('.checkout__wrapper');
            var wrapperHeight = wrapper.outerHeight(true);
            var preview = $('.order-preview');
            var previewHeight = preview.outerHeight(true);
            if (wrapper.length === 0) return;
        
            var offset_t = wrapper.offset().top - $(window).scrollTop();
            console.log(offset_t);
        
            if (window.matchMedia('(min-width: 900px)').matches) {
        
                $(document).on('scroll', function() {
                    var offset_t = wrapper.offset().top - $(window).scrollTop();
                    if (offset_t < 50) {
        
                        if (-offset_t > wrapperHeight - previewHeight - 100) {
                            return;
                        }
        
                        var translate = -offset_t + 100;
                        preview.css('transform', 'translateY(' + translate + 'px)');
                    } else {
                        preview.css('transform', 'translateY(' + 0 + ')');
                    }
                });
            }
        })();
        
                (function() {
            var orderTrigger = $('.order-select__label');
            var orderDropDown = $('.order-select__drop-down');
            var orderItem = $('.order-select__item');
        
            var filter = $('.catalog__filter');
        
            var catalogOverlay = $('.catalog__overlay');
        
            var colorTrigger = $('.color-select__label');
            filter.on('click', function(e) {
                if (
                    !$(e.target).is(orderTrigger) &&
                    orderDropDown.has(e.target).length === 0 &&
                    (!$(e.target).is(colorTrigger) && colorTrigger.has(e.target).length === 0)
                ) {
                    catalogOverlay.trigger('click');
                }
            });
        
            orderItem.on('click', function(e) {
                e.preventDefault();
                orderItem.removeClass('selected');
                $(this).addClass('selected');
        
                orderTrigger.removeClass('active');
                orderDropDown.removeClass('active');
                catalogOverlay.removeClass('active');
                filter.removeClass('active');
            });
        
            orderTrigger.on('click', function(e) {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                    orderDropDown.removeClass('active');
                    catalogOverlay.removeClass('active');
                    filter.removeClass('active');
                } else {
                    $(this).addClass('active');
                    orderDropDown.addClass('active');
                    catalogOverlay.addClass('active');
                    filter.addClass('active');
                }
        
                $(document).click(function(e) {
                    if (!$(e.target).is(orderTrigger) && orderTrigger.has(e.target).length === 0) {
                        if (!$(e.target).is(orderDropDown) && orderDropDown.has(e.target).length === 0) {
                            orderTrigger.removeClass('active');
                            orderDropDown.removeClass('active');
                        }
                    } else {
                        return;
                    }
                });
        
                $(document).keyup(function(e) {
                    if (e.keyCode === 27) {
                        catalogOverlay.removeClass('active');
        
                        orderTrigger.removeClass('active');
                        orderDropDown.removeClass('active');
                        filter.removeClass('active');
                    }
                });
            });
        })();
        
                
                
                (function() {
            var $title = $('.product-data__accordion-title');
            var $data = $('.product-data__accordion-data');
        
            if (window.matchMedia('(min-width: 1200px)').matches) {
                $title.eq(0).addClass('active');
                $data.eq(0).addClass('active');
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
        
            var cartButton = $('.main-header__action--cart');
            var indicator = cartButton.find('.indicator');
            var addToCartButton = $('.product-data .js-add-to-cart');
            addToCartButton.on('click', function(e) {
                e.preventDefault();
        
                $('#addedToCart').modal('show');
        
                indicator.addClass('js-active');
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
                        breakpoint: 900,
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
            if (window.matchMedia('(max-width: 900px)').matches) {
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
            var wrapper = $('.terms');
            if (wrapper.length === 0) return;
        
            var wrapperHeight = wrapper.outerHeight(true);
            var sidebar = $('.terms-sidebar');
            var sidebarHeight = sidebar.outerHeight(true);
        
            var offset_t = wrapper.offset().top - $(window).scrollTop();
            console.log(offset_t);
        
            if (window.matchMedia('(min-width: 900px)').matches) {
                $(document).on('scroll', function() {
                    var offset_t = wrapper.offset().top - $(window).scrollTop();
                    if (offset_t < 50) {
                        if (-offset_t > wrapperHeight - sidebarHeight - 50) {
                            return;
                        }
        
                        var translate = -offset_t + 50;
                        sidebar.css('transform', 'translateY(' + translate + 'px)');
                    } else {
                        sidebar.css('transform', 'translateY(' + 0 + ')');
                    }
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
        
        debugger;

        setTimeout(function() {
            var header = $('.main-header');
            var headerHeight = header.outerHeight();

            $('body').css('paddingTop', headerHeight + 'px');
        }, 50);

        console.log('inited');
    }

    mainJsLogic();

    $(window).on('resize', mainJsLogic);

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
