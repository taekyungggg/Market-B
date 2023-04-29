let nav_btn = $(".menu_btn"),
  lnb_list = $(".category_list");

nav_btn.click(function () {
  e.preventDefault();
  lnb_list.toggleClass("on");
});
lnb_list.on("mouseleave", function () {
  e.preventDefault();
  $(this).hide();
});

/* btn top */
//현재 브라우저 창의 높이값
let winHeight = $("body, html").innerHeight();
// 현재 브라우저 창의 스크롤 위치
let nowScrollTop = $(window).scrollTop();
let btnTop = $("#btn_top");
//마지막 푸터(footer) 요소의 top 위치값
let footerOffset = $("footer").offset().top;
//마지막 푸터(footer) 요소의 높이
let footerHeight = $("footer").innerHeight();
//스크롤바가 현재 창에서 어느 정도 위치에 있는지를 퍼센트로 계산. 스크롤바가 현재 창에서 맨 아래에 위치하면 100이 되고, 맨 위쪽에 위치하면 0이 됩니다.
let scrPercent =
  ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) * 100;
let percentage = $("#btn_top .percentage");
//브라우저 창의 크기가 변경될 때 호출될 함수를 정의
//변수를 다시 계산합니다.
function Common_resizeEvent() {
  winHeight = $("body, html").innerHeight();
  nowScrollTop = $(window).scrollTop();
  footerOffset = $("footer").offset().top;
  footerHeight = $("footer").innerHeight();
}

//스크롤바가 움직일 때 호출될 함수를 정의합니다. btnTop 요소가 스크롤 위치에 따라 보이거나 숨겨지도록 조절하고, .percentage 요소의 높이값을 계산하여 스타일을 변경합니다.
function btnTopPosition() {
  //현재 스크롤 위치>200 이상이면 on을, 아니면 on을 없애
  if (nowScrollTop > 200) {
    btnTop.addClass("on");
  } else {
    btnTop.removeClass("on");
  }
  /* 현재 스크롤 위치를 계산하여 footer 위치를 기준으로 스크롤 위치가 어느정도인지 비율을 계산하고, 이 비율에 따라 버튼 위에 있는 height 속성을 조정하는 부분입니다.

  구체적으로, 스크롤 이벤트가 발생하면 nowScrollTop 변수에 현재 스크롤 위치가 저장됩니다. 그 다음, 스크롤 위치와 창의 높이를 더한 값을 분모로, 전체 높이에서 footer의 높이를 뺀 값을 분자로 하는 비율을 계산하여 scrPercent 변수에 저장합니다.

  그리고 이 비율에 1.3을 곱한 값으로 percentage 요소의 height 속성 값을 조정합니다. 이때, percentage 요소는 버튼 위에 있는 색상이 채워지는 요소로, 비율에 따라 색이 채워지는 정도가 조절됩니다. 1.3은 비율에 따라 버튼 위에 채워지는 색이 빠르게 증가하도록 조절한 상수 값입니다.*/

  //innerHeight는 브라우저 창의 내부 높이를 나타내고, winHeight는 innerHeight의 초기값으로 설정되고, 이후 resize 이벤트가 발생할 때마다 업데이트 됩니다. 따라서 winHeight는 창의 크기가 변경될 때마다 업데이트되기 때문에, 뷰포트 크기가 변경되더라도 항상 최신의 값을 가지고 있습니다. 이에 반해 innerHeight는 뷰포트 크기가 변경되지 않는 한 항상 같은 값을 가집니다.
  scrPercent =
    ((nowScrollTop + $(window).innerHeight()) / (winHeight - footerHeight)) *
    100;
  percentage.css({ height: `${scrPercent * 1.3}%` });
}
//스크롤바가 움직일 때 발생하는 이벤트에 대한 핸들러를 등록합니다. 이 핸들러에서 nowScrollTop 값을 갱신하고, btnTopPosition() 함수를 호출합니다.
$(window).scroll(function () {
  nowScrollTop = $(window).scrollTop();
  btnTopPosition();
});
//탑버튼을 클릭할 때 발생하는 이벤트에 대한 핸들러를 등록합니다. 이 핸들러에서 페이지 맨 위쪽으로 스크롤을 이동시키고, nowScrollTop 값을 갱신하고, btnTopPosition() 함수
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
