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

  //모달
  let modalPop = $(".modal");
  let closeBtn = $(".close");
  let buyBtn = $(".btn_shop");
  let modalGroup = $(".modal_group");
  let noBtn = $(".noNeed_btn");

  buyBtn.on("click", function () {
    modalPop.addClass("on");
  });
  closeBtn.on("click", function () {
    modalPop.removeClass("on");
    modalGroup.removeClass("on");
  });

  //구입갯수, 최종구입가
  let btn_minus = $(".b_opt > .minus"),
    btn_plus = $(".b_opt > .plus"),
    buy_num = $(".b_opt> #buy_num"),
    totalcost = $(".totalcost"), //html에 넣어주기
    buy_priceText = $(".P_info1 .price").text(),
    buy_price = Number(buy_priceText.replace(/\D/g, "")),
    // buy_price = buy_priceText.replace(/\D/g, ""),
    // i = 1;
    i = buy_num.val();
  buyTotal = i * buy_price;
  console.log(i);
  // form_num = buy_num.val(),
  // form_buyTotal = form_num * buy_price;

  btn_plus.on("click", function () {
    i++;
    buy_num.val(i);
    // buy_num.text(i);
    buyTotal = i * buy_price;
    totalcost.text("￦" + buyTotal.toLocaleString());
    if (i == 10) {
      modalGroup.addClass("on");
    }
  });
  noBtn.on("click", function () {
    modalGroup.removeClass("on");
  });

  btn_minus.on("click", function () {
    if (i > 1) {
      i--;
      buy_num.val(i);
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
    buyTotal = buy_priceText;
    totalcost.text("￦" + buyTotal.toLocaleString());
  });
  opt1_btnImg.click(function () {
    $(this).toggleClass("on");
    opt1_btn.toggleClass("on");
    opt2_btnImg.removeClass("on");
    opt2_btn.removeClass("on");
  });

  opt2_btn.click(function () {
    $(this).toggleClass("on");
    opt2_btnImg.toggleClass("on");
    opt1_btnImg.removeClass("on");
    opt1_btn.removeClass("on");
    buyTotal = buy_priceText;
    totalcost.text("￦" + buyTotal.toLocaleString());
  });
  opt2_btnImg.click(function () {
    $(this).toggleClass("on");
    opt2_btn.toggleClass("on");
    opt1_btnImg.removeClass("on");
    opt1_btn.removeClass("on");
  });

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

  //review page
  $(".link").on("click", function (event) {
    event.preventDefault();
  });
  let page01 = $(".ul_01");
  let page02 = $(".ul_02");
  let page03 = $(".ul_03");
  let pagerr01 = $(".pagerr01");
  let pagerr02 = $(".pagerr02");
  let pagerr03 = $(".pagerr03");
  let Prev = $(".Previous");
  let Next = $(".Next");

  pagerr02.click(function () {
    page01.hide();
    page02.show();
    page03.hide();
  });
  pagerr03.click(function () {
    page01.hide();
    page02.hide();
    page03.show();
  });
  pagerr01.click(function () {
    page01.show();
    page02.hide();
    page03.hide();
  });

  //review page
  /*let each_review = $(".review_first_wrap").toArray();
  let each_pager = $(".pagerr").toArray();

  each_pager.forEach(function (pager, index) {
    $(pager).on("click", function () {
      each_review.forEach(function (review, j) {
        if (index === 1) {
          if (j >= index * 5 - 5 && j <= index * 5 - 1) {
            $(review).show(); 
          } else {
            $(review).hide(); 
          }
        } else if (index > 1) {
          if (j >= index * 5 - 10 && j <= index * 5 - 6) {
            $(review).hide();
          } else {
            $(review).show(); 
          }
        }
      });
    });
  });

  페이저 1(i)을 클릭하면
0~4 보임:  (i*5)- 5  ~ i*5 - 1 
나머지 다 안보이게

2(i)를 클릭하면 
5~9보임:  (i*5)- 5  ~ (i*5) - 1
0~4 안보임: (i*5 )-10 ~  (i*5 )-6

3을 클릭하면
10~14보임:   (i*5)- 5  ~ (i*5) - 1
5~9 안보임: (i*5 )-10 ~  (i*5 )-6
  
  */

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

  let random_index = Math.floor(Math.random() * map1.length);
  for (let i = 0; i < map1.length; i++) {
    id_list.eq(i).html(map1[random_index].userID);
    review_date.eq(i).html(map1[random_index].timestamp);
  }
  console.log(random_index);
  console.log(map1);
  console.log(map1.length);
  //인덱스 랜덤으로 뿌려서 각 id, date출력되게 하기
  //랜덤 인덱스 번호 만들기

  //   function randomPlay() {
  //     id_list.each(function () {
  //       let index = random_Number;
  //       let random_userID = map1[index].userids();
  //       $(this).html(random_userID);
  //     });
  //   }
  //   randomPlay();

  //review more버튼
  let moreButton = $(".review_photo_wrap .more_btn_wrap");
  moreButton.on("click", function () {
    let review_img = $(".review_photo_3ndwrap");
    review_img.toggleClass("on");
  });

  //filter 버튼
  let text_only_Btn = $(".review_text");
  let photo_only_Btn = $(".review_photobtn");
  let photoGroup = $(".review_photo_wrap");
  let textGroup = $(".review03_wrap");
  photo_only_Btn.on("click", function () {
    photoGroup.removeClass("hide");
    textGroup.addClass("hide");
  });
  text_only_Btn.on("click", function () {
    photoGroup.addClass("hide");
    textGroup.removeClass("hide");
  });

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
});
