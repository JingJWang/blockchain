//滚动条事件
$(window).scroll(function(){
	var wTop = $(window).scrollTop();		//滚动条距顶部的距离
	var headT = $('.header_box').offset().top;
	var resT = Math.ceil(headT - wTop);
	//调用下面的效果函数
	loadFun();
	if(resT >= -1100 && resT <= -700){
		//标题
	    $('.sty_one').show().addClass('animated fadeInDownBig');
	    //下面三块
		aone = setTimeout(function(){
	    	$('.conc_a').eq(0).show().addClass('animated slideInRight');
	    }, 500);
	    atwo = setTimeout(function(){
	    	$('.conc_a').eq(1).show().addClass('animated slideInRight');
	    }, 1500);
	    athree = setTimeout(function(){
	    	$('.conc_a').eq(2).show().addClass('animated slideInRight');
	    }, 2500);
	}else if(resT <= -1400 && resT >= -2000){
		//应用场景
		$('.sty_two').show().addClass('animated fadeInDownBig');
		bone = setTimeout(function(){
	    	$('.ap_pLeft').show().addClass('animated fadeInUp');
	    }, 200);
		bone = setTimeout(function(){
	    	$('.ap_top').show().addClass('animated fadeInUp');
	    },500);
	    bone = setTimeout(function(){
	    	$('.ap_top_img').show().addClass('animated fadeIn');
	    }, 1500);
		btwo = setTimeout(function(){
	    	$('.js_pa').show().addClass('animated fadeIn');
	    }, 1800);
	    btwo = setTimeout(function(){
	    	$('.js_pb').show().addClass('animated pulse');
	    }, 2500);
	    btwo = setTimeout(function(){
	    	$('.js_pc').show().addClass('animated fadeIn');
	    }, 3000);
		bthree = setTimeout(function(){
	    	$('.js_pd,.js_pe').show().addClass('animated fadeIn');
	    }, 4200);
		bthree = setTimeout(function(){
	    	$('.js_pf').show().addClass('animated fadeIn');
	    }, 4800);
		bthree = setTimeout(function(){
	    	$('.ap_more').show().addClass('animated bounceInUp');
	    }, 5500);
	    bfour = setTimeout(function(){
	    	$('.ap_pRight').show().addClass('animated fadeInUp');
	    }, 6000);
		bfour = setTimeout(function(){
	    	$('.ap_rig_bottom,.ap_right_img').show().addClass('animated fadeIn');
	    }, 6800); 
//	    bfour = setTimeout(function(){
//	    	$('.ap_rig_posi').show().addClass('animated fadeInLeft');
//	    }, 8300); 
	}else if(resT <= -2800 && resT >= -3000){
		$('.sty_three').show().addClass('animated fadeInDownBig');
		cone = setTimeout(function(){
	    	$('.logy_a').eq(1).show().addClass('animated fadeInDown');
	    }, 1000);
	    cone = setTimeout(function(){
	    	$('.logy_a').eq(1).children().show().addClass('animated fadeIn');
	    }, 1500);
	    cone = setTimeout(function(){
	    	$('.logy_a').eq(0).show().addClass('animated fadeInLeft');
	    }, 2500); 
	    cone = setTimeout(function(){
	    	$('.logy_a').eq(0).children().show().addClass('animated fadeIn');
	    }, 3000);
	    cone = setTimeout(function(){
	    	$('.logy_a').eq(2).show().addClass('animated fadeInRight');
	    }, 4000); 
		cone = setTimeout(function(){
	    	$('.logy_a').eq(2).children().show().addClass('animated fadeIn');
	    }, 4500);
	}else if(resT <= -3500 && resT >= -4900){
		$('.sty_four').show().addClass('animated fadeInDownBig');
		done = setTimeout(function(){
	    	$('.sty_five').show().addClass('animated fadeIn');
	    }, 1000);
		done = setTimeout(function(){
	    	$('.sty_six').show().addClass('animated bounceIn');
	    }, 1500);
		done = setTimeout(function(){
	    	$('.centerPosBg').show().addClass('animated_five flash');
	    }, 2000);
	    done = setTimeout(function(){
	    	$('.plan_one').show().addClass('animated_three bounceInUp');
	    }, 2500);
	    done = setTimeout(function(){
	    	$('.plan_cont_one .plan_a').show().addClass('animated_two fadeIn');
	    }, 4000);
	    done = setTimeout(function(){
	    	$('.plan_cont_one .plan_p').show().addClass('animated_two fadeInRight');
	    }, 4500);
	    done = setTimeout(function(){
	    	$('.plan_cont_two .plan_a').show().addClass('animated_two fadeIn');
	    }, 5000);
	    done = setTimeout(function(){
	    	$('.plan_cont_two .plan_p').show().addClass('animated_two fadeInLeft');
	    }, 5800);
	    done = setTimeout(function(){
	    	$('.hst_logo').show().addClass('animated_three pulse');
	    }, 6500);
	    done = setTimeout(function(){
	    	$('.jst_logo').show().addClass('animated_three pulse');
	    }, 7000);
	    done = setTimeout(function(){
	    	$('.plan_last_img').show().addClass('animated rotateInUpLeft');
	    }, 7500);
	    done = setTimeout(function(){
	    	$('.plan_a').show().addClass('animated pulse');
	    }, 8000);
		done = setTimeout(function(){
	    	$('.sty_show_p').show().addClass('animated fadeIn');
	    }, 8500);
	    done = setTimeout(function(){
	    	$('.sty_show_p_a').show().addClass('animated fadeIn');
	    }, 9500);
	    done = setTimeout(function(){
	    	$('.sty_show_p_b').show().addClass('animated fadeIn');
	    }, 9500);
	}
});
//页面开始加载-header
function loadFun(){
	var wTop = $(window).scrollTop();		//滚动条距顶部的距离
	var headT = $('.header_box').offset().top;
	var resT = headT - wTop;
    if(resT == 0 || resT>=-500){
    	//导航
		$('.header').addClass('animated fadeIn');
		//logo
		setTimeout(function(){
	    	$('.logo').show().addClass('animated fadeInDown');
	    }, 1000);
		//logo下面文字
		setTimeout(function(){
	    	$('.head_p,.head_cont').show().addClass('animated fadeInDown');
	    }, 2000);
	    //按钮
	    setTimeout(function(){
	    	$('.headBtn').show().addClass('animated fadeInUp');
	    },3000)
    }
}