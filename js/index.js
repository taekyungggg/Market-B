$(function () {
  // 자동 슬라이드
  $(".mainImg_wrapper").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  });

  //슬라이드 좌우 버튼
  $(".controls .next").click(() => {
    $(".mainImg_wrapper").slick("slickNext");
  });
  $(".controls .prev").click(() => {
    $(".mainImg_wrapper").slick("slickPrev");
  });

  //검색창 버튼
  let gnb = $(".gnb_search"),
    S_btn = $(".icon_search > button");
  S_btn.click(function () {
    gnb.toggleClass("on");
  });

  //메뉴버튼
  let nav_btn = $(".menu_btn"),
    lnb_list = $(".category_list");
  nav_btn.click(function () {
    lnb_list.toggleClass("on");
  });
  lnb_list.on("mouseleave", function () {
    $(this).hide();
  });
});
