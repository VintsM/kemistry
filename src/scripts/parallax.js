define(['jquery', 'utils'], function ($, utils) {
    var $scrollParallaxLayer = $('[data-parallax-speed]');

    function parallaxScrolling() {
        var $scroll = $(window).scrollTop();
        $scrollParallaxLayer.each(function () {
            var $startPoint = $(this).parents('[data-parallax-start]'),
                startPointTop = $startPoint.offset().top;
            if (utils.isTopInViewport($startPoint)) {
                var speed = $(this).data('parallax-speed');
                $(this).css({
                    transform: 'translateY(' + (0 - ($scroll - startPointTop) * speed) + 'px)'
                });
            } else {
                $(this).attr('style', '');
            }
        });
    }

    $(window).on('scroll', function() {
        if (window.STATE == utils.vars.state.lg) {
            parallaxScrolling();
        } else {
            $scrollParallaxLayer.attr('style', '');
        }
    });
});
