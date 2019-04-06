define(['jquery', 'utils'], function ($, utils) {
  $('.js-about-visible').each(function (index, element) {
    setTimeout(function () {
      $(element).addClass(utils.vars.classVisible);
    }, 500*(index + 1))
  });
});