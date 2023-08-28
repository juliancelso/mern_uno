const nato = require('./mi-modulo-nato.js');
const prompt = require('prompt-sync')({sigint: true});
const frase = prompt('Ingrese una frase: ');
console.log('En NATO, se la deletrea: ' + nato.deletrear(frase));