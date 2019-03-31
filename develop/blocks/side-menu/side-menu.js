(function() {
    if (window.matchMedia('(max-width: 767px)').matches) {
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
