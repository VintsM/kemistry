define(['slick'], function( slick ) {
    $('.js-projects-slider').slick({
        arrows: true,
        dots: true,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false
                }
            }
        ]
    })
});