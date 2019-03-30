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