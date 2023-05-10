$(function () {
  // 자동 슬라이드
  let mainImg_wrap = $(".slide_start .mainImg_wrapper");
  mainImg_wrap.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
  });

  //슬라이드 좌우 버튼
  let pause = $(".controls .pause"),
    play = $(".controls .play");

  $(".controls .next").click(() => {
    mainImg_wrap.slick("slickNext");
  });
  $(".controls .prev").click(() => {
    mainImg_wrap.slick("slickPrev");
  });

  // 자동슬라이드 컨트롤러
  pause.click(() => {
    pause.hide();
    play.show();
    mainImg_wrap.slick("slickPause");
  });

  play.click(() => {
    play.hide();
    pause.show();
    mainImg_wrap.slick("slickPlay");
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
  nav_btn.click(function (e) {
    e.preventDefault();
    nav_btn.toggleClass("on");
    if (nav_btn.hasClass("on")) {
      lnb_list.show();
    } else {
      lnb_list.hide();
    }
  });

  lnb_list.on("mouseleave", function () {
    $(this).hide();
  });

  //카트담기, 좋아요 버튼
  let empty_like = $(".wish_Btn");
  empty_like.click(function () {
    $(this).toggleClass("on");
  });
  let putincart_btn = $(".cart_Btn");
  putincart_btn.click(function () {
    putincart_btn.toggleClass("on");
  });
});

//--------------------------------------- section01 슬라이드

let sliderWrapper = document.querySelectorAll(".slider_wrapper");

sliderWrapper.forEach(function (item) {
  let sliderUl = item.querySelector("ul"),
    slides = sliderUl.querySelectorAll("li"),
    currentIdx = 0,
    slideCount = slides.length,
    slideWidth = 450,
    slideMargin = 30,
    slideToShow = 4,
    prevBtn = item.querySelector(".prev_btn"),
    nextBtn = item.querySelector(".next_btn");

  //슬라이드 배치
  sliderUl.style.width =
    slideWidth * slideCount + slideMargin * (slideCount - 1) + "px";

  //슬라이드 이동함수
  function moveSlide(idx) {
    sliderUl.style.left = -idx * (slideWidth + slideMargin) + "px";
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

//-------------------------------------section02 매거진
document.querySelectorAll("li .circle").forEach((circle) => {
  let magaInner = circle.nextElementSibling;
  circle.addEventListener("mouseover", () => {
    magaInner.style.opacity = 1;
  });
  circle.addEventListener("mouseout", () => {
    magaInner.style.opacity = 0;
  });
  magaInner.addEventListener("mouseover", () => {
    magaInner.style.opacity = 1;
  });
  magaInner.addEventListener("mouseout", () => {
    magaInner.style.opacity = 0;
  });
});
// circle.addEventListener("mouseover",() => (magaTitle.style.color = "var(--Y)")
// );
// circle.addEventListener("mouseout", () => (magaTitle.style.color = ""));
