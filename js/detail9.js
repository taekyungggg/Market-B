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
  let buyfixed = $("article .section02");
  let buyfixedOST = buyfixed.offset().top;
  let recOst = $(".slider_wrapper").offset().top;
  //   let buyfixedThreshold = buyfixedOST;
  //   console.log(buyfixedThreshold);
  console.log(buyfixedOST);

  $(window).scroll(function () {
    console.log($(this).scrollTop());
    console.log(buyfixedOST);
    //|| $(this).scrollTop() >= recOst
    if ($(this).scrollTop() > buyfixedOST) {
      buyfixed.css({
        position: "fixed",
        top: "2%",
        // right: "50%",
        // margin-right: -40%;
        // marginRight: "-778px",
        zIndex: 100,
      });
      if ($(this).scrollTop() >= recOst) {
        buyfixed.css({
          position: "absolute",
          top: "2%",
          zIndex: 100,
        });
      } else {
        buyfixed.css({
          position: "absolute",
          // right: "50%",
          // margin-right: -40%;
          // marginRight: "-670px",
        });
      }
    }
  });

  //----------------------------------------id, date random
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

  //data 배열설정
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
      userID: userids(),
      timestamp: `${year}-${month}-${day}`,
    };
  });

  for (let i = 0; i < map1.length; i++) {
    review_date.html(map1[i].timestamp);
  }
  console.log(map1[3].timestamp);
  console.log(map1[50].timestamp);
  //인덱스 랜덤으로 뿌려서 각 id, date출력되게 하기
  //랜덤 인덱스 번호 만들기
  let random_Number = () => {
    let result = "";
    for (let i = 0; i < map1.length; i++) {
      function randomIndex() {
        Math.floor(Math.random() * map1.length);
        return random_Number;
      }
      randomIndex();
      return result;
    }
  };

  function randomPlay() {
    id_list.each(function () {
      let index = random_Number;
      let random_userID = map1[index].userids();
      $(this).html(random_userID);
    });
  }
  randomPlay();

  console.log(map1);
  console.log(randomIndex);
  console.log(map1.length);

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
  });

  //구입갯수, 최종구입가
  let btn_minus = $(".b_opt > .minus"),
    btn_plus = $(".b_opt > .plus"),
    buy_num = $(".b_opt > .buyResult"),
    totalcost = $(".totalcost"), //html에 넣어주기
    buy_priceText = $(".P_info1 .price").text(),
    buy_price = buy_priceText.replace(/\D/g, ""),
    i = 1;

  btn_plus.on("click", function () {
    i++;
    buy_num.text(i);
    buyTotal = i * buy_price;
    totalcost.text("￦" + buyTotal.toLocaleString());
  });

  btn_minus.on("click", function () {
    if (i > 1) {
      i--;
      buy_num.text(i);
      buyTotal = i * buy_price;
      totalcost.text("￦" + buyTotal.toLocaleString());
    }
  });

  //컬러 선택
  let opt1_btn = $(".P_info2 .color .btn_opt1");
  let opt2_btn = $(".P_info2 .color .btn_opt2");
  let opt1_btnImg = $(".P_info2 .btn_opt1_img");
  let opt2_btnImg = $(".P_info2 .btn_opt2_img");

  opt1_btn.click(function () {
    $(this).toggleClass("on");
    opt1_btnImg.toggleClass("on");
    opt2_btnImg.removeClass("on");
    opt2_btn.removeClass("on");
  });

  opt2_btn.click(function () {
    $(this).toggleClass("on");
    opt2_btnImg.toggleClass("on");
    opt1_btnImg.removeClass("on");
    opt1_btn.removeClass("on");
  });

  //후기 옵션 선택
  //   let textCheck = $(".opt_wrapper .review_text");
  //   let photoCheck = $(".opt_wrapper .review_photo");

  //   textCheck.click(function () {
  //     if ($(this).hasClass("checked")) {
  //       photoCheck.removeClass("checked");
  //     } else {
  //       photoCheck.addClass("checked");
  //     }
  //   });
});
