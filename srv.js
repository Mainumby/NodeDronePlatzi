var arDrone = require("ar-drone");
//creo un cliente del drone.
var drondinez = arDrone.createClient();


function bateria () {
	// body...
	console.log("Bateria:" + drondinez.battery());
}

function despegar_drone () {
	// body...
	//defino altitud maxima
	drondinez.config("control:altitude_max",100000);
	//evento de despegue
	drondinez.takeoff();
	//calibrar
	//rotar_drone();
}
function rotar_drone () {
	// body...
	drondinez.stop();
	drondinez.calibrate(0);
}

function aterrizar_drone () {
	// body...
	drondinez.stop();
	//drondinez.land();
	drondinez.up(1);
}


//EXPRESS Y SERVIDOR WEB
var express = require("express");
var web = express();
var servidor;

servidor = web.listen(8080,function  () {
	// body...
	console.log("Servidor arrancado >D")
})

web.get("/", function  (req, res) {
	// body...
	console.log("Home");
	bateria("");
	res.sendfile("opciones.html");
})
web.get("/despegar", function  (req, res) {
	// body...
	console.log("Despegando");
	//llamo a la funcion de despegue
	despegar_drone();
	res.sendfile("despegar.html");
})

web.get("/aterrizar", function  (req, res) {
	// body...
	console.log("Aterrizando");
	aterrizar_drone();
	res.sendfile("aterrizar.html");
})