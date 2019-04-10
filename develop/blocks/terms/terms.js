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
