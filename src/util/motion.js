function init () {
  if (window && window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', motionHandler, false)
  }
  if (window && window.DeviceOrientationEvent) {
    window.addEventListener('deviceorientation', orientationHandler, false)
  }
}

function orientationHandler (event) {
  document.getElementById('alpha').innerHTML = event.alpha || 0
  document.getElementById('beta').innerHTML = event.beta || 0
  document.getElementById('gamma').innerHTML = event.gamma || 0
  document.getElementById('heading').innerHTML = event.webkitCompassHeading || 0
  document.getElementById('accuracy').innerHTML = event.webkitCompassAccuracy || 0
  let _radio = 0.6
  $('.J_echart').css({
    'transform': ' rotate3d(1,0,0,' + (-event.beta) * _radio + 'deg) rotate3d(0,1,0,' + (-event.gamma) * _radio + 'deg)'
  })
}

function motionHandler (event) {
  document.getElementById('interval').innerHTML = event.interval || 0
  let acc = event.acceleration
  document.getElementById('x').innerHTML = acc.x || 0
  document.getElementById('y').innerHTML = acc.y || 0
  document.getElementById('z').innerHTML = acc.z || 0
  let accGravity = event.accelerationIncludingGravity
  document.getElementById('xg').innerHTML = accGravity.x || 0
  document.getElementById('yg').innerHTML = accGravity.y || 0
  document.getElementById('zg').innerHTML = accGravity.z || 0
  let rotationRate = event.rotationRate
  document.getElementById('Ralpha').innerHTML = rotationRate.alpha || 0
  document.getElementById('Rbeta').innerHTML = rotationRate.beta || 0
  document.getElementById('Rgamma').innerHTML = rotationRate.gamma || 0
}
