/*
$(".drawer_button").on('click', function() {
  //OPENのボタンをclickした時にfunctionを実行
 $(".drawer_close").fadeIn(500);
 $(".drawer_bar_first").css({transform: "rotate(0.7854rad) translateY(-50%)"});
 $(".drawer_bar_first").css({top: "0px"});
 $(".drawer_bar_third").css({transform: "rotate(-0.7854rad) translateY(-50%)"});
 $(".drawer_bar_third").css({top: "calc(100% - 0px)"});
 $(".drawer_menu_text").fadeOut(500);
 $(".drawer_bar_second").fadeOut(500);  
 //モーダルウィンドウが0.5秒かけてフェードイン
});*/

$(".drawer_button").on('click', function() {
  //ハンバーガーのボタンをclickした時にfunctionを実行
 $(".drawer_button").toggleClass("active");
  //toggleClassを利用することでcssで指定したclass(active)の有効化
 $(".drawer_bg").toggle();
 //clickしたときに.drawer_bgを適用
 //かつcloseボタンを押したときに閉じる
 $(".drawer_menu").removeClass("left");
// clickをしたときに.drawer_menu.leftを適用させない
 $(".drawer_nav_wrapper").toggleClass("open");
//  clickをしたときにメニューを開く
});


