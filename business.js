

$(document).ready(function(){

	$('.nav-info').fadeIn(2000);
	


	$('.details,.about').mouseenter(function(){
         
         $('.side-options li:first-child').removeClass('hover-on');
         
         if($(this).hasClass('details')){
         	$('.nav-info').hide();
         	$('.nav-details').slideDown();
         }else{
         	$('.nav-info').hide();
         	$('.nav-about').slideDown();
         }
	}).mouseleave(function(){
		$('.side-options li:first-child').addClass('hover-on');
		$('.nav-details,.nav-about').hide();
		$('.nav-info').slideDown();
	});
});