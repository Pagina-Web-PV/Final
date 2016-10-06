$(document).ready(function(){
	var boton_modo = $("#boton_modo");
	var boton_modo2 = $("#boton_modo2");

	boton_modo.on("click",function(){
		$(mapa2).show();
		$(mapa1).hide();
		$(mapa3).hide();
	});
	
	boton_modo2.on("click", function(){
		$(datos).show();
		$(mapa3).show();
		$(mapa1).hide();
		$(mapa2).hide();

	});


$('#map').vectorMap({map: 'world_mill'});

});
