define(['jquery', 'utils'], function ($, utils) {
  $('.header__mobile-link').on('click', function () {
    $('.js-burger').removeClass(utils.vars.classActive);
    $('.js-header-mobile-nav').hide();
  });

  $('.js-burger').on('click', function () {
    $(this).toggleClass(utils.vars.classActive);
    $('.js-header-mobile-nav').toggle();
  });
});