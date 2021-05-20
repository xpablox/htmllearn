(function($){
	$(function(){
		/** scroll to section **/
		$(".jq--scroll-lk").click(function(){
			$("html, body").animate({scrollTop: $(".jq--lk").offset().top}, 1000);
		});
		$(".jq--scroll-vp").click(function(){
			$("html, body").animate({scrollTop: $(".jq--vp").offset().top}, 1200);
		});
		$(".jq--scroll-nv").click(function(){
			$("html, body").animate({scrollTop: $(".jq--nv").offset().top}, 1500);
		});
		$(".jq--scroll-o").click(function(){
			$("html, body").animate({scrollTop: $(".jq--o").offset().top}, 1700);
		});
		$(".jq--scroll-f").click(function(){
			$("html, body").animate({scrollTop: $(".jq--f").offset().top}, 2000);
		});
		$(".jq--scroll-k").click(function(){
			$("html, body").animate({scrollTop: $(".jq--k").offset().top}, 2500);
		});
		/** scroll buttons to section **/
		$(".jq--scroll-button-first").click(function(){
			$("html, body").animate({scrollTop: $(".jq--lk").offset().top}, 1000);
		});
		$(".jq--scroll-button-second").click(function(){
			$("html, body").animate({scrollTop: $(".jq--vp").offset().top}, 1200);
		});
		/*mobile navigation*/
		$(".jq--nav-icon").click(function(){
			$(".nav-background").fadeToggle(200);
			$(".mobile-nav-back").fadeToggle(200);
			$("nav ul").fadeToggle(200);
		});
		/** Podmínky **/
		$(".jq-image-hamburger").click(function(){
			if($(".jq-image-hamburger").attr("src") == "images/hamburgerMenu.png"){
				$($(".jq-image-hamburger").attr("src", "images/crossMenu.png"))
			}
			else {
				$($(".jq-image-hamburger").attr("src", "images/hamburgerMenu.png"))
			}
		});
		
		
		
	});
})(jQuery);