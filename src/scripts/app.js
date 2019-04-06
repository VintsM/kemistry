define(function(require) {
    let $ = require('jquery');

    $(document).ready(function () {
        require('common');
        require('parallax');
        require('header');
        require('burger');
        require('about');
        require('projects');
    });
});


