$(function () {
  /* nav */

  /* btn top */
  let winHeight = $("body, html").innerHeight();
  let nowScrollTop = $(window).scrollTop();
  let btnTop = $("#btn_top");
  let footerOffset = $("footer").offset().top;
  let footerHeight = $("footer").innerHeight();
  let scrPercent =
    ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) *
    100;
  let percentage = $("#btn_top .percentage");

  function Common_resizeEvent() {
    winHeight = $("body, html").innerHeight();
    nowScrollTop = $(window).scrollTop();
    footerOffset = $("footer").offset().top;
    footerHeight = $("footer").innerHeight();
  }
  function btnTopPosition() {
    if (nowScrollTop > 100) {
      btnTop.addClass("on");
    } else {
      btnTop.removeClass("on");
    }
    scrPercent =
      ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) *
      100;
    percentage.css({ height: `${scrPercent * 1.3}%` });
  }
  $(window).scroll(function () {
    nowScrollTop = $(window).scrollTop();
    btnTopPosition();
  });

  btnTop.click((e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300);
    nowScrollTop = $(window).scrollTop();
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
