$(function () {
    $('.slider-top-wrapper').slick({
        prevArrow: '<button type="button" class="slick-prev slick-arrow" style="background-image: url(../images/arrow-left.svg);"></button>',
        nextArrow: '<button type="button" class="slick-next slick-arrow" style="background-image: url(../images/arrow-right.svg);"></button>',
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        pauseOnFocus: false,
        pauseOnHover: false,
        dots: true,
        responsive: [{
            breakpoint: 1050,
            settings: {
                prevArrow: false,
                nextArrow: false,
            }
        }, ]
    });
    $('.header-link, .to-form__link').on('click', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 800);
    });
    $('.header-inner__menu-btn, .header-link').on('click', function () {
        if (!$('.header-link').hasClass('openDone')) {
            $('.header-link').addClass('openDone');
            $('.header-inner__list li').css({
                'left': '-15px',
                'right': '-15px'
            });
        } else {
            $('.header-link').removeClass('openDone');
            $('.header-inner__list li').css({
                'left': '-100vw',
                'right': '150vw'
            });
        }
    });
    $(document).on('click', function (e) {
        if (!$('.header-inner__menu-btn').is(e.target) && $('.header-inner__menu-btn').has(e.target).length === 0 &&
            !$('.header-inner__list li').is(e.target) && $('.header-inner__list li').has(e.target).length === 0) {
            $('.header-link').removeClass('openDone');
            $('.header-inner__list li').css({
                'left': '-100vw',
                'right': '150vw'
            });
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
    $('body').on('change', '.files__input', function () {
        let name_file = [];
        for (let i = 0; i < $(this).get(0).files.length; ++i) {
            name_file.push($(this).get(0).files[i].name);
        }
        $(this).next().next('span').text(name_file.join(", "));
    });
    $('body').on('change', 'input#formNodrivers', function () {
        if (!$('.files__item-nodrivers').hasClass('openDone')) {
            $('.files__item-nodrivers').addClass('openDone');
            $('.files__item-nodrivers').fadeOut(300).show();
            $('.files__item-nodrivers').removeAttr('style');
            $('.files__input-nodrivers').prop('required', false);
        } else {
            $('.files__item-nodrivers').removeClass('openDone');
            $('.files__item-nodrivers').fadeIn(300);
            $('.files__input-nodrivers').prop('required', true);
        }
    });
    $('body').on('change', 'input#formNoinspect', function () {
        if (!$('.files__item-noinspect').hasClass('openDone')) {
            $('.files__item-noinspect').addClass('openDone');
            $('.files__item-noinspect').fadeOut(300).show();
            $('.files__item-noinspect').removeAttr('style');
            $('.files__input-noinspect').prop('required', false);
        } else {
            $('.files__item-noinspect').removeClass('openDone');
            $('.files__item-noinspect').fadeIn(300);
            $('.files__input-noinspect').prop('required', true);
        }
    });
    $('body').on('click', '.remove__driver', function () {
        $(this).parent().parent().remove()
    });
    $('body').on('click', '.added__driver', function () {
        $('.drivers__inner').append('<div class="files__item files__item-nodrivers"><div class="files__name"><span>*</span>Водительское удостоверение<a class="remove__driver" href="javascript:;">(удалить)</a></div><div class="files__buttons"><div class="files__btn"><input class="files__input files__input-nodrivers" name="attach[]" type="file" accept=".jpg, .png, .gif, .jpeg, .pdf" required><div class="files__choose">Лицевая</div><span>файл не выбран</span></div><div class="files__btn"><input class="files__input files__input-nodrivers" name="attach[]" type="file" accept=".jpg, .png, .gif, .jpeg, .pdf" required><div class="files__choose">Оборотная</div><span>файл не выбран</span></div></div></div>')
    });
    $('body').on('click', '.added__man', function () {
        $('.drivers__inner').append('<div class="files__item files__item-nodrivers"><div class="files__name"><span>*</span>Паспорт страхуемого лица<a class="remove__driver" href="javascript:;">(удалить)</a></div><div class="files__buttons"><div class="files__btn"><input class="files__input files__input-nodrivers" name="attach[]" type="file" accept=".jpg, .png, .gif, .jpeg, .pdf" required><div class="files__choose">Главная</div><span>файл не выбран</span></div><div class="files__btn"><input class="files__input files__input-nodrivers" name="attach[]" type="file" accept=".jpg, .png, .gif, .jpeg, .pdf" required><div class="files__choose">Прописка</div><span>файл не выбран</span></div></div></div>')
    });
    $('.hint-link__kasko').on('click', function () {
        $('.hint-link__descr-kasko').fadeToggle();
    });
    $(document).on('click', function (e) {
        if (!$('.hint-link__kasko').is(e.target) && $('.hint-link__kasko').has(e.target).length === 0 &&
            !$('.hint-link__descr-kasko').is(e.target) && $('.hint-link__descr-kasko').has(e.target).length === 0) {
            $('.hint-link__descr-kasko').fadeOut();
        }
    });
    $('.hint-link__life').on('click', function () {
        $('.hint-link__descr-life').fadeToggle();
    });
    $(document).on('click', function (e) {
        if (!$('.hint-link__life').is(e.target) && $('.hint-link__life').has(e.target).length === 0 &&
            !$('.hint-link__descr-life').is(e.target) && $('.hint-link__descr-life').has(e.target).length === 0) {
            $('.hint-link__descr-life').fadeOut();
        }
    });
    $(".fancybox-form").on('submit', function () {
        let th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: th.serialize()
        }).done(function () {
            alert("Ваша заявка принята, спасибо.");
            setTimeout(function () {
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            let range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('input[type="tel"]').on('click', function () {
        $(this).setCursorPosition(3);
    });
    $("input[type=tel]").mask("+7 (999) 999-9999");
});

$(function () {
    document.getElementById('form').addEventListener('submit', function (evt) {

        let pr = document.querySelector('.progress-bar'),
            checkboxNoInspect = document.querySelector('.files__item-noinspect'),
            NoInspect = document.querySelectorAll('.files__input-noinspect'),
            checkboxNoDriver = document.querySelectorAll('.files__item-nodrivers'),
            noDriver = document.querySelectorAll('.files__input-nodrivers'),
            inputs = document.getElementById('form').querySelectorAll('.files__btn span');

        let http = new XMLHttpRequest(),
            f = this;
        let th = $(this);
        evt.preventDefault();

        http.upload.onloadstart = function () {
            pr.style.opacity = 1;
            pr.style.visibility = 'visible';
        };

        http.onreadystatechange = function () {
            if (http.readyState == 4 && http.status == 200) {
                alert(http.responseText);
                console.log(http.responseText);
                if (http.responseText.indexOf(f.name.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (name)
                    th.trigger("reset");
                    inputs.forEach(element => {
                        element.textContent = 'файл не выбран';
                    });
                    checkboxNoInspect.classList.remove('openDone');
                    checkboxNoInspect.style.display = '';
                    checkboxNoDriver.forEach(element => {
                        element.classList.remove('openDone');
                    });
                    checkboxNoDriver.forEach(element => {
                        element.style = '';
                    });
                    NoInspect.forEach(element => {
                        element.setAttribute('required', true);
                    });
                    noDriver.forEach(element => {
                        element.setAttribute('required', true);
                    });
                    pr.style.opacity = 0;
                    pr.style.visibility = 'hidden';
                }
            }
        };
        http.onerror = function () {
            alert('Ошибка, попробуйте еще раз');
        };

        http.open("POST", "contact.php", true);
        http.send(new FormData(f));

    }, false);
});