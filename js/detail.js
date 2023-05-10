$(function () {
  let empty_like = $(".wish_Btn");
  empty_like.click(function () {
    $(this).toggleClass("on");
  });
  let putincart_btn = $(".cart_Btn");
  putincart_btn.click(function () {
    putincart_btn.toggleClass("on");
  });

  // 슬라이드
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    useTransform: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-single",
    dots: true,
    focusOnSelect: true,
  });

  //scroll fix event
  const aside = $(".p_info"),
    rec_list = $(".rec");
  // footer = $("footer"),
  // footerHeight = footer.outerHeight();

  function fixAside() {
    const scrollPosition = $(window).scrollTop(),
      recPosition = rec_list.offset().top,
      stopPosition = recPosition + 160,
      fix_price = $(".section02");

    if (scrollPosition >= stopPosition) {
      //fix로 멈춰잇게
      fix_price.css({
        top: scrollPosition + "px",
      });
      // aside.css({
      //   position: "absolute",
      // });
    } else {
      fix_price.css({});
    }
  }

  $(window).scroll(fixAside);
});
