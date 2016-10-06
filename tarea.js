$(document).ready(function(){
	var boton_modo = $("#boton_modo");
	var titulo2 = $("#titulo2");



	boton_modo.on("click", function(){
		$("nav").toggleClass("noche");
		$("nav ul li a").toggleClass("noche");
	});


	titulo2.hover(
		function(){
    	$("h2").addClass("dia");
    	}, function() {
    	$("h2").removeClass("dia");
    	        
    });

});