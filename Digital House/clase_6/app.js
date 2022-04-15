const fs = require ("fs")
const path = require ("path")
const jsonPath = path.join("./tareas2.json")
const archivoTareas = fs.readFileSync(jsonPath,"utf-8")
const tarea = JSON.parse(archivoTareas)

// const tarea = require("./tareas2.json")

let [,,argumento] = process.argv;
switch (argumento){
    case "listar":
        archivoTareas.forEach(function(tarea, index){
            console.log("---------------")
            console.log("Tarea #: " + (index + 1) )
            console.log("Titulo: " + tarea.titulo())
            console.log("Estado: "+ tarea.estado ())
        })
        break
    case undefined:
        console.log("Atención - Tienes pasar una acción")
        break
    default:
        console.log("No entiendo que quieres hacer")

}