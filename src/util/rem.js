//designWidth:设计稿的实际宽度值，需要根据实际设置
//maxWidth:制作稿的最大宽度值，需要根据实际设置
//这段js的最后面有两个参数记得要设置，一个为设计稿实际宽度，一个为制作稿最大宽度，例如设计稿为750，最大宽度为750，则为(750,750)
let rem = function (designWidth, maxWidth, size) {
  let doc = document,
    win = window,
    fontSize = size || 16,
    docEl = doc.documentElement,
    htmlEl = document.querySelector('html'),
    timeId  // timer
  
  function refreshRem () {
    let width = docEl.getBoundingClientRect().width
    width > maxWidth && (width = maxWidth)
    let rem = width * 100 / designWidth
    htmlEl.style.fontSize = rem + 'px'
  }
  
  refreshRem()
  
  win.addEventListener('resize', function () {
    clearTimeout(timeId) //防止执行两次
    timeId = setTimeout(refreshRem, 100)
  }, false)
  
  win.addEventListener('pageshow', function (e) {
    if (e.persisted) { // 浏览器后退的时候重新计算
      clearTimeout(timeId)
      timeId = setTimeout(refreshRem, 100)
    }
  }, false)
  
  if (doc.readyState === 'complete') {
    doc.body.style.fontSize = fontSize + 'px'
  } else {
    doc.addEventListener('DOMContentLoaded', function (e) {
      doc.body.style.fontSize = fontSize + 'px'
    }, false)
  }
}
export default rem
