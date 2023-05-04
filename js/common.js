// nav
let nav_btn = $(".menu_btn"),
  lnb_list = $(".category_list");
nav_btn.click(function () {
  lnb_list.toggleClass("on");
});
lnb_list.on("mouseleave", function () {
  lnb_list.removeClass("on");
});

/* btn top */
let winHeight = $("body, html").innerHeight();
let nowScrollTop = $(window).scrollTop();
let btnTop = $("#btn_top");
let footerOffset = $("footer").offset().top;
let footerHeight = $("footer").innerHeight();
let scrPercent =
  ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) * 100;
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

//
const wishBtn = document.querySelector(".wish_Btn");

// 하트 아이콘 요소 가져오기
const heartIcon = wishBtn.querySelector(".fa-heart");

// 버튼 클릭 시 이벤트 리스너 등록
wishBtn.addEventListener("click", function () {
  // 현재 버튼의 상태
  const isActive = wishBtn.classList.contains("active");

  // 하트 아이콘 요소의 클래스를 toggle
  heartIcon.classList.toggle("fa-regular");
  heartIcon.classList.toggle("fa-solid");

  // 버튼의 활성화/비활성화 상태를 toggle
  wishBtn.classList.toggle("active");

  // 하트 아이콘의 색상과 display 속성을 변경
  if (isActive) {
    // 원래대로 돌아가는 경우
    heartIcon.style.color = "black";
    heartIcon.style.display = "inline-block";
  } else {
    // 활성화되는 경우
    heartIcon.style.color = "red";
    heartIcon.style.display = "none";
  }
});
