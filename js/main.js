			//侧边栏移出和移入，方法fadeIn()<淡入淡出的显示隐藏>和animate()<通过数值！产生动画>
			$(function(){
				var siderbar=$("#siderbar");
				var mask=$(".mask");
				var siderbar_trigger=$(".siderbar_trigger");
				siderbar_trigger.click(function(){
					if (siderbar.css("right")=="-200px") {
						mask.fadeIn(300);
						siderbar.animate({right:"0"},300);
					} else{
						mask.fadeOut(300);
						siderbar.animate({right:"-200"},300);
					}
					
				})
				mask.click(function(){
					mask.fadeOut(300);
					siderbar.animate({right:"-200"},300);
				})

				$("#siderbar ul li").mouseover(function(){
					$(this).addClass("active");
					$(this).siblings().removeClass("active");
				})
				
				



				//导航下拉隐藏，通过设置遮罩和方法fadeIn()<淡入淡出的显示隐藏>				
				$(window).scroll(function(){
					var navBg=$(".nav_bg");
					var scrollHeight=$(this).scrollTop();
					if (scrollHeight>20) {							
						navBg.fadeIn(1000);
					}
					else {
						navBg.fadeOut(500);
					}
				})
					
				//返回顶部，scroll()<监听滚动>
				var backButton=$(".back-to-top")
				backButton.click(function(){
					$("body").animate({scrollTop:0},500);
				})
				$(window).scroll(function(){
					if ($("body").scrollTop()>10) {
						backButton.fadeIn(500);
					} else{
						backButton.fadeOut(500);
					}
				})				
			})
			
			
			
			

			var WINDOW_WIDTH=document.body.clientWidth;
			var WINDOW_HEIGHT=40;
			var mycanvashr=document.getElementById("mycanvashr");
			if (mycanvashr.getContext) {
					ctx=mycanvashr.getContext("2d");
				} else{
					alert('该浏览器不支持canvas，请您更换浏览器后重试')
				}
				mycanvashr.width=WINDOW_WIDTH;
				mycanvashr.height=WINDOW_HEIGHT;	
			for(i=0;i<WINDOW_WIDTH/40-1;i++){
				ctx.beginPath();
				ctx.rect(11+i*40,10,30,20);
				var r=Math.floor(Math.random()*256);
				var g=Math.floor(Math.random()*256);
				var b=Math.floor(Math.random()*256);
   			var	a=Math.random()*1;
   			var singleColor = "rgba("+r+","+g+","+b+","+a+")"
   			console.log(singleColor);			
				ctx.fillStyle=singleColor;
				ctx.fill();				
			}
//			mycanvashr.addEventListener('mousemove',updatecanvashr,false)
			