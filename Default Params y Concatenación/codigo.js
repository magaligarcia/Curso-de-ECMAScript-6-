
//Primero vamos a trabajar como se hacia antes de ES6 function newFunction (name, age, country) { var name = name || 'Andres';

function newFunction(name, age, country){ 
var name = name || 'Andres';
var age = age || 28;
var country = country || 'BR';
console.log(name, age, country);

}

//Ahora, con ES6 se realiza así

function newFunction2 (name='oscar', age=32, country="CO") {
console.log(name, age, country);
}

//para llamar la función hay dos formas: 
//para el primer caso, hay funciones que toman los atributos por si mismos, entonces se pueden dejar vacias

newFunction2();
newFunction2('Jeff', '24', 'CO');

//Ahora veremos concatenación antes de ES6

let hello = "Hello";
let world = "World"; 
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//Ahora, con los templates se hace más fácil concatenar, es ne cesario ubicar en nuestros teclados las comillas invertidas 
let epicPhrase2= `${hello} ${world}`; 
console.log(epicPhrase2);

//nota, tener en cuenta que cuando escribo $() estoy trayendo el valor de dicha variable, pero esto solo funciona cuando us o las comillas invertidas