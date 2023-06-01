$(document).ready(function () {
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

  //zoom magnify
  $(".magnify").jfMagnify({ scale: "2.5" });

  //scroll fix event
  //   $(window).on("scroll", function () {
  //     const fix_item = $(".section02 .p_info");
  //     function fixAside() {
  //       const sct = $(window).scrollTop();
  //       baseTop = 0;

  //       if (sct > 300) {
  //         fix_item.css({
  //           position: "fixed",
  //           top: 0,
  //         });
  //       } else {
  //         fix_item.css({
  //           position: "absolute",
  //           top: 200,
  //         });
  //       }
  //       console.log(sct);
  //     }
  //     fixAside();
  //   });
  //   let fix_item = $(".section02 .p_info");
  //   let sct = $(window).scrollTop();
  //   function fixAside() {
  //     baseTop = 0;

  //     if (sct > 50) {
  //       fix_item.css({
  //         position: "fixed",
  //         top: 0,
  //       });
  //     } else {
  //       fix_item.css({
  //         position: "absolute",
  //         top: 200,
  //       });
  //     }
  //   }
  //   console.log(sct);

  //   $(window).on("scroll", function () {
  //     fixAside();
  //   });

  $(window).on("scroll", function () {
    let fix_item = $(".section02");
    let sct = $("body").scrollTop();
    let fix_itemOffset = fix_item.offset().top;

    if (sct > 300) {
      fix_item.css({
        position: "fixed",
        top: 0,
      });
    } else {
      fix_item.css({
        position: "absolute",
        // top: 200,
      });
    }
    //sct값이 계속 0으로 나옴.
    console.log(sct);
  });
  $(window).trigger("scroll");

  //id, date random
  const userids = () => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (let i = 0; i < 7; i++) {
      if (0 <= i && i < 4) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      } else {
        result += "*";
      }
    }
    return result;
  };

  const id_list = $("#randomId");
  console.log(id_list);
  function make_id() {
    id_list.html(userids());
  }
  make_id();

  const review_date = $(".review_random_date");

  const start = new Date(2023, 1, 1);
  const end = new Date();
  function getRandomDate(start, end) {
    const startDate = start.getTime();
    const endDate = end.getTime();

    return new Date(startDate + Math.random() * (endDate - startDate));
  }

  const msgs = Array(100)
    .fill(0)
    .map((_, i) => ({
      id: i + 1,
      userID: userids(),
      timestamp: getRandomDate(start, end),
    }));

  const map1 = msgs.map((x, i) => {
    const date = new Date(x.timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return {
      id: x.id,
      timestamp: `${year}-${month}-${day}`,
    };
  });

  function randomDate() {
    review_date.html(map1[0].timestamp);
  }
  randomDate();

  console.log(randomDate);
  console.log(map1);

  // 추천상품
  let slide_start = $(".slider_wrapper");
  let imgWidth = $(".bestList .bestItem img");
  let slide_UL = slide_start.find("ul");
  //새로 수정
  let rowgap_value = parseInt(slide_UL.css("row-gap"));

  slide_start.each(function () {
    let slides = slide_UL.find("li"),
      currentIdx = 0,
      slideCount = slides.length,
      slideWidth = imgWidth.width(),
      slideToShow = 3,
      prevBtn = $(this).find(".prev_btn"),
      nextBtn = $(this).find(".next_btn");

    // ul 너비지정
    slide_UL.width(slideWidth * slideCount + rowgap_value * (slideCount - 1));

    // 슬라이드 이동함수
    function moveSlide(idx) {
      slide_UL.css("left", -idx * (slideWidth + rowgap_value));
      currentIdx = idx;
    }
    moveSlide(currentIdx);

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

    // prevBtn.on("click", function () {
    //   if (currentIdx === 0) {
    //     moveSlide(0);
    //   } else {
    //     moveSlide(currentIdx - 1);
    //   }
    // });
  });

  //구입갯수
  let minus = $(".b_opt > .fa-minus"),
    plus = $(".b_opt > .fa-plus"),
    buy_num = $(".b_opt > .num");

  minus.click(function () {
    let currentNum = parseInt(buy_num.text());
    if (currentNum > 1) {
      buy_num.text(currentNum - 1);
    }
  });

  plus.click(function () {
    var currentNum = parseInt(buy_num.text());
    buy_num.text(currentNum + 1);
  });
  console.log(buy_num);

  //foundation css (button) remove
  let moreBtn = $(".review_photo_wrap .more_btn_wrap button");
  moreBtn.removeClass("is-active");
  moreBtn.removeClass("disabled");
  moreBtn.removeClass("loading");
});
