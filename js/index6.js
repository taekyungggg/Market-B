$(document).ready(function () {
  //메뉴버튼
  let nav_btn = $(".menu_btn"),
    lnb_list = $(".category_list"),
    cate01 = $(".catebox_1"),
    cate02 = $(".catebox_2");

  nav_btn.mouseenter(function (e) {
    e.preventDefault();
    lnb_list.addClass("on");
    if (lnb_list.hasClass("on")) {
      cate01.addClass("on");
      if (cate01.hasClass("on")) {
        cate02.addClass("on");
      } else {
        lnb_list.removeClass("on");
      }
    }
  });
  lnb_list.on("mouseleave", function () {
    $(this).hide();
  });

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

  //카트담기, 좋아요 버튼
  let empty_like = $(".wish_Btn");
  empty_like.click(function () {
    $(this).toggleClass("on");
  });
  let putincart_btn = $(".cart_Btn");
  putincart_btn.click(function () {
    $(this).toggleClass("on");
  });

  //--------------------------------------- section01 슬라이드
  $(".slider_wrapper").each(function () {
    let sliderUl = $(this).find("ul"),
      slides = sliderUl.find("li"),
      currentIdx = 0,
      slideCount = slides.length,
      slideWidth = 450,
      slideMargin = 30,
      slideToShow = 4,
      prevBtn = $(this).find(".prev_btn"),
      nextBtn = $(this).find(".next_btn");

    // Set slide width
    sliderUl.width(slideWidth * slideCount + slideMargin * (slideCount - 1));

    // Move slide function
    function moveSlide(idx) {
      sliderUl.css("left", -idx * (slideWidth + slideMargin));
      currentIdx = idx;
    }

    // Button click event
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

  // section02 magazine
  $("li .circle").each(function () {
    let magaInner = $(this).next();
    $(this).on("mouseover", function () {
      magaInner.css("opacity", 1);
    });
    $(this).on("mouseout", function () {
      magaInner.css("opacity", 0);
    });
    magaInner.on("mouseover", function () {
      magaInner.css("opacity", 1);
    });
    magaInner.on("mouseout", function () {
      magaInner.css("opacity", 0);
    });
  });

  //section05 coupon
  let section5 = $(".section05"),
    coupon_silver = $(".cp_before"),
    figSketch = section5.find(".notice"),
    screenWidth = $(window).innerWidth(),
    figSketchWidth = coupon_silver.innerWidth(),
    figSketchHeight = coupon_silver.innerHeight(),
    figSketchPos = figSketch.offset(),
    sketchSwitch = true;

  function event_Sketch() {
    if (screenWidth <= 800) {
      figSketch.find(".section05.grid").html(`<div class="scratch"></div>`);
      sketchSwitch = true;
    } else if (sketchSwitch) {
      sketchSwitch = false;
      let random_img = Math.floor(Math.random() * 3) + 1;
      let sketchDiv = `<div class="scratch"></div>`.repeat(32);
      figSketch.find(".grid").html(sketchDiv);
      figSketch
        .find(".scratch")
        .css("background-image", `url("../img/main/coupon${random_img}.png")`);
    }

    let scratch = figSketch.find(".scratch");
    scratch.each(function (idx, item) {
      scratch.eq(idx).css({
        "background-size": `${figSketchWidth}px ${figSketchHeight}px`,
        "background-position-x": `-${
          scratch.eq(idx).offset().left - figSketchPos.left
        }px`,
        "background-position-y": `-${
          scratch.eq(idx).offset().top - figSketchPos.top
        }px`,
      });
    });
    scratch.mouseover(function () {
      $(this).addClass("drawing");
      checkOpacity();
    });

    //미디어쿼리
    // function event_Sketch_mobileOnly() {
    //   windowScroll > figSketchPos.top - screenHeight / 2
    //     ? figSketch.find(".grid").addClass("mobileSketch")
    //     : figSketch.find(".grid").removeClass("mobileSketch");
    // }
  }
  event_Sketch();

  // a태그 넣어주기
  function checkOpacity() {
    let drawingbox = figSketch.find(".grid .drawing");
    let allscratch = figSketch.find(".scratch");
    let aTag = $(
      '<a href="https://marketb.kr/board/gallery/read2.html?no=1526286&board_no=2"></a>'
    );
    if (drawingbox.length === allscratch.length) {
      if (!$(".notice .grid").hasClass("done")) {
        $(".notice .grid").addClass("done");
        $(".notice .grid").append(aTag);
      }
    }
  }
});

// let sliderWrapper = document.querySelectorAll(".slider_wrapper");

// sliderWrapper.forEach(function (item) {
//   let sliderUl = item.querySelector("ul"),
//     slides = sliderUl.querySelectorAll("li"),
//     currentIdx = 0,
//     slideCount = slides.length,
//     slideWidth = 450,
//     slideMargin = 30,
//     slideToShow = 4,
//     prevBtn = item.querySelector(".prev_btn"),
//     nextBtn = item.querySelector(".next_btn");

//   //슬라이드 배치
//   sliderUl.style.width =
//     slideWidth * slideCount + slideMargin * (slideCount - 1) + "px";

//   //슬라이드 이동함수
//   function moveSlide(idx) {
//     sliderUl.style.left = -idx * (slideWidth + slideMargin) + "px";
//     currentIdx = idx;
//   }

//   //버튼으로 이동하기
//   nextBtn.addEventListener("click", () => {
//     if (currentIdx == slideCount - slideToShow) {
//       moveSlide(0);
//     } else {
//       moveSlide(currentIdx + 1);
//     }
//   });
//   prevBtn.addEventListener("click", () => {
//     if (currentIdx == 0) {
//       moveSlide(slideCount - slideToShow);
//     } else {
//       moveSlide(currentIdx - 1);
//     }
//   });
// });

//-------------------------------------section02 매거진
// document.querySelectorAll("li .circle").forEach((circle) => {
//   let magaInner = circle.nextElementSibling;
//   circle.addEventListener("mouseover", () => {
//     magaInner.style.opacity = 1;
//   });
//   circle.addEventListener("mouseout", () => {
//     magaInner.style.opacity = 0;
//   });
//   magaInner.addEventListener("mouseover", () => {
//     magaInner.style.opacity = 1;
//   });
//   magaInner.addEventListener("mouseout", () => {
//     magaInner.style.opacity = 0;
//   });
// });
