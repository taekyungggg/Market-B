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
});
