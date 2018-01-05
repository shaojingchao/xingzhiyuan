function init (selector, ratio) {
  if (window && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', (event) => {
      let _radio = (typeof ratio === 'number') ? ratio : 0.3
      let _width = $(window).width() * 1.2
      $(selector).css({
        'transform': 'perspective(' + _width + 'px) rotate3d(1,0,0,' + (event.beta) * _radio + 'deg) rotate3d(0,1,0,' + (-event.gamma) * _radio + 'deg)'
      })
    }, false)
  }
}

export default {
  create: init
}
