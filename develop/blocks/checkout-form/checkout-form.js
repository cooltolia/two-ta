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