$( document ).ready(function()  {						//jQuery
	let dekking = ""
	let risico = ""
	let kilometer = ""
	let kenteken = ""
	let leeftijd1 = ""
	let woonplaats = ""
	let schadevrij = ""


	//haal alle klikbare links op de met de class panel
	$('a.panel').click(function () {
		
		// Het geselecteerde item wordt gepakt, deze zal gebruikt worden in de 'resize' functie
		current = $(this);
		
		// er wordt gescrold naar de bestemming
		$('#wrapper').scrollTo($(this).attr('href'), 800);		
		
		// annuleer het standaardgedrag van de link
		return false;
	});

	$('.vraag #vraag1').click(function(){
		
		
		if($(this).data("dekking") !== undefined){
			dekking = $(this).data("dekking");
		}
		if($(this).data("risico") !== undefined){
			risico = $(this).data("risico");
			
		}
		console.log(dekking);
		console.log(risico);
	})
	$('.vraag #vraag2').click(function(){
		
		console.log(dekking);
		if(dekking == "onduidelijk"){
			console.log('WA+');
			dekking = 'WA+';
		}
	})

	$('.vraag #uitzondering').click(function(){
		
		dekking = "All risk";
		console.log(dekking);
	})


	$('.vraag #get-overzicht').click(function(){
		kenteken = $("#kenteken").val();
		leeftijd1 = $("#leeftijd-input").val();
		woonplaats = $("#woonplaats-input").val();
		schadevrij = $("#schadevrij-input").val();
		
		
		$("#leeftijd-output").html("<b>Leeftijd: </b>" + leeftijd1 + " jaar");
		$("#woonplaats-output").html("<b>Woonplaats: </b>" + woonplaats);
		$("#schadevrij-output").html("<b>Schadevrije jaren: </b>" + schadevrij + " jaar");
		$("#kenteken-ov").html("<b>Kenteken auto: </b>" + kenteken);
		$("#dekking").html("<b>Dekking: </b>" + dekking);
		$("#risico").html("<b>Eigen Risico: </b>" + risico)		;
		$("#kilometer").html("<b>Geschatte kilometers: </b>" + kilometer);
		console.log(leeftijd, woonplaats, schadevrij);
	}) 

	// past de grootte van alle items aan volgens de nieuwe browsergrootte
	$(window).resize(function () {
		// de resizePanel functie wordt opgeroepen
		resizePanel();
	});


	//haal alle klikbare links in knoppen met de class ".jc-center" op 
	$(".jc-center button a").click(function(){

		$("#carimg").animate({	//dit zorgt ervoor dat de auto 20% in 1500 ms naar rechts gaat
			left: "+=14.29%"
		}, 1500);


	});

	//haalt alle klikbare elementen op onder de class "item" en ".back"
	$(".item .back").click(function(){
		$("#carimg").animate({
			left:"-=14.29%"		//dit zorgt ervoor dat de auto 20% in 1500 ms naar links gaat
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


