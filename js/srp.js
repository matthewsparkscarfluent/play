$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var headerHeight = $('.srp__search').outerHeight();
    if (scroll >= headerHeight) {
        $('body').addClass('heading--scroll');
    } else {
        $('body').removeClass('heading--scroll');
    }
});