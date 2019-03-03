(function ($) {
  $(document).ready(function () {
    function headerActivityCheck () {
      if ($(window).scrollTop() > 0) {
        $('.js-header').addClass('active');
      } else {
        $('.js-header').removeClass('active');
      }
    }

    $(window).on('scroll', function() {
      headerActivityCheck();
    });

    headerActivityCheck();

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