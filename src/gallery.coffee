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
  jQuery('dl[itemprop=mainEntity]').click ->
    $(this).find('[itemprop=acceptedAnswer]').slideToggle 'fast'
    return
  jQuery('div.collection').slick({
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    variableWidth: true,
    swipeToSlide: true
  });
  jQuery('a[href*="#section"]').on 'click', (e) ->
    e.preventDefault()
    target = $(this).attr('href')
    jQuery('html, body').animate { scrollTop: $(target).offset().top }, 2000
    return
