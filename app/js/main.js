$(function(){
        $('.slider-top-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow" style="background-image: url(../images/arrow-left.svg);"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" style="background-image: url(../images/arrow-right.svg);"></button>',
        autoplay: true,
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
    $('.header-link, .to-form__link').on('click', function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 800);
    });
    $('.header-inner__menu-btn, .header-link').on('click', function(){
        if (!$('.header-link').hasClass('openDone')) {
            $('.header-link').addClass('openDone');
            $('.header-inner__list li').css({'left': '-15px', 'right': '-15px'});
        }
        else {
            $('.header-link').removeClass('openDone');
            $('.header-inner__list li').css({'left': '-100vw', 'right': '150vw'});
        }
    });
    $(document).on('click', function(e){
        if (!$('.header-inner__menu-btn').is(e.target) && $('.header-inner__menu-btn').has(e.target).length === 0 &&
        !$('.header-inner__list li').is(e.target) && $('.header-inner__list li').has(e.target).length === 0){
            $('.header-link').removeClass('openDone');
            $('.header-inner__list li').css({'left': '-100vw', 'right': '150vw'});
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
    $('.btn-doc').on('change', function () {
        var name_file = [];
        for (var i = 0; i < $(this).get(0).files.length; ++i) {
            name_file.push($(this).get(0).files[i].name);
        }
        $(this).prev('.name-doc').text(name_file.join(", "));
    });
    $("input#checkbox-unlimit").on('change', function () {
        if ($(this).attr("checked")) {
            $('.form-inner__item-driver').fadeIn();
            return;
        } else {
            $('.form-inner__item-driver').fadeOut(300).show();
        }
    });
    $("input#checkbox-noinspect").on('change', function () {
        if ($(this).attr("checked")) {
            $('.form-inner__item-inspect').fadeIn();
            return;
        } else {
            $('.form-inner__item-inspect').fadeOut(300).show();
        }
    });
    $('.hint-link__kasko').on('click', function(){
        $('.hint-link__descr-kasko').fadeToggle();
    });
    $(document).on('click', function(e){
        if (!$('.hint-link__kasko').is(e.target) && $('.hint-link__kasko').has(e.target).length === 0 &&
        !$('.hint-link__descr-kasko').is(e.target) && $('.hint-link__descr-kasko').has(e.target).length === 0){
            $('.hint-link__descr-kasko').fadeOut();
        }
    });
    $('.hint-link__life').on('click', function(){
        $('.hint-link__descr-life').fadeToggle();
    });
    $(document).on('click', function(e){
        if (!$('.hint-link__life').is(e.target) && $('.hint-link__life').has(e.target).length === 0 &&
        !$('.hint-link__descr-life').is(e.target) && $('.hint-link__descr-life').has(e.target).length === 0){
            $('.hint-link__descr-life').fadeOut();
        }
    });
});

