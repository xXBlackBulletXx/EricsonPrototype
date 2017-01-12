$(document).ready(function(){
	$("#btnSearch").click(function(){
		$("#divSearch").fadeToggle("fast", function(){
			$("#searchDiv").fadeToggle("fast", "linear" );
		});
	});	

	$jumboHeight = $('.pic').outerHeight();

	function parallax(){
	    var scrolled = $(window).scrollTop();
	    //console.log("jumbo: "+$jumboHeight+" scrolled: "+scrolled);
	    if(scrolled>=100){
	    	$(".navbar-fixed-top").animate({backgroundColor: 'rgba(0,37,97,1)'}, 100);
	    }else{
	    	$(".navbar-fixed-top").animate({backgroundColor: 'rgba(255,255,255,0)'}, 100);
	    }
	    $('.pic').css('height', ($jumboHeight-scrolled) + 'px');
	}

	$(window).scroll(function(e){
	    parallax();
	});
})


