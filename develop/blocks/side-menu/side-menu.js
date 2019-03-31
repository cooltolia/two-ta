(function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
        var $hamburger = $('.hamburger');
        var $nav = $('.main-header__side-menu');
        var $closeMenu = $('.side-menu__close');

        $deepLinks = $('.side-menu .has-subnav');
        $backLinks = $('.side-menu__back');

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
            currentMenu.removeClass('active');
            nextMenu.addClass('active');
        });

        $backLinks.on('click', function(e) {
            e.preventDefault();

            var $this = $(this);

            var currentMenu = $this.parents('ul');
            var previousMenu = currentMenu.parents('ul');

            $(currentMenu[0]).removeClass('active');
            $(previousMenu[0]).addClass('active');
        });
    }
})();
