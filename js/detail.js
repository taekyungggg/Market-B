$(function () {
  // 클래스가 "fa-regular fa-heart"인 버튼 요소 선택
  let heart_Btn = $(".fa-regular.fa-heart");

  // 버튼에 클릭 이벤트 추가
  heart_Btn.click(function () {
    // 클래스가 "fa-solid fa-heart"인 요소 선택
    let fullheart_Btn = $(".fa-solid.fa-heart");

    // 버튼에 클릭 이벤트 추가
    heart_Btn.addEventListener("click", function () {
      // 클래스가 "fa-solid fa-heart"인 요소를 보이게(display)하고, 클래스가 "fa-regular fa-heart"인 요소를 숨기게(hidden) 함
      regularHeartBtn.classList.toggle("hidden");
      regularHeartBtn.nextElementSibling.classList.toggle("hidden");
    });
  });

  // 슬라이드
  $(".slider-single").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    useTransform: true,
    asNavFor: ".slider-nav",
  });
  $(".slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".slider-single",
    dots: true,
    focusOnSelect: true,
  });

  /* 날짜 난수 */
  let massNum = $("#randomNumber"),
    startDate = new Date("2023-03-01"),
    currentDate = new Date(),
    /* daysDiff: 현재 날짜와 startDate 사이의 ""일 수 차이""를 계산한 결과값=정수 
  (더 정확히 계산하기 위해 1000밀리초단위로 계산한뒤, 정수만 취한다.)
  */
    daysDiff = Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)),
    /* randomNum: 
  "1"부터 "daysDiff"까지의 범위 내에서 무작위로 생성된 정수
  
  >문제:이 값을 그대로 사용하게 되면 ""randomNum 이 0""이 될 수있다. 
  >이유: Math.random() 함수는 0부터 1 사이의 무작위 수를 생성하기떄문
  >해결방법:
  + 1 을 해서, 0이상의 정수 값을 반환하도록 해준다. 
  즉, + 1 을 더해주면 ""범위가 1부터 daysDiff+1 까지""가 되어, 이 범위 내에서 임의의 정수 값을 반환하게 됩니다.
  */
    randomNum = Math.floor(Math.random() * daysDiff) + 1,
    /* randomDate :
  startDate에서 randomNum일 뒤의 날짜를 Date 객체로 생성한 값 */
    randomDate = new Date(
      startDate.getTime() + randomNum * 24 * 60 * 60 * 1000
    ),
    year = randomDate.getFullYear(),
    month = ("0" + (randomDate.getMonth() + 1)).slice(-2),
    day = ("0" + randomDate.getDate()).slice(-2),
    formattedDate = year + "-" + month + "-" + day;

  // 클릭하면 출력
  // massNum.click(function () {

  // });

  $("#randomNumber").text(formattedDate);
});
