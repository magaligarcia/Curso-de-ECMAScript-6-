///// clase #4 Arrow functions, Promesas y Parámetros en objetos
//Propiedad de objetos mejorada
//defininiremos algunas variables primero

let name = 'jeff';
let age = 24;

//antes de ecmascript 6

obj = { name: name, age:age };

//ahora con ecmascript 6

obj2 = {name, age};
//ahora, se mostrara en consola para verificar que efectivamente se creo el objeto
console.log(obj2);

//Ahora veremos las Arrow function
//Estas tienen una sintaxis muy reducidad y permiten trabajar con un This no vinculable 
//Pero ¿como funcionan?

const names = [

{name: 'Jeff', age: 24},
{name: 'Aleja',age: 21}

]

//como pudimos ver, vamos a trabajar con un array de dos objetos, dichos objetos son anonimos.
// Antes de EcmaScript6

let listofNames = names.map (function(item) { 
    console.log(item.name) 
})

//Defino el nombre de mi variable en la que voy a trabajar (listo fNames), ahora, utilizo el método .map. Por si no recuerdan, .map me permite crear un nuevo array dependiendo de la función a la qu e llame. Generalmente, se usaban funciones anónimas

//Ahora, con Ecmascript 6

let listOfNames2 = names.map (item => console.log(item.name));

//Algo caracteristico e indispensable de las arrow function es el (=>) esto inmediatamente nos indica que estamos trabajando con un a arrow function. Ahora bien, es posible observar que en este tip o de funciones nos ahorramos defininir una función anónima y es posible expresarlo todo en una sola linea. En este caso en particular, esta función nos mostrará en consola todos los nombres de nuestro array.

//Otra forma de escribir las arrow funtion: 

const listOfNames3 = (name, age, country) => {
 //...
}

//tener en cuenta que en esta forma, trabajamos con las keys que necesitamos de los objetos. Y los (...) nos indica que ahí va el bloque de código de la función que necesitamos que haga.

//Ahora, otra forma sería:

const listOfNames4 = name => {
//...
} 

// este último se usa solo cuando voy a trabajar con un único atributo, de forma que me puedo evitar colocar los parentesis

//Finalmente, la última sería

const square = num => num* num;

//Ahora, trabajaremos con promesas 
//JS no es sincrónico, significa que no puede haber más de un evento que se esté ejecutado.

//Para solucionar el problema del asincronismo en JS, además del Callback Hell nacen las promesas. Básicamente, una promesa en JS nos indica que algo va a pasar.

//PILAS, JS es asincrónico todo el tiempo. Debes comprender muy b ien esto para entender como tu código va a correr y no toparte co n algo inesperado en tu programa.
//trabajremos con arrow functions

const helloPromise = () => { 
    return new Promise ((resolve, reject) => { 
        if (true) { resolve('Hey!');
    } else {
    reject('Ups!');
    }
});

}

//Aclaremos un poco:
//Las promesas tienen 3 estados: pending, resolve, reject.
//Resolve nos quiere decir que la promesa se cumplió, mientras qu e reject es que no. Para poder verificar si se cumplió o no acudi omos al uso de condicionales (if, else.)

helloPromise() //esta linea me permite ejecutar la promesa
    .then (response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

//them ne permite obtener la respuesta (pueden ser varios) 
//catch me permite obtener el error en caso de que no se cumpla la promesa