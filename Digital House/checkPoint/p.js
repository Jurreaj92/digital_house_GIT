// const autos = [
//     {
//        marca: 'Ford',
//        modelo: 'Fiesta',
//        precio: 150000,
//        km: 200,
//        color: 'Azul',
//        cuotas: 12,
//        anio: 2019,
//        patente: 'APL123',
//        vendido: false
//    },
//    {
//        marca: 'Toyota',
//        modelo: 'Corolla',
//        precio: 100000,
//        km: 0,
//        color: 'Blanco',
//        cuotas: 14,
//        anio: 2019,
//        patente: 'JJK116',
//        vendido: true
//    }
//    ];

const autos = require ("./autos.js")

let concesionaria = {
   autos: autos,
 
   buscarAuto:  

   function buscarAuto(patente){
    return autos.filter(function(auto){
        if (auto.patente === patente){
        return auto}
        
    })
    return null
   }
}
   console.log(buscarAuto("APL123"));
   console.log(buscarAuto("ASDASD"));