// const fs = require ("fs")
// const path = require ("path")
// const jsonPath = path.join("./tareas.json")
// const archivoTareas = fs.readFileSync(jsonPath,"utf-8")
// const tarea = JSON.parse(archivoTareas)

const tarea = require("./funcionesDeTareas")

let [,,argumento] = process.argv;
switch (argumento){
    case "listar":
        console.log(tarea)
        break
    case undefined:
        console.log("Atención - Tienes pasar una acción")
        break
    default:
        console.log("No entiendo que quieres hacer")

}