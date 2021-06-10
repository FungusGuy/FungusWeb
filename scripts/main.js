const button = document.querySelector("button");

function nombre(){
	let nombre = prompt ("Cual es tu nombre?");
	
	if (nombre == "fungo"){
		alert("bienvenido admin");
	}
	else{
		alert("calla y a trabajar sucio esclavo");
	}
}

function myFunction() {
	if(nombre == "fungo"){
		document.getElementById("demo").style.color = "red";
	}
	else{
		alert("no me toques!!");	
	}
}