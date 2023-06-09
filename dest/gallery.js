$(function() {
  return $('div#portifolio-gallery ul').slick({
    arrows: false,
    lazyLoad: 'ondemand',
    dots: false,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    swipeToSlide: true
  });
});
