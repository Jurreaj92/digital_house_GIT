const autos = require ("./autos.js")

const concesionaria = {
   autos: autos,
 
   buscarAuto:   
   // autos.filter(function(patente){
   //    return autos.patente === patente
   function filtrarPorPatente(patente){
    const autosFiltrados = autos.filter(function(autos){
        return autos.patente == patente;
    });
    return autosFiltrados;
   }
}

console.log(autosFiltrados)
console.log(autos)