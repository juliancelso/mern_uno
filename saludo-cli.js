const prompt = require('prompt-sync')({sigint: true});
const name = prompt('Como te llamas? ');
console.log('Hola, ' + name + '!');