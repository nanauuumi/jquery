$(".nav-item").on('click', function() {
  //.nav-itemをclickしたらfunctionを実行
  let index = $("li.nav-item").index(this);
  // index(this)で$(".nav-item li").ep(x)のx(index番号)を取得
  if(index <= 5 && index > 0){
  //index番号が５より小さく0より大きい場合 
    $(".description li").css("display", "none");
  // .description liをcss("display", "none")で何も表示させない
    $(".is-hidden").eq(index-1) .css("display", "block");
  // .is-hidden"を.css("display", "block")で表示（index-1することで、取得したindex番号の齟齬を修正） 
    $(".description li").eq(0).css("display", "none");
  //ホームコンテンツを表示させない 
  }else{
  //index番号が０以下だった場合
    $(".is-hidden").css("display", "none");
  // .is-hiddenをページAからEを非表示
    $(".description li").eq(0).css("display", "block");
  // ホームコンテンツを表示させる
  };
});



/*
$(".nav-item").eq(1).on('click', function() {
 $(".description li").css("display", "none");
 $(".is-hidden").eq(0) .css("display", "block");
 $(".description li").eq(0).css("display", "none");
});

$(".nav-item").eq(2).on('click', function() {
  $(".description li").css("display", "none");
  $(".is-hidden").eq(1) .css("display", "block");
  $(".description li").eq(0).css("display", "none");
 });

 $(".nav-item").eq(3).on('click', function() {
  $(".description li").css("display", "none");
  $(".is-hidden").eq(2) .css("display", "block");
  $(".description li").eq(0).css("display", "none");
 });

 $(".nav-item").eq(4).on('click', function() {
  $(".description li").css("display", "none");
  $(".is-hidden").eq(3) .css("display", "block");
  $(".description li").eq(0).css("display", "none");
 });
 */