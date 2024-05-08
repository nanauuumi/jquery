 // API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

$(function(){

  //検索をかけた際のワードごとのカウント数
  let pageCount = 1;
  //違う検索ワードを検索した際やリセットした際の挙動の初期化に必要なため空白で宣言
  let emptySearchWord = "";

  //サーチボタンをクリックしたときにファンクション実行
  $(".search-btn").on("click", function(){
    //検索欄に入力された値の取得
    const searchWord = $("#search-input").val();
    //検索欄で取得した値と異なる場合は、pageCount及びリストを初期化し
    if(searchWord !== emptySearchWord){
      pageCount = 1;
      $(".lists").empty();
      emptySearchWord = searchWord;
    } else {
      //検索欄で入力した値と同じ場合は、pageCountを増やし表示できる上限(20候補)を追加
      pageCount++;
    }

    //CiNiiBooksから情報を持ってくるための事前設定
    const settings = {
     "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
     "method": "GET",
    };
  

    $.ajax(settings)
    //CiNiiから取得した値するため[@graph]のメタデータで取得項目と紐づけ
      .done(function (response) {
        const result = response['@graph'];
        displayResults(result);
      })
      //念のため失敗した際の挙動を記載（リスク管理）
      .fail(function (err) {
        displayError(err);
      });
    });

    //リセットボタンが押されたときにファンクションを実行
    $(".reset-btn").on("click", function () {
      //pageCountの数値とpageCount数をリセットするための値を初期化
      pageCount = 1;
      emptySearchWord = "";
      //取得したリストの情報を削除
      $(".lists").empty();
      //サーチの値を削除
      $("#search-input").val("");
      //エラーも含めた表示内容のリセット
      $(".message").remove();
    });

    //CiNiiと通信成功した時の挙動
    function displayResults(result){
      //エラーを含めた表示内容のリセット
      $(".message").remove();
      //resultの中身があるときに処理
      if(result.length > 0) {
        //取得した配列[@graph]からキー：itemsの値を取得して代入
        const addContents = result.map(function(value){
          return value["items"];
        });
        //キー：itemsで取得できた場合は「true」処理、何も取得できなかった場合は「false」処理
        if(addContents[0]){
          //最大でも1度で20個までしか取得しない設定ため、20回ループを実施(pageCountの箇所)
          for(var i = 0; i < 20; i++){
            const list = `<li class="lists-item list-inner">
                    <p>タイトル：${addContents[0][i].title || "タイトル不明"}</p>
                    <p>作者：${addContents[0][i]["dc:creator"] || "作者不明"}</p>
                    <p>出版社：${addContents[0][i]["dc:publisher" || "出版社不明"]}</p>
                    <a href="${addContents[0][i].link["@id"]}" target="_blank">書籍情報</a>
                </li>`;
                $(".lists").prepend(list);
        }
        }else{
          $(".message").remove();
          $(".lists").empty();
          $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
        }
      //配列が存在していない場合は、エラーの表示
      }else{
        $(".message").remove();
        $(".lists").empty();
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
      }
    }
    //通信が失敗した時の挙動
    function displayError(err) {
      $(".message").remove();
      $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>');
    }
});




/* $(function(){

  var pageCount = 1;
  var emptySearch = "";

  $(".search-btn").on("click", function(){
    $(".lists").empty();
    var searchWord = $("#search-input").val();

    if(!searchWord){
      return false;
    }
    
    //API
    const settings = {
      "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20&author=${author}&publisher=${publisher}&ncid=${ncid}`,
      "method": "GET",
      /*data: {
        searchWord: title,
        format: "json",
        author: author,
        pageCount: p,
        publisher: publisher,
        ncid: ncid,
      }
    }
    

    /*通信成功した時の挙動
    
    const result = function(data){
      if(data.count > 0) {
        var list = "";
        for (var i = 0;i<data.Items.length; i++){
          list += `<li class=lists-item>` + 
          `<div class=list-inner>` +
          `<p class=list-inner>タイトル： ${data.Items[i].Items.title}</p>` +
          `<p class=list-inner>作者： ${data.Items[i].Items.author}</p>` +
          `<p class=list-inner>出版社： ${data.Items[i].Items.publisher}</p>` +
          `<a href=${data.Items[i].Items.ncid} class=list-inner>書籍情報</a>` +
          `</div>` + `</li>`;
        }
        return $(".lists").prepend(list);
      }
    };

    
    //通信が失敗した時の挙動
    const fail = "";

    $.ajax(settings).done(function (data) {
      result(data);
    }).fail(function (err) {
       displayError(err)
    });


  });
});*/