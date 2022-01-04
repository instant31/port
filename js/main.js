$(document).ready(function() {//실행틀 시작
    var menu = $(".gnb > li");
      var content = $("#content > div");
      
      menu.click(function(){
          /*preventDefault 는 a 태그 처럼 클릭 이벤트 외에 
  별도의 브라우저 행동을 막기 위해 사용됩니다.*/
          event.preventDefault();
          
          //사용자가 클릭한 li
          var tg = $(this);
          //순서값을 찾는 함수 index()
          var idx = tg.index();
          //선택한 li와 순서가 같은 content 를 찾음 eq()
          var section = content.eq(idx);
          //선택된 영역의 top 의 좌표값을 저장
          //.offset()은 선택한 요소의 좌표를 가져오거나 특정 좌표로 이동하게 합니다.
          var tt = section.offset().top;
  
          //스크롤이 tt의 값에 맞게 움직이게
          $("html,body").stop().animate({scrollTop:tt});
          });//menu.click() 끝
          
          // 윈도우에서 scroll() 스크롤이 작동될 때 일어날 일.
          $(window).scroll(function(){
          //.scrollTop()은 선택한 요소의 스크롤바 수직 위치를 반환하거나 스크롤바 수직 위치를 정합니다.
          var location = $(window).scrollTop();
          
          content.each(function() {
              //반복문(each)
        var tg = $(this);
              var idx = tg.index();
              
              if(tg.offset().top <= location){  //active 위치가 안맞으면 location + 위치값 을 추가하면 됨
                  menu.removeClass("active");
                  menu.eq(idx).addClass("active");
                  }
  
      });//each() 끝
          
              
              });//scroll() 끝
              $('.graphic li').each(function(){
                 $(this).click(function(){
                     var img_name = $(this).find('img');
                     var img_alt = $(img_name).attr('alt');
                     var img_big = $(img_name).attr('big_data');
  
                     $('#modal').fadeIn();
                     $('#modal .img1').attr('src',img_big);
                     $('#modal .txt').text(img_alt);
                 })
             })
  
           $('#btn-close').click(
               function(){ $('#modal').fadeOut();
                             img_big = ""
          });
  
          $('.web li').each(function(){
                 $(this).click(function(){
                     var img_name = $(this).find('img');
                     var img_alt = $(img_name).attr('alt');
                     var img_big = $(img_name).attr('big_data');
  
                     $('#modal').fadeIn();
                     $('#modal .img1').attr('src',img_big);
                     $('#modal .txt').text(img_alt);
                 })
             })
  
           $('#btn-close, #modal .img1').click(
               function(){ $('#modal').fadeOut();
                             img_big = ""
          });
      
  });//실행틀 끝