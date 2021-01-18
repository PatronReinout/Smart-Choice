$(function() {						//jQuery

	//haal alle klikbare links op de met de class panel
	$('a.panel').click(function () {
		
		// Het geselecteerde item wordt gepakt, deze zal gebruikt worden in de 'resize' functie
		current = $(this);
		
		// er wordt gescrold naar de bestemming
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		// annuleer het standaardgedrag van de link
		return false;
	});

	// past de grootte van alle items aan volgens de nieuwe browsergrootte
	$(window).resize(function () {
		// de resizePanel functie wordt opgeroepen
		resizePanel();
	});


	//haal alle klikbare links in knoppen met de class ".jc-center" op 
	$(".jc-center button a").click(function(){

		$("#carimg").animate({	//dit zorgt ervoor dat de auto 20% in 1500 ms naar rechts gaat
			left: "+=20%"
		}, 1500);


	});

	//haalt alle klikbare elementen op onder de class "item" en ".back"
	$(".item .back").click(function(){
		$("#carimg").animate({
			left:"-=20%"		//dit zorgt ervoor dat de auto 20% in 1500 ms naar links gaat
		}, 1500);


	});

	
});

function resizePanel() {

	//haalt de lengte en breedte van de browser op
	width = $(window).width();
	height = $(window).height();

	//haalt de breedte van de "mask" op. Dit wordt berekend door: breedte * het aantal items
	mask_width = width * $('.item').length;
		
	//berekent de demensie van ieder item 	
	$('#wrapper, .item').css({width: width, height: height});
	$('#mask').css({width: mask_width, height: height});

}

