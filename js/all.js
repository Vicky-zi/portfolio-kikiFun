$(document).ready(function() {
	$('.showmenu').on('click',function(e) {
		e.preventDefault();
		$('body').toggleClass('menu-show');
	});

	// layout end
 

	//滾軸效果
	  //點選時發生 
  $('.scrollTop') .click(function(e){ 
    e.preventDefault(); 
   var target = $(this).attr('href'); //抓取選取的scrollTop id //
    var targetPos = $(target).offset().top; //用抓取到的id來判別位置// 
    $('body, html').animate({scrollTop:targetPos} ,1000);//用抓取到的位置來讓螢幕跑到定位 
  }); 
    
  // 抓取螢幕目前位置 
  $(window).scroll(function(){ 
    var scrollPos = $(window).scrollTop();  //抓取現在螢幕的寬度 //
   
   //滑到特定區域要加上的class 
  $('.scrollTop').each(function(){ 
    var target = $(this).attr('href'); //抓取選取的scrollTop id //
    var targetPos = $(target).offset().top; //用抓取到的id來判別位置 //
    var targetHeight = $(target).outerHeight();  //用抓取到的id來判別高度//
    console.log( target , targetPos , targetHeight)

    if(targetPos -1 <= scrollPos && (targetHeight + targetPos) > scrollPos) {
      $('.scrollTop').removeClass('active'); 
      $(this).addClass('active'); 
    }else{ 
      $(this).removeClass('active'); 
    } 
  }); 
    
  }); 
	//滾軸效果 end


	$('.moblie-link').on('click',function(e) {
		e.preventDefault();
		$('body').toggleClass('open');
	});
	$('.click').on('click',function(e) {
		e.preventDefault();
		$('body').toggleClass('clik-open');
	});            
	// t1 nav-top 顯示明細 end


	$('.btn').on('click',function(e) {
		e.preventDefault();
		$(this).toggleClass('heart-click');
	});           
	 // heart 變換圖片 end


// 購物車加(減)
	$('.cart').on('click',  function(e){
       e.preventDefault();
       const numberElement = document.querySelector(".number");
       const currentNumber = Number(numberElement.textContent);
       numberElement.textContent = currentNumber + 1;
});
// 購物車加(減)

	
});



