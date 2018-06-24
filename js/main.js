$(document).ready(function() {

	$(".slider__first").slick({
		slidesToShow: 8,
		lazyLoad: 'progressive',
		asNavFor: '.slider__second, .slider__triple',
		appendArrows: "#slider-arrows"
		// ,
		// lazyLoad: 'progressive',
		// responsive: [{
		// 	breakpoint: 600,
		// 	settings: {
		// 		slidesToShow: 9
		// 	}
		// }]
	});

	$(".slider__second").slick({
		slidesToShow: 9,
		lazyLoad: 'progressive',
		asNavFor: '.slider__first',
		arrows: false

	})

	$(".slider__triple").slick({
		slidesToShow: 8,
		lazyLoad: 'progressive'
		// ,
		// lazyLoad: 'progressive',
		// responsive: [{
		// 	breakpoint: 600,
		// 	settings: {
		// 		slidesToShow: 9
		// 	}
		// }]
	});

	$(".slider__main").slick({
		autoplay: true,
		arrows: false,
		autoplaySpeed: 5000
	})

	$(".reviews__slider").slick({
		dots: true
	});

	$(".fancy").fancybox({
		margin: 10
	});



	$(".input--phone").mask("+7 (999) 999-99-99");

	$(".nav__btn").click(function() {
		$(".nav__container").toggleClass("nav__container-open")
	});

	$(".nav a").click(function(){
		$(".nav__container").removeClass("nav__container-open");

		var hash = $(this).attr("href"),
			top = $(hash).parent().parent().offset().top,
			offset = $(".nav--illusion").height(),
			header = $(".header");

		$("html, body").animate({scrollTop: top - offset}, "slow");

		return false;
	});

	$('form').ajaxForm({
		url: "mail.php",

		success: function(responseText, statusText, xhr, $form) {
			$.fancybox.close();
			$form.trigger('reset');
			$.fancybox("#success", {padding: 0});
			yaCounter40404705.reachGoal('call');
		}
	});

	$("#toTop").scrollToTop();

	$(window).scroll(function(){
		var offset = $(".nav--illusion").offset().top,
			$nav = $(".nav");

		if($(window).scrollTop() > offset){
			if(!$nav.hasClass("nav--fixed")) {
				$nav.addClass("nav--fixed")
			}
		} else {
			if($nav.hasClass("nav--fixed")) {
				$nav.removeClass("nav--fixed");
			}
		}
	});
});

$(document).ready(function () {
	$(document).on("scroll", function() {

		var scroll_top = $(document).scrollTop(),
			menu_selector = ".nav__container",
			offset = 80;

			if( $(".header").css("position") == "fixed") {
				offset = $(".header").height();
			}

			$(menu_selector + " a").each(function(){
				var hash = $(this).attr("href");
				var target = $(hash).parent().parent();

				if (target.offset().top - offset <= scroll_top && target.offset().top + target.outerHeight() > scroll_top ) {
					$(menu_selector + " li.active").removeClass("active");
					$(this).parent().addClass("active");

				} else {
					$(this).removeClass("active");
				}
			});
	});



});

$(window).on('load', function() {
	// if(!isMobile.any) {
		new WOW().init();
	// }
});

(function($) {
	$.fn.scrollToTop=function(){
		$(this).hide().removeAttr("href");
		if($(window).scrollTop()!="0"){
			$(this).fadeIn("slow")
		}

		var scrollDiv=$(this);
		$(window).scroll(function(){
			if($(window).scrollTop()=="0"){
				$(scrollDiv).fadeOut("slow")
			}else{
				$(scrollDiv).fadeIn("slow")
			}
		});

		$(this).click(function(){
			$("html, body").animate({scrollTop:0},"slow")
		})
	}
})(jQuery);


$(function() {
    $("img.lazy").lazyload({
        event : "sporty"
    });
});

$(window).bind("load", function() {
    var timeout = setTimeout(function() { $("img.lazy").trigger("sporty") }, 1000);
});
