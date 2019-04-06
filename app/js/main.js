
$.noConflict();
jQuery(document).ready(function ($) {
    $("body").removeClass("pageload");

     

     
     ;(function() {

         var $trigger = $('.color-select__label');

         $trigger.on('click', function() {

             $(this).toggleClass('active');

         })

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

     

     
     

     
     

     
     

     
     (function() {

         var $topLinks = $('.main-nav__top-menu-link.has-subnav');

     

         // $topLinks.hover(

         //     function() {

         //         var $this = $(this);

         //         console.log($this);

         //         var $submenu = $this.next();

         //         $submenu.addClass('active');

         //     },

         //     function() {

         //         var $this = $(this);

         //         console.log($this);

         //         var $submenu = $this.next();

         //         $submenu.removeClass('active');

         //     }

         // );

     })();

     

     
     

     
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
