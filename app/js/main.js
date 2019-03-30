
$.noConflict();
jQuery(document).ready(function ($) {
    $("body").removeClass("pageload");

     ;(function () {

     

         if (window.matchMedia("(max-width: 767px)").matches) {

             var $hamburger = $(".hamburger");

             var $nav = $('.main-header__navigation');

             var $links = $('.main-nav a:not(".hasSubnav")');

             

             $hamburger.click(function () {

                 $(this).toggleClass('active');

                 $nav.toggleClass('active')

                 $('body').toggleClass('menu-opened')

             });

     

             $links.on('click', function () {

                 $hamburger.removeClass('active');

                 $nav.removeClass('active');

                 $('body').removeClass('menu-opened');

             })

         }

     

     

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
