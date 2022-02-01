$ ->
  container = $('div#portifolio-gallery')
  containerWidth = container.innerWidth()
  slider = container.find('ul')
  sliderWidth = 0
  pictures = slider.find('img')
  loaded = 0
  pictures.on 'load', ->
    sliderWidth += $(this).width()
    loaded++
    if loaded == pictures.length
      $('div#portifolio-gallery').mousemove (e) ->
        slider.css left: ((containerWidth - sliderWidth) * (e.pageX / containerWidth).toFixed(3)).toFixed(1) + 'px'
        return
    return
  return
