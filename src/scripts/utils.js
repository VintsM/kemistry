define(['jquery'], function($) {
    return {
        vars: {
        //     classActive: '_active',
        //     classDisabled: '_disabled',
        //     classError: '_error',
        //     classHidden: '_hidden',
        //     classVisible: '_visible',
        //     conf: {
        //         xlBreakpoint: 1280,
        //         lgBreakpoint: 1024,
        //         mobileBreakpoint: 768
        //     },
            state: {
                small: 'small',
                md: 'medium',
                lg: 'large'
            }
        },
        // isActive: function(element) {
        //     if ($(element).hasClass(this.vars.classActive)) {
        //         return false;
        //     }
        // },
        // switchActiveElement: function(element) {
        //     if (this.isActive(element)) {
        //         return;
        //     }
        //     $(element).addClass(this.vars.classActive);
        //     $(element).siblings().removeClass(this.vars.classActive);
        //
        //     return true;
        // },
        // isExist: function(element) {
        //     if (!$(element).length) {
        //         return;
        //     }
        // },
        isTopInViewport: function(element, gap = 100) {
            var elementTop = element.offset().top;
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementTop - viewportBottom <= gap;
        },
        // isTopOnViewportMiddle: function(element) {
        //     var elementTop = element.offset().top;
        //     var viewportTop = $(window).scrollTop();
        //     var viewportMiddle = viewportTop + $(window).height()/2;
        //     return elementTop - viewportMiddle <= 100;
        // },
        // windowSize: function() {
        //     var width = $(window).width();
        //     if (width < this.vars.conf.mobileBreakpoint) {
        //         return this.vars.state.mobile;
        //     } else if (width >= this.vars.conf.mobileBreakpoint && width < this.vars.conf.lgBreakpoint) {
        //         return this.vars.state.md;
        //     } else if (width >= this.vars.conf.lgBreakpoint && width < this.vars.conf.xlBreakpoint) {
        //         return this.vars.state.lg;
        //     } else if (width >= this.vars.conf.xlBreakpoint) {
        //         return this.vars.state.xl;
        //     }
        // },
        // ceil10: function (num) {
        //     let remainder = num % 10;
        //     if (remainder < 5) {
        //         return num - remainder;
        //     } else {
        //         return num - remainder + 10;
        //     }
        // }
    };
});
