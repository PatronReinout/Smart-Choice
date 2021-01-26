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
		console.log(leeftijd1, woonplaats, schadevrij);
	})

	$('.vraag #lijst').click(function(){
		leeftijd = parseInt(leeftijd1);
		console.log(dekking);		

			if(dekking == "WA"){
				if(leeftijd1 < 26){
					$('#wrapper').scrollTo('#item7', 800);
					console.log("Jonger dan 26 jaar");
				}
				else{
					$('#wrapper').scrollTo('#item10', 800);
					console.log("Ouder dan 25 jaar");
				}
			}
			if(dekking == "WA+"){
				if(leeftijd1 < 26){
					$('#wrapper').scrollTo('#item8', 800);
					console.log("Jonger dan 26 jaar");
				}
				else{
					$('#wrapper').scrollTo('#item11', 800);
					console.log("Ouder dan 25 jaar");
				}
			}
			if(dekking == "All risk"){
				if(leeftijd1 < 26){
					$('#wrapper').scrollTo('#item9', 800);
					console.log("Jonger dan 26 jaar");
				}
				else{
					$('#wrapper').scrollTo('#item12', 800);
					console.log("Ouder dan 25 jaar");
				}
			}



	})
	// past de grootte van alle items aan volgens de nieuwe browsergrootte
	$(window).resize(function () {
		// de resizePanel functie wordt opgeroepen
		resizePanel();
	});

		$('.vraag #kilometer-data').click(function(){
		kilometer = $(this).val();
		switch(kilometer){
			case '1':
			kilometer = "0 tot en met 7500 kilometer";
			break
			case '2': 
			kilometer = "7500 tot en met 10.000 kilometer";
			break
			case '3':
			kilometer = "10.000 tot en met 12.000 kilometer";
			break
			case '4': 
			kilometer = "12.000 tot en met 15.000 kilometer";
			break
			case '5':
			kilometer = "15.000 tot en met 20.000 kilometer";
			break
			case '6': 
			kilometer = "20.000 tot en met 25.000 kilometer";
			break
			case '7':
			kilometer = "25.000 tot en met 30.000 kilometer";
			break
			case '8': 
			kilometer = "Meer dan 30.000 kilometer";
			break
			default:
			kilometer = "Geen invoer";
		}	
		console.log(kilometer);
	})

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


