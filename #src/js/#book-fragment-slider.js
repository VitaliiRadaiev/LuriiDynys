 $('.header-book-fragment__slider-top').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.header-book-fragment__slider-bottom'
});

 $('.header-book-fragment__prev').click(function() {
    $('.header-book-fragment__slider-top').slick('slickPrev');
 })
 $('.header-book-fragment__next').click(function() {
    $('.header-book-fragment__slider-top').slick('slickNext');
 })


$('.header-book-fragment__slider-bottom').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.header-book-fragment__slider-top',
  arrows: false,
});