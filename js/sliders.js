$(function() {

    /* Слайдер с новинками */
    $('.newitems').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    arrows: false
                }
            }
        ]
    });

    /* Слайдер с отзывами */
    $('.reviews').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
        centerMode: false,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /* Слайдеры карточки товара */
    $('.slider__main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        asNavFor: '.slider__additional'
    });

    $('.slider__additional').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        arrows: true,
        asNavFor: '.slider__main',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });

    $('.slider-reviews').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        adaptiveHeight: true
    });


    Fancybox.bind();

});