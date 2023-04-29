$(function () {
  // 자동 슬라이드
  $(".mainImg_wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
  });

  //슬라이드 좌우 버튼
  $(".controls .next").click(() => {
    $(".mainImg_wrapper").slick("slickNext");
  });
  $(".controls .prev").click(() => {
    $(".mainImg_wrapper").slick("slickPrev");
  });

  //검색창 버튼
  let gnb = $(".gnb_search"),
    S_btn = $(".icon_search > button");
  S_btn.click(function () {
    gnb.toggleClass("on");
  });

  //메뉴버튼
  let nav_btn = $(".menu_btn"),
    lnb_list = $(".category_list");
  nav_btn.click(function () {
    lnb_list.toggleClass("on");
  });
  lnb_list.on("mouseleave", function () {
    $(this).hide();
  });

  //카트담기, 좋아요 버튼
  let empty_heart = $(".cart_like_BtnWrapper >i"),
    heart_btn = $("cart_like_BtnWrapper > .like_Btn");

  heart_btn.click(function () {
    empty_heart.text("regular fa-heart");
  });

  // section01 슬라이드
  let slideWrapper = document.querySelector(".best container"),
    slideUl = slideWrapper.querySelector(".best_wrapper"),
    slides = slideUl.querySelectorAll("li"),
    currentIdx = 0,
    slideCount = slides.length,
    slideWidth = 300,
    slideMargin = 30,
    slideToShow = 3,
    prevBtn = document.querySelector(".s_prev"),
    nextBtn = document.querySelector(".s_next");

  //슬라이드 배치?????
  slideUl.style.width =
    slideWidth * slideCount + slideMargin * (slideCount - 1) + "px";

  //슬라이드 이동함수
  function moveSlide(idx) {
    slideUl.style.left = -idx * (slideWidth + slideMargin) + "px";
    currentIdx = idx;
  }

  //버튼으로 이동하기
  nextBtn.addEventListener("click", () => {
    if (currentIdx == slideCount - slideToShow) {
      moveSlide(0);
    } else {
      moveSlide(currentIdx + 1);
    }
  });
  prevBtn.addEventListener("click", () => {
    if (currentIdx == 0) {
      moveSlide(slideCount - slideToShow);
    } else {
      moveSlide(currentIdx - 1);
    }
  });
});
