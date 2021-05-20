//マウススクロールした回転量を取得    
$('.target').on('mousewheel', function (e) {
  var delta = -1 * (e.originalEvent.deltaY ? -(e.originalEvent.deltaY) : e.originalEvent.wheelDelta ? e.originalEvent.wheelDelta : -(e.originalEvent.detail));
  console.log(delta)
});