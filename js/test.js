$(".slider-single").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  useTransform: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-single",
  dots: false,
  focusOnSelect: true,
});
