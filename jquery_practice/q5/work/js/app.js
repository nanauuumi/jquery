$(".dropdwn li").hover(
  // dropdwn li(親要素)を指定してhover
  function(){
  $(this).children(".dropdwn_menu").stop().slideToggle(500);
  //dropdwn liの子要素（children(".dropdwn_menu")をslideToggleで0．5秒かけてスライドダウン、アップさせる
});
