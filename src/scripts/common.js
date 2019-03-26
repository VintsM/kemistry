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

  function scrollToTarget (anchor) {
    let target = $(anchor);
    let targetOffsetTop = target.offset().top - $('.js-header').outerHeight();

    $('html, body').animate({
      scrollTop: targetOffsetTop
    }, 800);
  }

  $('a[href^="#"]').on('click', function (event) {
    let anchor = this.getAttribute('href');

    if (anchor.length) {
      event.preventDefault();
      history.pushState({}, '', anchor);
      scrollToTarget(anchor);
    }
  });

  let hash = location.hash;

  if (hash) {
    scrollToTarget(hash);
  }
});