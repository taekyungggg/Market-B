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

  //scroll fix event

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

  //zoooooooooooom
  $(".magnify").jfMagnify();
  $(".magnify").jfMagnify({ scale: "2.5" });

  //id, date random
  const userids = () => {
    let result = "";
    const characters = "abcdefghijklmnopqrstuvwxyz";
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
});
