// Requerimos módulos
const path = require("path");
const fs = require("fs");

// Creamos la ruta hacia el archivo que vamos a leer
const jsonPath = path.join(__dirname, "tareas.json");

// Capturamos el tercer parámetro escrito en consola
const parametro = process.argv[2];

// Switch para manejar las acciones
switch(parametro){
    case "listar": 
        // Obtenemos el listado de tareas del archivo tareas.json
        const arrayDeTareas = leerJson();

        // Mostramos por terminal el listado de tareas existentes
        imprimirTareas(arrayDeTareas);
        break;


    case undefined: 
        // Mensaje de error al no enviar una acción
        console.log("Atención, Tienes que pasar una accion")
        break;

    case "crear":
        // Creamos un objeto literal con una nueva tarea
        const nuevaTarea = crearTarea();

        // Almacenamos la tarea en el archivo tareas.json
        guardarTarea(nuevaTarea);

        console.log("tarea agregada");
        break;
    
    case "filtrar":
        // Obtenemos listado de tareas filtrado por estado (obtenido desde la terminal en la cuarta posición del comando)
        const tareasFiltradas = filtrarPorEstado(process.argv[3]);

        // Mostramos por terminal el listado de tareas existentes
        imprimirTareas(tareasFiltradas);
        break;
        
        default:
            // Mensaje por defecto
            console.log("No entiendo que quieres hacer")
    }
    


/**
 * @desc Lee el archivo tareas.json y transforma su contenido para ser manipulado por javascript
 * 
 * @returns {Array} Array de tareas o array vacío
 */
function leerJson() {
    const archivoJson = fs.readFileSync(jsonPath, "utf-8");
    const arrayDeTareas = archivoJson.length > 0 ? JSON.parse(archivoJson) : [];
    return arrayDeTareas;
}

/**
 * @desc Crea una nueva tarea asignando un título obtenido desde la consola
 * 
 * @returns {Object} (Object) Nueva tarea en formato de objeto literal
 */
function crearTarea () {
    const tituloTarea = process.argv[3];

    const nuevaTarea = {
        titulo: tituloTarea,
        estado: "pendiente"
    }
    
    return nuevaTarea;
}

/**
 * @desc Recibe una tarea por parámetro, obtiene el listado actual de tareas, agrega la tarea obtenida, transforma el array a JSON y lo guarda en el archivo tareas.json
 * 
 * @param {Object} tarea { titulo: string, estado: string }
 * 
 * @returns (void)
 */
function guardarTarea(tarea) {
    const arrayDeTareas = leerJson();
    arrayDeTareas.push(tarea);
    const jsonTareas = JSON.stringify(arrayDeTareas, null, 2);
    fs.writeFileSync(jsonPath, jsonTareas);
}


/**
 * @desc Filtra listado de tareas segun el estado recibido por parámetro
 * 
 * @param {string} estado string
 * 
 * @returns {Array} (Array) Array de tareas filtrado
 */
function filtrarPorEstado(estado){
    const arrayDeTareas = leerJson();
    const tareasFiltradas = arrayDeTareas.filter(function(tarea){
        return tarea.estado == estado;
    });
    return tareasFiltradas;
}

/**
 * @desc Muestra por terminal el listado de tareas recibido por parámetros, validando previamente si el parámetro es un array y este contiene elementos
 * 
 * @param {Array} tareas 
 */
function imprimirTareas(tareas) {

    if(Array.isArray(tareas) && tareas.length > 0){
        tareas.forEach(function(tarea, index){
            console.log("--------------------");
            console.log("Tarea n°" + (index + 1));
            console.log("titulo: " + tarea.titulo);
            console.log("estado: " + tarea.estado);
        });
    } else {
        console.log("No hay tareas para mostrar");
    }
}
