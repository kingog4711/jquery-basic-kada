
// HTMLが読み込まれた時に表示
$(window).on('load', function() {
  console.log('HTMLが読み込まれました');

// ウィンドウがスクロールされた時に表示
$(window).on('scroll', function() {
  console.log('スクロールイベントが発生しました');
});
});