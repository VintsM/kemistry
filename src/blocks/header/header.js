define(['jquery', 'utils'], function ($, utils) {

    function headerActivityCheck () {
      if ($(window).scrollTop() > 0) {
        $('.js-header').addClass(utils.vars.classActive);
      } else {
        $('.js-header').removeClass(utils.vars.classActive);
      }
    }

    function headerNavActivityCheck () {
      $('.js-header-nav-item').each(function (index, el) {
        let target = $($(el).attr('href'));
        if (window.scrollY > (target.offset().top - 150)) {
          $(el).addClass(utils.vars.classActive).siblings().removeClass(utils.vars.classActive);
        }
      });
    }

    $(window).on('scroll', function() {
      headerActivityCheck();
      headerNavActivityCheck();
    });

    headerActivityCheck();
    headerNavActivityCheck();
});