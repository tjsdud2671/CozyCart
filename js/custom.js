$(function () {
  /* Include html Files */
  $('.gnb-include').load('/include/gnb.html');
  $('.main-header-include').load('/include/main-header.html');

  /* Category accordion */
  $('.category-accordion .title').click(function () {
    $(this).next().stop().slideDown();
    $(this).siblings('.category-accordion .title').next().stop().slideUp();
  });

  /* Search recent */
  $('.search-recent .btn-all-clear').click(function () {
    $('.search-recent .items').hide();
  });

  $('.search-recent .btn-clear').click(function () {
    $(this).parent().slideUp(150);
  });

  /* Cart */
  $('.cart-btn-clear').click(function () {
    $(this).hide();
  });
  $('.cart-btn-clear').click(function () {
    $(this).next().hide();
  });

  /* Detail slider */
  $('.goods-slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false,
    autoplay: false,
  });

  /* Main slider */
  $('.main-slider').slick({
    slidesToShow: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  $('.curation-slider').slick({
    slidesToShow: 1,
    arrows: true,
  });
  $('.recommend-items').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
  });

  /* goods-review-accordion */
  $('.goods-review-accordion .detail').eq(0).show();
  $('.goods-review-accordion .title').click(function () {
    $(this).next().toggle();
    $(this).addClass('active');
    $(this).siblings('.goods-review-accordion .title').removeClass('active');
  });

  /* Goods Order Info */

  $('.wish').click(function () {
    $(this).toggleClass('active');
  });
  $('.btn-order-choice').click(function () {
    $('.goods-order-choice').hide();
    $('.goods-order-final').show();
    $('.overlay-fold').show();
  });
  $('.btn-fold, .overlay-fold').click(function () {
    $('.goods-order-choice').show();
    $('.goods-order-final').hide();
    $('.overlay-fold').hide();
  });
});
$(window).on('load', function () {
  setFlowBanner();
});
