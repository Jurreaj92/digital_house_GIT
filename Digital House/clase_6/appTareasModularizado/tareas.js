//Llamado a las librerias requeridas
const fs = require("fs");
const path = require("path");

//En jsonPath se guarda la ruta absoluta del archivo Json (tareas.json) utilizando el módulo de path()
const jsonPath = path.join(__dirname, "tareas.json");



//FUNCIONES

//Función que muestra por consola todas las tareas del archivo JSON
function listarTareas(archivoJSON) {
	
    //La condicional consulta lo siguiente:
    //Si el archivo recibido es un objeto o es un archivo JSON
    //-> Si es un objeto, entonces muestra por consola
    //-> De lo contrario en el else, primero convierte el archivo JSON y luego muestra por consola
	if (typeof archivoJSON === "object") {
		objeto = archivoJSON;
		objeto.forEach((tarea, i) =>
			console.log(
				"Tarea N°" +
					(i + 1) +
					" Título: " +
					tarea.titulo +
					", estado: " +
					tarea.estado
			)
		);
    } else {
        
        //Conversión de archivo JSON
		let objeto = convertirJsonAObjeto(archivoJSON);
		
        //Recorrido con método forEach, el parámetro tarea toma los valores de cada posición del objeto.
        //El parámetro i toma los valores de cada índice del array/objeto, es similar al uso del for, incrementa uno en uno.
        objeto.forEach((tarea, i) =>
			console.log(
				"Tarea N°" +
					(i + 1) +
					" Título: " +
					tarea.titulo +
					", estado: " +
					tarea.estado
			)
		);
	}
}


//Función que permite añadir una nueva tarea al archivo JSON
function escribirJSON(archivoJSON, titulo, estado = "pendiente") {
	//Convierte el archivo JSON pasado por parámetro a Objeto literal
	let objeto = convertirJsonAObjeto(archivoJSON);

	//Agrega una nueva tarea al objeto con el método push
	objeto.push({ titulo: titulo, estado: estado });

	//Convierte el objeto literal a un archivo JSON
	let nuevoJSON = convertirObjetoAJson(objeto);

	//Guarda la tarea en el archivo JSON recién convertido
	guardarTarea(nuevoJSON);

	//Muestra las tareas del archivo JSON por consola 
	listarTareas(nuevoJSON);
}

//Función que permite escribir sobre un archivo Json y guardar las tareas agregadas
function guardarTarea(archivoJSON) {
	fs.writeFileSync(jsonPath, archivoJSON);
	console.log("Tarea guardada exitosamente");
}

//Función que permite leer un archivo Json, usando la libreria fs, y retorna el Json
function leerJSON() {
	let archivoJSON = fs.readFileSync(jsonPath, "utf-8");
	return archivoJSON;
}

//Función que convierte de objeto a JSON
function convertirObjetoAJson(objeto) {
	let archivoJSON = JSON.stringify(objeto, null, 2);
	return archivoJSON;
}

//Función que convierte de JSON a objeto
function convertirJsonAObjeto(archivoJSON) {
	let objeto = JSON.parse(archivoJSON);
	return objeto;
}

//Funcion que filtra por estado
function filtrarPorEstado(archivoJSON, estado) {
	const objeto = convertirJsonAObjeto(archivoJSON);
	const objetoFiltrado = objeto.filter((a) => a.estado === estado);
	listarTareas(objetoFiltrado);
}

//Exportado de las funciones
exports.listarTareas = listarTareas;
exports.escribirJSON = escribirJSON;
exports.guardarTarea = guardarTarea;
exports.leerJSON = leerJSON;
exports.convertirJsonAObjeto = convertirJsonAObjeto;
exports.convertirObjetoAJson = convertirObjetoAJson;
exports.filtrarPorEstado = filtrarPorEstado;
