function mainFunction() {
    const menuSocial = $('.menu-social__header');
    const menuSocialLink = $('.menu-social__link');

    const openMenu = $('.menu__phone');
    const menu = $('.menu__wrap');
    const menuLink = $('.menu__link');    

    menuSocial.on('click', function() {
        $(this).toggleClass('active').next().toggleClass('active');
    });
    menuSocialLink.each(function() {
        $(this).on('click', function() {
            menuSocial.removeClass('active').next().removeClass('active');
        });
    });

    openMenu.on('click', function() {
        $(this).toggleClass('active');
        menu.toggleClass('open');
        $('body').toggleClass('overflow');
    });

    menuLink.each(function() {
        $(this).on('click', function() {
            if (menu.hasClass('open')) {
                openMenu.removeClass('active');
                menu.removeClass('open');
                $('body').toggleClass('overflow');
            };
        });
    });
};

$(window).on('load', function() {
    mainFunction();
       
    const loader = $('.loader');
    const body = $('body');

    loader.addClass('no-active');
    body.addClass('overflow');
});