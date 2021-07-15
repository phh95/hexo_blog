!(function() {
    function show() {
       //简单判断首页，因为我的域名是 penghh.fun，所以首页就会触发
      if (location.href.match(/fun.{0,1}$/)){
           //直接把音乐框隐藏
          $("#music_div").attr("style","display:none;");
           //滚动条事件
          $(window).scroll(function(){
              //获取滚动条的滑动距离
              var scroH = $(this).scrollTop();
              //滚动条的滑动距离大于120，就显示，反之就隐藏
              if(scroH >= 120){
                  $("#music_div").attr("style","display:block;position:fixed;bottom:0px;left:30px;");
              }else if(scroH < 120){
                  $("#music_div").attr("style","display:none;");
              }
           })
      }
  
    }
    show();
  })();