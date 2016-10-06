$(document).ready(function(){
	var boton_modo = $("#boton_modo");

	boton_modo.on("click",function(){
		$(mapa2).show();
		$(mapa1).hide();
		$(mapa3).hide();
	});
	