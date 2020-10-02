$(function(){
        $('.slider-top-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow" style="background-image: url(../images/arrow-left.svg);"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" style="background-image: url(../images/arrow-right.svg);"></button>',
        // autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                prevArrow: false,
                nextArrow: false,
              }
            },
          ]
    });
    $('.header-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });
    $('.header-inner__menu-btn, .header-link').on('click', function(){
        if (!$('.header-link').hasClass('openDone')) {
            $('.header-link').addClass('openDone');
            $('.header-inner__list li').css({'left': '-10px', 'right': '-10px'});
        }
        else {
            $('.header-link').removeClass('openDone');
            $('.header-inner__list li').css({'left': '-100vw', 'right': '100vw'});
        }
    });
    $(window).on('resize', function () {
        if ($(window).width() > 851) {
            $('.header-inner__list li').removeAttr('style');
        }
    });
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.btn-top').fadeIn();
        } else {
            $('.btn-top').fadeOut();
        }
    });
    $('.btn-top').on('click', function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
});

