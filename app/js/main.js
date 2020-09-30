$(function(){
        $('.slider-top-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow" style="background-image: url(../images/arrow-left.svg);"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" style="background-image: url(../images/arrow-right.svg);"></button>',
        autoplay: true,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
    });
    $('.header-link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });
});

