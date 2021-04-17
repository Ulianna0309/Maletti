
$('.slider-win').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-controll',
  arrows: true,
  dots: false,
  infinite: true,
  focusOnSelect: true,
  fade: true,
  cssEase: 'linear',
  
});

$('.slider-controll').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  arrows: false,
  vertical: false,
  dots: false,
  infinite: true,
  asNavFor: '.slider-win',
  focusOnSelect: true,
  centerMode: false,
  variableWidth: true
});
$('.slider-prev').on('click', function() {
  $('.slider-win').slick('slickPrev');
});
$('.slider-next').on('click', function() {
  $('.slider-win').slick('slickNext');
});







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






