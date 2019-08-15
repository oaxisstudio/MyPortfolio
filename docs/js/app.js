$(function () {

  // SPメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
  $('.nav-link').on('click', function () {
    $('.js-toggle-sp-menu').toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });

});