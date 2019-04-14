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
