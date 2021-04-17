$(document).ready(function() {
    // анимация бургера +  анимация всплывающего меню
    $('.burger').click(function(event) {
        this.classList.toggle('burger-active');
        $('.btn_slide').slideToggle(500);
    });
    // цвет ссылки в карточке при наведении на фото
    $('.card__body img').hover(function() {
        $(this).parents('.card__wrap_back').find('.card__footer_link span').css({
            'color': '#ADA090',
        });
    }, function() {
        $(this).parents('.card__wrap_back').find('.card__footer_link span').css({
            'color': '#1E1A1B',
        });
    });
    // цвет ссылки в карточке при наведении на фото
    $('.show__card_img').hover(function() {
        $(this).parents('.show__card').find('.card__show_link span').css({
            'color': '#ADA090',
        });
    }, function() {
        $(this).parents('.show__card').find('.card__show_link span').css({
            'color': '#fff',
        });
    });

    // цвет ссылки при наведении на блок
    $('.show__interior_link').hover(function() {
        $(this).parent().find('.show__interior-wrap').children().css('color', '#ADA090');
        $(this).parent().find('.show__interior_h1_line').css('background', '#ADA090');
    }, function() {
        $(this).parent().find('.show__interior-wrap').children().css('color', '#fff');
        $(this).parent().find('.show__interior_h1_line').css('background', '#fff');
    });
    //popup при наведении на фото
    $('.show_point img').hover(function() {
        console.log($(this).next());
        $(this).next().css('opacity', 1);
    }, function() {
        $(this).next().css('opacity', 0);
    });
    // некоторые размеры элементов


    ///////////////POPUP////////////////////
    function closePopup(elem) {
        elem.animate({ 'opacity': 0, 'top': '-1080px' }, 500);
        setTimeout(() => { elem.css('display', 'none') }, 700);
    }

    function openPopup(elem) {
        elem.css('display', 'block');
        elem.animate({ 'opacity': 1, 'top': 0 }, 500);
    }

    function scrollPopup(elem) {
        $(window).scroll(function() {
            elem.css({ 'top': $(window).scrollTop() });
        });
    }
    let modalMenu = $('#popup-menu'),
        modalCatalog = $('#popup-catalog'),
        modalSearch = $('#popup-search'),
        modalMap = $('#popup-map'),
        modalCall = $('#popup-call');
    //вызов модального окна
    $('.menu-btn').on('click', function(event) {
        openPopup(modalMenu);
        // scrollPopup(modalMenu);
    });
    $('.nav__items_2').on('click', function(event) {
        openPopup(modalCatalog);
        // scrollPopup(modalCatalog);
    });
    $('.icon__items_search').on('click', function(event) {
        openPopup(modalSearch);
        // scrollPopup(modalSearch);
    });
    $('.call-pop').on('click', function(event) {
        openPopup(modalCall);
        // scrollPopup(modalCall);
    });
    $('.nav__items_1').on('click', function(event) {
        openPopup(modalMap);
        // scrollPopup(modalMap);
    });
    //закрытие мод окна
    $('.close').click(function(event) {
        let id = $(this).parents('section');
        closePopup(id);

    });
    $('.close__text').click(function(event) {
        let id = $(this).parents('section');
        closePopup(id);
    });
    $('.popup').click(function(e) {
        if ($(this).attr('id') == "popup-map") return;
        if (e.target != $('.popup-menu_a') && e.target != $('.popup__menu_img') && e.target != $('.popup-catalog_a') && e.target != $('.call__content')) {
            closePopup($(this));
        }
    });




    // mask
    $('[type=tel]').on('focus', () => {
        $('[type=tel]').mask('+7(000) 000-00-00', {
            placeholder: "+7 (___) __-__-___"
        });
    });
    $('[type=tel]').on('blur', () => {
        $('[type=tel]').mask('+7(000) 000-00-00', {
            placeholder: "+7 (900) 123-45-67"
        });
    });

    let submit = document.getElementById('call'),
        tel = document.getElementById('tel');
    submit.onsubmit = () => {
        if (tel.textLength < 17) {
            return false;
        }
        return true;
    }
    // scroll popup
    new SimpleBar($('.map__content_ul2-wrap')[0], {
        autoHide: false,
    });
    new SimpleBar($('.map__content_ul1-wrap')[0], {
        autoHide: false,
    });



    /*Слайдер Новости*/
    let slideCount = $('.sl__news').children().length,
        slideNow = 1,
        translateWidth = 0;
    $('.news-next').click(nextSlide_news);
    $('.news-prev').click(prevSlide_news);


    function nextSlide_news() {
        let width = ($('.sl__news_wrap').innerWidth());
        if (slideNow == slideCount || slideNow > slideCount) {
            return;
        } else {
            $('.news-prev').css({
                'background': 'url(../img/ar_sl_next.svg) 50% 50% no-repeat ,#ADA090',
                'transform': 'rotate(180deg)',
            });
            if (slideNow == slideCount - 1) {
                $('.news-prev').css({
                    'background': 'url(../img/ar_sl_next.svg) 50% 50% no-repeat ,#ADA090',
                    'transform': 'rotate(180deg)',
                });
                $('.news-next').css({
                    'background': 'url(../img/ar_sl_prev.svg) 50% 50% no-repeat ,transparent',
                    'transform': 'rotate(180deg)',
                });
            }
            translateWidth += -width;
            $('.sl__news').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow++;
        }
    }

    function prevSlide_news() {
        let width = ($('.sl__news_wrap').innerWidth());
        if (slideNow == 1) {
            return;
        } else {
            if (slideNow == 2) {
                $('.news-prev').css({
                    'background': 'url(../img/ar_sl_prev.svg) 50% 50% no-repeat ,transparent',
                    'transform': 'rotate(0deg)',
                });
                $('.news-next').css({
                    'background': 'url(../img/ar_sl_next.svg) 50% 50% no-repeat ,#ADA090',
                    'transform': 'rotate(0deg)',
                });
            }
            translateWidth += width;
            $('.sl__news').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow--;
        }
    }


    let slideCount_show = $('.sl__show').children().length,
        slideNow_show = 1,
        translateWidth_show = 0;
    $('.show-next').click(nextSlide_show);
    $('.show-prev').click(prevSlide_show);

    function nextSlide_show() {
        let width = ($('.sl-show-wrap').innerWidth());
        if (slideNow_show == slideCount_show || slideNow_show > slideCount_show) {
            return;
        } else {
            $('.show-prev').css({
                'background': 'url(../img/ar_sl_next.svg) 50% 50% no-repeat ,#ADA090',
                'transform': 'rotate(180deg)',
            });
            if (slideNow_show == slideCount_show - 1) {
                $('.show-prev').css({
                    'background': 'url(../img/ar_sl_next.svg) 50% 50% no-repeat ,#ADA090',
                    'transform': 'rotate(180deg)',
                });
                $('.show-next').css({
                    'background': 'url(../img/ar_sl_prev.svg) 50% 50% no-repeat ,transparent',
                    'transform': 'rotate(180deg)',
                });
            }
            translateWidth_show += -width;
            $('.sl__show').css({
                'transform': 'translate(' + translateWidth_show + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth_show + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth_show + 'px, 0)',
            });
            slideNow_show++;
        }
    }

    function prevSlide_show() {
        let width = ($('.sl-show-wrap').innerWidth());
        if (slideNow_show == 1) {
            return;
        } else {
            if (slideNow_show == 2) {
                $('.show-prev').css({
                    'background': 'url(../img/ar_sl_prev.svg) 50% 50% no-repeat ,transparent',
                    'transform': 'rotate(0deg)',
                });
                $('.show-next').css({
                    'background': 'url(../img/ar_sl_next.svg) 50% 50% no-repeat ,#ADA090',
                    'transform': 'rotate(0deg)',
                });
            }
            translateWidth_show += width;
            $('.sl__show').css({
                'transform': 'translate(' + translateWidth_show + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth_show + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth_show + 'px, 0)',
            });
            slideNow_show--;
        }
    }
    //  ПОДКЛЮЧЕНИЕ НАСТРОЕК slick-slider
    $('.sl-head').slick({
        autoplay: false, // автоматическая прокрутка
        autoplaySpeed: 2000, //время смены слайдов
        speed: 1000, //скорость анимации
        cssEase: 'ease-in', //тип анимации
        dots: true, // точки навигации
        arrows: true, // убирает стрелки переключения , по умолчанию true
        asNavFor: '.menu-sl__wrap',
        appendArrows: $('.head__text_big'),
        // appendDots: $('.head__text'),
        initialSlaid: 0, //указывает с какого слайда начинать
    });

    $('.menu-sl__wrap').slick({
        autoplay: false, // автоматическая прокрутка
        autoplaySpeed: 3500, //время смены слайдов
        speed: 2000, //скорость анимации
        cssEase: 'ease-in', //тип анимации
        dots: false, // точки навигации
        asNavFor: '.sl-head',
        arrows: false, // убирает стрелки переключения , по умолчанию true
        initialSlaid: 1, //указывает с какого слайда начинать
    });









});