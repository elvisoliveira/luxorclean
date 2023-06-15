jQuery(function() {
  jQuery.event.special.touchstart = {
    setup: function(_, ns, handle) {
      this.addEventListener('touchstart', handle, {
        passive: !ns.includes('noPreventDefault')
      });
    }
  };
  jQuery.event.special.touchmove = {
    setup: function(_, ns, handle) {
      this.addEventListener('touchmove', handle, {
        passive: !ns.includes('noPreventDefault')
      });
    }
  };
  jQuery.event.special.wheel = {
    setup: function(_, ns, handle) {
      this.addEventListener('wheel', handle, {
        passive: true
      });
    }
  };
  jQuery.event.special.mousewheel = {
    setup: function(_, ns, handle) {
      this.addEventListener('mousewheel', handle, {
        passive: true
      });
    }
  };
  jQuery('dl[itemprop=mainEntity]').click(function() {
    $(this).find('[itemprop=acceptedAnswer]').slideToggle('fast');
  });
  jQuery('div.collection').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    swipeToSlide: true
  });
  return jQuery('a[href*="#section"]').on('click', function(e) {
    var target;
    e.preventDefault();
    target = $(this).attr('href');
    jQuery('html, body').animate({
      scrollTop: $(target).offset().top
    }, 2000);
  });
});
