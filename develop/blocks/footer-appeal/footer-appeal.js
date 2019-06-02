(function() {
    /** future function for ajax form submit */
    var form = $('.footer-appeal__form');
    
    form.on('submit', function(e) {
        e.preventDefault();

        $('#appealSubmitted').modal('show');
        form.find('input').val('');
    });
})();