$(function () {

  $(".btn__submit").click(function(){

    //名字の表示
    console.log('名字');
    console.log($('#family__name').val());

    //名前の表示
    console.log('名前');
    console.log($('#given__name').val());

    // 生年月日
    console.log('生年月日');
    var year = $('.year').val() + "年";    
    var month = $('.month').val() + "月";
    var day = $('.day').val() + "日";
    console.log(year + month + day);

    //性別の表示
    console.log('性別');
    console.log($('[name=gender]:checked').val());

    // 職業
    console.log('職業');
    var work = $('[name=work] option:selected').text();
    if(work == "選択してください"){
      console.log(null);
    }
    console.log(work);

    //アカウント名
    console.log('アカウント名');
    console.log($('#account__name').val());

    //メールアドレス
    console.log('メールアドレス');
    console.log($('#email').val());

    //パスワード
    console.log('パスワード');
    console.log($('#password').val());

    //パスワード確認
    console.log('確認用パスワード');
    console.log($('#duplication__password').val());

    //連絡先
    console.log('連絡先');
    console.log($('#address').val());

    //電話番号
    console.log('電話番号');
    console.log($('#tel').val());

    //購買情報
    console.log('購買情報');
    console.log($('[name=subscription]:checked').val());
  });
});