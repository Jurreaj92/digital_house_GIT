const autos = require ("./autos.js")

const concesionaria = {
   autos: autos,
 
   buscarAuto:   
   // autos.filter(function(patente){
   //    return autos.patente === patente
   function filtrarPorPatente(patente){
    const autosFiltrados = autos.filter(function(patente){
        return autos.patente == patente;
    });
    return autos;
   }
}

// console.log(autosFiltrados)
console.log(concesionaria.buscarAuto("JJK116"))