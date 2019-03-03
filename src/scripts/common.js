define(['jquery'], function( $ ) {
  $.fn.pageStatus = function() {
    var page = {
      pageState: '',// small (< 768) || medium (>= 768,  < 1024) || large (>= 1024)
      changeState: function(init) {
        var oldPageState = this.pageState;
        if (window.innerWidth < 768) this.pageState = 'sm';
        else if (window.innerWidth >= 768 && window.innerWidth < 1024) this.pageState = 'md';
        else if (window.innerWidth >= 1024) this.pageState = 'lg';
        window.STATE = this.pageState;
        if (init)
          return  $(document).trigger('changeState', [this.pageState, oldPageState]);
        return (oldPageState != this.pageState) ? $(document).trigger('changeState', [this.pageState, oldPageState]) : null;
      }
    };

    $(window).resize(function() {
      page.changeState(false);
    });

    page.changeState(true);
  };

  $('body').pageStatus();

  $('a[href*="#"]').on('click', function (event) {
    var anchor = this.getAttribute('href').split('#').pop();
    if (anchor.length) {
      var target = $('#' + anchor);
      event.preventDefault();
      var targetOffsetTop = target.offset().top - $('.js-header').outerHeight();
      $('html, body').animate({
        scrollTop: targetOffsetTop
      }, 800);
    }
  });
});