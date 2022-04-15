let a = 0
let b = 0

function dividir (a,b){
    if ( b === 0 ){
        return ("No se puede dividir por cero")
    }
    else {
        return a/b
    }
}
module.exports = dividir;

// console.log(dividir(1,2))