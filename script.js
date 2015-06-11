


$(document).ready(function(){
	
	$('h1').fadeIn(700);

	setTimeout(function(){
    	$('.fa-lightbulb-o').css({'text-shadow' :'0px 0px 20px #ffffff','color':'#ffff00'});
    	if($(window).width() >= 400){
    		$('h2').slideDown();
    	}
	}, 700);

	

});

$(window).resize(function(){
	if($(window).width() <= 400){
		$('.navbar h2').css({'display' :'none'});
	}else{
		$('.navbar h2').css({'display' :'inline-block'});
	}
});