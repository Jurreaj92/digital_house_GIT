const fs = require ("fs")
const path = require ("path")
const jsonPath = path.join("./tareas.json")
const archivoTareas = fs.readFileSync(jsonPath,"utf-8")
const tarea = JSON.parse(archivoTareas)

module.exports = tarea;