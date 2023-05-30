$(function () {
  /* nav */

  /* btn top */
  let all_height = $("body, html").innerHeight();
  let scr_offset = $(window).scrollTop();
  let btnTop = $("#btn_top");
  let footerOffset = $("footer").offset().top;
  let footerHeight = $("footer").innerHeight();
  let scrPercent =
    ((scr_offset + $(window).innerHeight()) / (all_height - footerHeight)) *
    100;
  let percentage = $("#btn_top .percentage");

  function Common_resizeEvent() {
    all_height = $("body, html").innerHeight();
    scr_offset = $(window).scrollTop();
    footerOffset = $("footer").offset().top;
    footerHeight = $("footer").innerHeight();
  }
  function btnTopPosition() {
    if (scr_offset > 100) {
      btnTop.addClass("on");
    } else {
      btnTop.removeClass("on");
    }
    scrPercent =
      ((scr_offset + $(window).innerHeight()) / (all_height - footerHeight)) *
      100;
    percentage.css({ height: `${scrPercent * 1.6}%` });
  }
  $(window).scroll(function () {
    scr_offset = $(window).scrollTop();
    btnTopPosition();
    console.log(scrPercent);
  });

  btnTop.click((e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
    scr_offset = $(window).scrollTop();
    btnTopPosition();
  });
  $(window).resize(function () {
    setTimeout(() => {
      Common_resizeEvent();
      btnTopPosition();
    }, 500);
  });

  //상품 슬라이드
  $(".slider_wrapper").each(function () {
    var sliderUl = $(this).find("ul"),
      slides = sliderUl.find("li"),
      currentIdx = 0,
      slideCount = slides.length,
      slideWidth = 450,
      slideMargin = 30,
      slideToShow = 4,
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
});
