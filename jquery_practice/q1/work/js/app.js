// q1 
$(window).on("load", function(){
  //windowの更新したあとにfunctionを実行
  $("#q1").css("color", "black");
  //q1のボタンの色を更新時に変更
});

//q2
$("#q2").on('click', function() {
  //q2ボタンをclickしたときにfunctionを実行
  $("#q2").css("background-color", "pink");
  //ボタンの色をピンクに変更
});

//q3
$("#q3").on('click', function() {
  //q3のボタンをclickした時にfunctionを実行
  $("#q3").fadeOut(3000);
  // 3秒かけてフェードアウト
});

// q4
$("#q4").on('click', function() {
  //q4のボタンをclickしたときにfunctionを実行
  $("#q4").css("width", "400px");
  //幅を400に指定
  $("#q4").css("height", "200px");
  // 高さ200に指定
  $("#q4").css("font-size", "50px");
  // 文字のサイズを50に指定
});

// q5
$("#q5").on('click', function() {
  // q5のボタンをclickしたときにfunctionを実行
  $("#q5").before("<span>DOMの前</span>");
  // 選択した要素の前にコンテンツを挿入
  $("#q5").prepend("<span>DOMの中の前</span>");
  // 選択した要素の先頭にコンテンツを挿入
  $("#q5").append("<span>DOMの中の後</span>");
  // 選択した要素の最後にコンテンツを挿入
  $("#q5").after("<span>DOMの後</span>");
  // 選択した要素の後にコンテンツを挿入
});

// q6
$("#q6").on('click', function(){
  // q6のボタンをclickしたときにfunctionを実行
  $("#q6").animate({marginLeft: "100px", marginTop: "100px"} ,2000);
  /*2秒かけてmarginLeftで左にスペースを作り右に移動。
  marginTopで上にスペースを作って下に移動*/
});

// q7
$("#q7").on('click', function(){
  // q7のボタンをclickしたときにfunctionを実行
  $("#q7").const = document.getElementById("#q7")
  console.log(q7);
  // getElementByIdで指定したidの要素を取得
});

// q8
$("#q8").hover(
   // q8ボタンをホバーさせる
  function(){
    $("#q8").css('width', '200px');
    $("#q8").css('height', '200px');
    $("#q8").css("font-size", "50px");
  // カーソルを当てた時にfunctionを実行
  },
  function(){
    $("#q8").css('width', "");
    $("#q8").css('height', "");
    $("#q8").css("font-size", "");
  // カーソルを外した時に元に戻す
  },
);

// q9
$(function(){
  $("#q9 li").eq(0).on("click",function(){
  alert("0");
  // q9-1をclickするとアラートで0を表示
  })
  $("#q9 li").eq(1).on("click",function(){
    alert("1");
  // q9-2をclickするとアラートで1を表示
  })
  $("#q9 li").eq(2).on("click",function(){
    alert("2");
  // q9-3をclickするとアラートで2を表示
  })
  $("#q9 li").eq(3).on("click",function(){
    alert("3");
  // q9-4をclickするとアラートで3を表示
  })
});

// q10
$(function(){
  $("#q10 li").eq(0).on("click",function(){
    $("#q11 li").eq(0).css('font-size', '50px');
  // q10-1をclickするとq11-1を操作する
  })
  $("#q10 li").eq(1).on("click",function(){
    $("#q11 li").eq(1).css('font-size', '50px');
  // q10-2をclickするとq11-2を操作する
  })
  $("#q10 li").eq(2).on("click",function(){
    $("#q11 li").eq(2).css('font-size', '50px');
  // q10-3をclickするとq11-3を操作する
  })
  $("#q10 li").eq(3).on("click",function(){
    $("#q11 li").eq(3).css('font-size', '50px');
  // q10-4をclickするとq11-4を操作する
  })
});
