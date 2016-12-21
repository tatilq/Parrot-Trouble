
var aSmile = document.getElementById("a_Smile");
var bSmile = document.getElementById("b_Smile");
var divSalida = document.getElementById("salida");


function Mostrar()
{
	var  valoraSmile=aSmile.value;
	var  valorbSmile=bSmile.value;

	if(valoraSmile == "" || valorbSmile == "" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Responde todas las preguntas</div>';
	}
	else if(valoraSmile !="si" && valoraSmile != "no" || valorbSmile != "si" && valorbSmile != "no" )
	{

		salida.innerHTML = "--";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Valores Incorrectos</div>';
	}
	else if(valoraSmile == "si" && valorbSmile == "si" || valoraSmile == "no" && valorbSmile == "no" )
	{

		salida.innerHTML = "1";
		document.getElementById("mensajes").innerHTML = '<div class="alert alert-danger">Estamos en Problemas</div>';
	}	
	else 
	{
		salida.innerHTML = "0";
		document.getElementById("mensajes").innerHTML = '<div class="alert">No hay Problemas</div>';

	}

}
