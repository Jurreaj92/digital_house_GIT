const fede = require("./fede_garcia");
const nico = require("./Nico_calvinio");
const emi = require("./Emiliana_Baglioni");
const zodiac = require("zodiac-signs")("en");


/* console.log("Hola, soy " + nico[0] + ". Me gusta " + nico[1] + " y soy de " + nico[2]);
console.log("Hola, soy " + emi[0] + ". Me gusta " + emi[1] + " y soy de " + emi[2]); */

function saludar(personas) {
    for(let i = 0; i < personas.length; i++){
        let p = personas[i];
        console.log("Hola, soy " + p[0] + ". Me gusta " + p[1] + " y soy de " + p[2] + ". Mi signo del zodiaco es: " + zodiac.getSignByDate(p[3]).symbol);
    }
}

saludar([fede, nico, emi]);





