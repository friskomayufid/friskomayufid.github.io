$(document).ready(function() {
    // Init Wow Js
    new WOW().init();
    // Navbar
    $('ul .btn-nav').click(function(e) {
        $("ul .btn-nav").removeClass("nav-active");
        $(this).addClass("nav-active");
        // Page Scroll
        let tujuan = $(this).attr('href');
        let elemenTujuan = $(tujuan);
        // console.log(elemenTujuan.offset().top);
        // console.log($('html , body').scrollTop());
        // $('html, body').scrollTop(elemenTujuan.offset().top);
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 1500, 'easeInOutExpo');

        e.preventDefault();
    });

    // Skills 
    $('.skillbar').skillBars({
        from: 0,
        speed: 4000,
        interval: 100,
        decimals: 0,
    });




    // Filter Box Portfolio
    $('.button').click(function() {
        let value = $(this).attr('data-filter');
        if (value == 'all') {
            $('.filter').show('1000');
        } else {
            $('.filter').not('.' + value).hide('1000');
            $('.filter').filter('.' + value).show('1000');
        }

        // Add active class
        $('ul .button').click(function() {
            $(this).addClass('active').siblings().removeClass('active');
        });
    });


});