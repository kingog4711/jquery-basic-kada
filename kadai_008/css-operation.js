$(document).ready(function() {  // HTMLが読み込まれたら実行                       
  $('.btn').click(function() { // クリックされたら実行    
    $('.text-box').val('クリックしました！'); // テキストボックスに文字を入れる
    console.log('クリックしました！');    // コンソールに文字を出力
  });
});