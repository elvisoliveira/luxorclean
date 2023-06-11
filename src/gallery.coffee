jQuery ->
  jQuery.event.special.touchstart = setup: (_, ns, handle) ->
    @addEventListener 'touchstart', handle, passive: !ns.includes('noPreventDefault')
    return
  jQuery.event.special.touchmove = setup: (_, ns, handle) ->
    @addEventListener 'touchmove', handle, passive: !ns.includes('noPreventDefault')
    return
  jQuery.event.special.wheel = setup: (_, ns, handle) ->
    @addEventListener 'wheel', handle, passive: true
    return
  jQuery.event.special.mousewheel = setup: (_, ns, handle) ->
    @addEventListener 'mousewheel', handle, passive: true
    return
  jQuery('div.collection').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    swipeToSlide: true
  });
