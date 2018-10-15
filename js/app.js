'use strict';

$(function () {

    $('.navbar-item').on('click', function() {
        // this = event.currentTarget;
        $(".navbar-nav li").removeClass('active');
        $(this).addClass('active');
    });

});