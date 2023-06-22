$(document).ready(function () {
  /* nav */
  $(".menu_btn").click(function () {
    $(".category_list").show();
  });
  $(".category_list").mouseleave(function () {
    $(".category_list").hide();
  });

  /* btn top */
  let all_height = $("body, html").innerHeight();
  let scr_offset = $(window).scrollTop();
  let btnTop = $("#btn_top");
  let footerOffset = $("footer").offset().top;
  let footerHeight = $("footer").innerHeight();
  let scrPercent = calculateScrPercent();

  function calculateScrPercent() {
    let windowHeight = $(window).innerHeight();
    let contentHeight = all_height - footerHeight;

    // 스크롤 가능한 영역의 높이가 0 이하일 경우에는 100을 반환하여 나눗셈 오류를 방지합니다.
    if (contentHeight <= 0) {
      return 100;
    }
    return ((scr_offset + windowHeight) / contentHeight) * 100;
  }

  let percentage = $("#btn_top .percentage");

  function Common_resizeEvent() {
    all_height = $("body, html").innerHeight();
    scr_offset = $(window).scrollTop();
    footerOffset = $("footer").offset().top;
    footerHeight = $("footer").innerHeight();
    scrPercent = calculateScrPercent();
  }

  function btnTopPosition() {
    if (scr_offset > 100) {
      btnTop.addClass("on");
    } else {
      btnTop.removeClass("on");
    }
    percentage.css({ height: `${scrPercent * 1.55}%` });
  }

  $(window).scroll(function () {
    scr_offset = $(window).scrollTop();
    scrPercent = calculateScrPercent(); // 스크롤 위치가 변경될 때마다 scrPercent 값을 업데이트합니다.
    btnTopPosition();
    // console.log(scrPercent);
  });

  btnTop.click((e) => {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300, function () {
      scr_offset = $(window).scrollTop();
      scrPercent = calculateScrPercent(); // 맨 위로 스크롤되면 scrPercent 값을 업데이트합니다.
      btnTopPosition();
    });
  });

  $(window).resize(function () {
    setTimeout(() => {
      Common_resizeEvent();
      scrPercent = calculateScrPercent(); // 창 크기가 변경될 때마다 scrPercent 값을 업데이트합니다.
      btnTopPosition();
    }, 500);
  });

  //star rating
  let rating = $(".rating");
  rating.each(function () {
    let $this = $(this);
    let scoreNum = $this.attr("data-rate");
    let scoreArr = scoreNum.split(".");
    console.log(scoreArr);
    if (scoreArr.length > 1) {
      for (let i = 0; i < scoreArr[0]; i++) {
        $this.find(".star-wrap").eq(i).find(".star").css({ width: "100%" });
      }
      $this
        .find(".star-wrap")
        .eq(scoreArr[0])
        .find(".star")
        .css({ width: scoreArr[1] + "0%" });
    } else {
      for (let i = 0; i < scoreNum; i++) {
        $this.find(".star-wrap").eq(i).find(".star").css({ width: "100%" });
      }
    }
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
