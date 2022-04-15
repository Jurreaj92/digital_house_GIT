let path = require ('path') 
let nombres = require("./miModulo.js")
console.log (path.resolve("."))// path Me ayuda a traer una ruta sin importar el sistema 
// operativo, nos ayuda a  no tener problema con varios equipos trabajndo con sistema
// operativo diferente
console.log(nombres)