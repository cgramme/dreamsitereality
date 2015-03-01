var headerHeight, navHeight, $submitClone;




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

	$('.submit-page .continue').click(function(){
		var $submitClone = $('.submit-page').children().clone(true,true);
		$('.submit-page').empty();
		$('.submit-page').prepend($('<div class=\'loader\'> new div </div>'));
		$('.submit-page').append($('<h2 class=\'prepping-flight\'> Your flight is being prepared... </h2>'));
		setTimeout(function(){
			$('.submit-page').hide();
			$('.main-content').fadeIn(1000);
			$('.side-options').fadeIn(1000);
			$('.submit-page').empty();
			$('.submit-page').prepend($submitClone);
			
		},3000)
	
	});

	$('.termsAndConditions').click(function(){
		$('.termsPage').slideDown();
	});

	$('.exitTerms').click(function(){
		$('.termsPage').slideUp();
	});

	
//change red/green dot if option is selected
	$('select').on('change', function() {
  if($(this).val() != 0){
  		$(this).siblings('.fa').css({'color':'#00ff00'});
  }else{
  	    $(this).siblings('.fa').css({'color':'#ff0000'});
  } 
});

	$('#date-selected').on('change', function() {
  if($(this).val() != ''){
  		$(this).siblings('.fa').css({'color':'#00ff00'});
  }else{
  	    $(this).siblings('.fa').css({'color':'#ff0000'});
  } 
});





	$('.submit').click(function(){
		var myDestination = $('.destination').val();
		var myPassNumber = +$('.passengers').val();
		var myVehicle = $('.vehicle').val();
		var myDate = $('.date').val();
		if(myDestination!=0&myPassNumber!=0&myVehicle!=0&myDate!=''&$('.checked').is(':checked')){
			$('.main-content').hide();
			if($('body').width() < 1150){
				$('.side-options, .side-drop').hide();
			}
			


			if(myDestination=='Alpha Centauri'){
				$(".planet").attr('src','images/alphaCentauri.jpg');
			}else if(myDestination=='Titan'){
				$(".planet").attr('src','images/triton.jpg');
			}else if(myDestination=='Mars'){
				$(".planet").attr('src','images/mars.jpg');
			}else{
				$(".planet").attr('src','images/moon.jpg');
			}

			if(myVehicle=='Hydrogen Capsule'){
				$(".vehicleImg").attr('src','images/capsule.jpg');
			}else if(myVehicle=='Nuclear Rocket'){
				$(".vehicleImg").attr('src','images/rocket.jpg');
			}else if(myVehicle=='Starship Enterprise'){
				$(".vehicleImg").attr('src','images/enterprise.jpg');
			}else if(myVehicle=='Homemade Spaceship'){
				$(".vehicleImg").attr('src','images/homemade.jpg');
			}else if(myVehicle=='Millennium Falcon'){
				$(".vehicleImg").attr('src','images/falcon.jpg');
			}else{
				$(".vehicleImg").attr('src','images/deathStar.jpg');
			}






			$('.final-destination').text('Destination:');
			$('.final-passengers').html('Passengers:');
			$('.final-vehicle').text('Spacecraft:');
			$('.final-date').html(myDate);
			$('.people').empty();
				for(i=0;i<myPassNumber;i++){
					$('.people').prepend('<i id="person" class="fa fa-male"></i>');
				}
			
			
			$('.submit-page').fadeIn(1000);


			$('#counter').countdown(myDate, function(event) {
            $('#counter').html(event.strftime('%w weeks %d days %H:%M:%S'));
            });


		}else{
			alert('Select all categories and agree to the terms...');
		}

		
	});


	resize();

});

$(window).resize(function(){
	resize();
});

function resize(){
	if($('body').width() < 1150){
	
	}else{
		$('.side-options, .side-drop').show();
		$('.main-content').css({'padding-top':0+'px'});
	}
}

