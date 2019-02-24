(function ($) {
  $(document).ready(function () {
    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 0) {
        $('.js-header').addClass('active');
      } else {
        $('.js-header').removeClass('active');
      }
    });

    $('.header__mobile-link').on('click', function () {
      $('.header__burger').removeClass('active');
      $('.header__mobile-nav').hide();
    });

    $('.header__burger').on('click', function () {
      $(this).toggleClass('active');
      $('.header__mobile-nav').toggle();
    });
  });
})(jQuery);