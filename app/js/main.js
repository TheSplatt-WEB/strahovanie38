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
            $('.form-inner__item-driver, .added-driver__btn').fadeOut(300).show();
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
    $('.added-driver__btn').on('click', function() {
        $('.form-inner__driver').append('<div class="form-inner__item form-inner__item-driver"><p class="form-inner__name"><span>*</span>Водительское удостоверение</p><div class="form-inner__buttons"><div class="form-inner__btn"><label class="btn-form" for="driver-1">Лицевая</label><span class="name-doc">файл не выбран</span><input class="btn-doc" id="driver-1" type="file" multiple required></div><div class="form-inner__btn"><label class="btn-form" for="driver-2">Оборотная</label><span class="name-doc">файл не выбран</span><input class="btn-doc" id="driver-2" type="file" multiple required></div></div></div>')
    });
});

