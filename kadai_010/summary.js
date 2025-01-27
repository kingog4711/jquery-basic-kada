$(function() {
  
  // クリックイベント:色
  $('#change-color').on('click', function() {
    // テキストの色を変更する
    $('#target').css('color', 'red');
    console.log('クリックされたので色変化');
  });
  // クリックイベント色:設定ここまで

  // クリックイベント:文字変化
  $('#change-text').on('click', function() {
    // テキストを変更する
    $('#target').text('hello');
    console.log('クリックされたのでテキスト変化');
  });
  // クリックイベント:文字変化ここまで

  // クリックイベント:フェードアウトで文字消える
  $('#fade-out').on('click', function() {
    // テキストをフェードアウトする
    $('#target').fadeOut();
    console.log('クリックされたのでフェードアウト');
  });
  // テキストをフェードアウトするここまで

  // クリックイベント:フェードインで文字表示
  $('#fade-in').on('click', function() {
    // テキストをフェードインする
    $('#target').fadeIn();
    console.log('クリックされたのでフェードイン');
  });
  // テキストをフェードインするここまで

});
