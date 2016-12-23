
function calcular()
{
	var talking = document.getElementById("talking").value;
	var hora = parseInt(document.getElementById("hora").value);

	var isTalking = true;

	var salida = document.getElementById("salida");

	if(talking == "1")
	{
		isTalking = true;
		//loro habla
	}
	if(talking == "2")
	{
		isTalking = false;
		//loro no habla
	}
	if(isTalking)
	{
		if(hora < 7 || hora>20 )
		{
			//estamos en problemas
			salida.innerHTML = "1";
		}
		else
		{
			//no estamos en problemas
			salida.innerHTML = "0";
		}
	}
	if(!isTalking)
	{
		if(hora <= 23 )
		{
			//no estamos en problemas
			salida.innerHTML = "0";
		}

	}

}
