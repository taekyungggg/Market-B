$(function () {
  let empty_like = $(".wish_Btn");
  empty_like.click(function () {
    $(this).toggleClass("on");
  });
  let putincart_btn = $(".cart_Btn");
  putincart_btn.click(function () {
    $(this).toggleClass("on");
  });

  //zoom slide
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

  //scroll fix event
  let target = $(".section02"),
    targetHeight = target.height(),
    targetOST = target.offset().top,
    stickyEl = target.find(".p_info"),
    // stickyElWidth = stickyEl.width(),
    // stickyElLeft = stickyEl.offset().left,
    rec_list = $(".rec"),
    recOST = rec.offset().top;

  $(window).scroll(() => {
    let sct = $(window).scrollTop();

    // 추천상품 섹션의 ost보다 스크롤 양이 많으면
    //200 : 추천상품의 margin top
    //347: stickyEl의 윗부분
    if (recOST > targetOST + targetHeight + 200) {
      stickyEl.css({
        position: "relative",
        top: targetOST + targetHeight - 347,
        width: "auto",
      });
    } else {
      // 추천상품 섹션의 ost보다 스크롤 양이 적으면
      // if (recOST < targetOST + targetHeight + 200) {
      stickyEl.css({
        position: "fixed",
      });
    }
  });

  // 추천상품
  let slide_start = $(",slider_wrapper");

  // $(".slider_wrapper").each(function ()
  // slide_start.on("click", function () {
  let sliderUl = $(this).find("ul"),
    slides = sliderUl.find("li"),
    currentIdx = 0,
    slideCount = slides.length,
    slideWidth = 300,
    slideMargin = 40,
    slideToShow = 3,
    prevBtn = $(this).find(".prev_btn"),
    nextBtn = $(this).find(".next_btn");

  // 슬라이드 배치
  sliderUl.width(slideWidth * slideCount + slideMargin * (slideCount - 1));

  // 슬라이드 이동함수
  function moveSlide(idx) {
    sliderUl.css("left", -idx * (slideWidth + slideMargin));
    currentIdx = idx;
  }

  // 버튼으로 이동하기
  nextBtn.on("click", function () {
    if (currentIdx === slideCount - slideToShow) {
      moveSlide(0);
    } else {
      moveSlide(currentIdx + 1);
    }
  });
  prevBtn.on("click", function () {
    if (currentIdx === 0) {
      moveSlide(slideCount - slideToShow);
    } else {
      moveSlide(currentIdx - 1);
    }
  });
});
