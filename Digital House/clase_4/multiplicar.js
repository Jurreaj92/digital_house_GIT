let a = 0
let b = 0

function multiplicar (a,b){
    if (a === 0 || b === 0 ){
        return (0)
    }
    else {
        return a*b
    }
}
module.exports = multiplicar;

// console.log(multiplicar(1,0))