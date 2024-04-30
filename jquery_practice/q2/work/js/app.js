$(".modal_open_button").on('click', function() {
  //OPENのボタンをclickした時にfunctionを実行
 $(".modal_win").fadeIn(500);
 //モーダルウィンドウが0.5秒かけてフェードイン
});

$(".modal_close_button").on('click', function() {
  //×のボタンをclickした時にfunctionを実行
 $(".modal_win").fadeOut(500);
 //モーダルウィンドウが0.5秒かけてフェードアウト
});

