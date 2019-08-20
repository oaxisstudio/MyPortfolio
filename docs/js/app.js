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

  // スムーススクロール
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});