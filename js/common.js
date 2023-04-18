// let nav_btn = $(".menu_btn"),
//     lnb_list = $(".category_list");
// nav_btn.click(function () {
//     lnb_list.toggleClass("on");
// });
// $(function () {
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
// });
