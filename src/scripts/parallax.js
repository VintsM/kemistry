define(['jquery', 'utils'], function ($, utils) {
    var $scrollParallaxLayer = $('[data-parallax-speed]'),
        $mouseParallaxLayer = $('[data-mouse-parallax-x]');

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

    function mouseParallax(e) {
        var xpos = e.clientX;
        var ypos = e.clientY;
        xpos = xpos * 2;
        ypos = ypos * 2;
        $mouseParallaxLayer.each(function () {
            var shiftX = $(this).data('mouse-parallax-x'),
                shiftY = $(this).data('mouse-parallax-y');
            $(this).css({
                transform: 'translate(' + (0 + (xpos / shiftX)) + 'px, ' + (0 + (ypos / shiftY)) + 'px)'
            });
        });
    }

    $(window).on('scroll', function() {
        if (window.STATE == utils.vars.state.md || window.STATE == utils.vars.state.lg) {
            parallaxScrolling();
        } else {
            $scrollParallaxLayer.attr('style', '');
        }
    });

    $(window).mousemove(function(e) {
        if (window.STATE == utils.vars.state.md || window.STATE == utils.vars.state.lg) {
            mouseParallax(e);
        } else {
            $mouseParallaxLayer.attr('style', '');
        }
    });
});
