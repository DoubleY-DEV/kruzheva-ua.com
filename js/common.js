$(function() {

    /* Шапка, всплывающее подменю */
    if($(window).width() > 991) {

        console.log('pc');

        $('.navigation__item-sub').hover(function() {
            $(this).children('.subnavigation').stop(false, true).fadeIn(200);
        }, function() {
            $(this).children('.subnavigation').stop(false, true).fadeOut(200);
        });
    } else if($(window).width() > 767 && $(window).width() < 992) {

        console.log('device');

    } else {

        console.log('mob');

        $('.burger__link').on('click', function() {
            $('.mobmenu').fadeIn(200);
            return false;
        });

        $('.navigation__item-sub').on('click', function() {
            $(this).children('.subnavigation').slideToggle(200);
            return false;
        });
    }

    /* Развернуть текст */
    $('.more__link').on('click', function() {
        $('.page-text-more').hide();
        $('.page-text .description').css({
           'height': 'auto'
        });
    });

    /* Фильтр */
    $('.filter__toggle').on('click', function() {
        if($(this).hasClass('filter__toggle-active')) {
            $(this).removeClass('filter__toggle-active');
            $(this).parent().children('.filter__list').slideUp(200);
            $(this).parent().children('.diapason').slideUp(200);
        } else {
            $(this).addClass('filter__toggle-active');
            $(this).parent().children('.filter__list').slideDown(200);
            $(this).parent().children('.diapason').slideDown(200);
        }
    });

    /* Табы. Карточка товара */
    $('.tabs__link').on('click', function() {
        var id = $(this).data('id');
        $('.tabs__link').removeClass('tabs__link-active');
        $(this).addClass('tabs__link-active');
        $('.tabs__info').hide();
        $('.tabs__info[data-id="' + id + '"]').show();
    });

    /* FAQ */
    $('.faq__link').on('click', function() {
        if($(this).parent().hasClass('faq__item-open')) {
            $(this).children('.faq__chart').text('+');
            $(this).parent().removeClass('faq__item-open');
            $(this).parent().children('.faq__content').slideUp();
        } else {
            $(this).children('.faq__chart').text('-');
            $(this).parent().addClass('faq__item-open');
            $(this).parent().children('.faq__content').slideDown();
        }
        return false;
    });

});