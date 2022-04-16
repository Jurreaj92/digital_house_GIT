//Llamada al archivo tareas.js que contiene las funciones exportadas
const funciones = require("./tareas.js");

//Lee el archivo JSON y asigna a la constante
const archivoJSON = funciones.leerJSON();

                                    

//console.log(process.argv);
const [, , argumento] = process.argv;
// Otra opción: const argumento = process.argv[2];
//console.log(argumento)


switch (argumento) {
    case "listar":
        funciones.listarTareas(archivoJSON);
        break;
    case "crear":
        funciones.escribirJSON(
					archivoJSON,
					process.argv[3] +
						(process.argv[4] ? " " + process.argv[4] : "") +
						(process.argv[5] ? " " + process.argv[5] : "")
				);
        break;
    case "filtrar":
        funciones.filtrarPorEstado(archivoJSON, process.argv[3]); 
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción")
        break;
    default:
        console.log("No entiendo que quieres hacer");
        break;
}

