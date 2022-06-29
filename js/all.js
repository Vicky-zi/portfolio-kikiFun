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

	//滾軸效果 end



  //動畫較果 start
  $(window).scroll(function(){
    let windowHeight = $(window).height();
    let scrollPosition = $(window).scrollTop();

    $('.animate').each(function(){
      let thisPosition = $(this).offset().top;

      //滑到特定區域要加上的class
      if((windowHeight + scrollPosition) >= thisPosition) {
        $(this).addClass('animate__fadeInDown');
        $('.content>img').addClass('animate__fadeInLeft');
      }else {
        $(this).removeClass('animate__fadeInDown');
      }
    })
  });

   //動畫較果 end
  


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

//表單驗證
$('#form').validate({
  /* 常用檢測屬性
 required:必填
 noSpace:空白
 minlength:最小長度
 maxlength:最大長度
 email:信箱格式
 number:數字格式
 */
 onkeyup: function(element, event) {
   //去除左側空白
   var value = this.elementValue(element).replace(/^\s+/g, "");
   $(element).val(value);
  },
  rules: {
    fname: {
      required: true
    },
    phone:{
      required: true,
      minlength: 8,
      number: true
    },
    email: {
      required: true,
      email: true
    },
    password: {
      required: true,
      maxlength: 6,
      number: true
    }
  },
  messages: {
    fname: {
      required:'必填'
    },
    phone: {
      required:'必填',
      minlength:'不得少於8位',
      number:'電話需為數字'
    },
    email: {
      required:'必填',
      email:'Email格式不正確'
    },
    password: {
      required:'必填',
    },
  },
  submitHandler: function(form) {
    form.submit();
  }
});

	
});



