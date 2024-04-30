
$(".select-box").on('change', function(){
  // select-boxを変えた時に実行
  const food = $(this).val();
  // select-boxに入っている情報を代入
  $(".food-list li").css("display","none");
// food-list liをすべて非表示、以下で表示させたいものだけを表示
  if(food == "all"){
    // .select-boxで選んだ値がallだった場合
  $.each($(".food-list li"),(function(index,element){
    // .food-list li"すべてのindex番号とelement要素をループで取得
    $(element).css("display","inline-block");
    // 取得した要素を表示させる
    }));
  }else if(food == "meat"){
    // meatを選択したら
  $.each($('[data-category-type="meat"]'),(function(index,element){
    // data-category-type="meat"のindex番号とelement要素をループで取得
    $(element).css("display","inline-block");
    // 取得した要素を表示させる
    }));
  }else if(food == "fish"){
    $.each($('[data-category-type="fish"]'),(function(index,element){
      //data-category-type="fish" のindex番号とelement要素をループで取得
      $(element).css("display","inline-block");
      // 取得した要素を表示させる
      }));
  }else if(food == "vegetable"){
    $.each($('[data-category-type="vegetable"]'),(function(index,element){
      //data-category-type="vegetable" のindex番号とelement要素をループで取得
      $(element).css("display","inline-block");
      // 取得した要素を表示させる
      }));
  }else if(food == "fruit"){
    $.each($('[data-category-type="fruit"]'),(function(index,element){
      //data-category-type="fruit" のindex番号とelement要素をループで取得
      $(element).css("display","inline-block");
      // 取得した要素を表示させる
      }));
  }
});