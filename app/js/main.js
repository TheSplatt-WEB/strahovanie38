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
            $('.header-inner__list li').css({'left': '-10px', 'right': '-10px'});
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
        if (!$('.hint-link__descr-kasko').hasClass('openDone')) {
            $('.hint-link__descr-kasko').addClass('openDone');
            $('.hint-link__descr-kasko').css({'padding': '10px', 'overflow': 'visible', 'height': 'auto', 'font-size': '14px'});
        }
        else {
            $('.hint-link__descr-kasko').removeClass('openDone');
            $('.hint-link__descr-kasko').css({'padding': '0 10px', 'overflow': 'hidden', 'height': '0', 'font-size': '0'});
        }
    });
    $(document).on('click', function(e){
        if (!$('.hint-link__kasko').is(e.target) && $('.hint-link__kasko').has(e.target).length === 0 &&
        !$('.hint-link__descr-kasko').is(e.target) && $('.hint-link__descr-kasko').has(e.target).length === 0){
            $('.hint-link__descr-kasko').removeClass('openDone');
            $('.hint-link__descr-kasko').css({'padding': '0 10px', 'overflow': 'hidden', 'height': '0', 'font-size': '0'});
        }
    });
    $('.hint-link__life').on('click', function(){
        if (!$('.hint-link__descr-life').hasClass('openDone')) {
            $('.hint-link__descr-life').addClass('openDone');
            $('.hint-link__descr-life').css({'padding': '10px', 'overflow': 'visible', 'height': 'auto', 'font-size': '14px'});
        }
        else {
            $('.hint-link__descr-life').removeClass('openDone');
            $('.hint-link__descr-life').css({'padding': '0 10px', 'overflow': 'hidden', 'height': '0', 'font-size': '0'});
        }
    });
    $(document).on('click', function(e){
        if (!$('.hint-link__life').is(e.target) && $('.hint-link__life').has(e.target).length === 0 &&
        !$('.hint-link__descr-life').is(e.target) && $('.hint-link__descr-life').has(e.target).length === 0){
            $('.hint-link__descr-life').removeClass('openDone');
            $('.hint-link__descr-life').css({'padding': '0 10px', 'overflow': 'hidden', 'height': '0', 'font-size': '0'});
        }
    });
    //Кнопка добавления нового водителя---------------------------------------------------------------
    // $('.added-driver__btn').on('click', function() {
    //     $('.form-inner__driver').append('<div class="form-inner__item form-inner__item-driver"><p class="form-inner__name"><span>*</span>Водительское удостоверение</p><div class="form-inner__buttons"><div class="form-inner__btn"><label class="btn-form" for="driver-3">Лицевая</label><span class="name-doc">файл не выбран</span><input class="btn-doc" id="driver-3" type="file" multiple required></div><div class="form-inner__btn"><label class="btn-form" for="driver-4">Оборотная</label><span class="name-doc">файл не выбран</span><input class="btn-doc" id="driver-4" type="file" multiple required></div></div></div>')
    // });
});

