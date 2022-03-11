
//Clase #3. LET y CONST, Multilínea, Spread Operator y Desestructuración

//concatenar

let hello = "Hello";
let world = "World";
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

//Antes de ES6 pasaba esto

let Elsa = "Libre soy, libre soy....no puedo ocultarlo \n " + "más, libre soy, libre soy, se fue la chica ideal."; //esto funcionaba, sin embargo, no es una opción muy óptima que d igamos

//Ahora, usando ES6

let Elsa2 = `Voy a probar que puedo hacer sin limitar mi proceder, ni mal ni bien que obedecer
jamaaaaaaaaaaaaaaaaaaas`;

//Ahora, para verificar que ambas formas funcionan usaremos console.log 
console.log(Elsa);

console.log(Elsa2);

//Nota1: Notese que si bien el uso del (:) no es necesario en estos casos, lo usamos porque hace parte de las buenas practicas de programación para que los demás vean el código lo más legible po sible.

//Ahora, crearemos un objeto wuw (los amo)

let person = { 

'name': 'Jeff',

'age': 24,

'country': 'CO'

}

//Del curso de fundamentos de JS, sabemos que al usar la notación person.name (por ejemplo), llamaremos al atributo correspondiente a la key name del objeto person
console.log(person.name, person.age);

//ahora, vamos a desestructurar nuestro objeto

let { name, age} = person; 

//con la anterior linea lo que hicimos fue desestructurar nuestro objeto, esta notatción es súper útil porque podemos elegir cuáles keys necesitamos del mismo objeto y ya puedo proceder a desplegar las en el console log sin necesidad de utilizar (objeto.key)

console.log(name, age);

//Ahora vamos a trabajar con arrays

let team1= ['Oscar', 'Julian', 'Ricardo']; 
let team2= ['Valeria', 'Yesica', 'Camila'];

//Ahora, queremos tener un array que contenga a team 1 y team2. pero además de esto, agregar un nuevo miembro que sería David. Par a esto, usaremos el (...), esto nos permite traer un array comple to let education ['David', ...teaml, ...team2];

let education = ['David', ...team1, ...team2];
console.log(education);

//Originalmente se usaba var para asignar variables 
//Podemos ver que usamos mucho LET, pero ¿por qué?. Bueno, LET se usa para el scope, es decir, se define para el bloque de código en el cual se va a usar

{ 
    var global = "Global Var";
}

{
let globalLet = 'Global Let';
console.log(globalLet);
}

console.log(global);

//¿Por qué no usar VAR? JS es un lenguaje debilmente tipado, es decir, cuando definimos una variable con VAR, podemos cambiar su valor en el transcurso del código y con esto podríamos ocasionar d istintos BUGS y errores en nuestro programa. Por dicho motivo es mejor usar LET Y CONST

const a= 'b';

a='a';

//a diferencia de LET, const se puede utilizar en el scope globa l, sin embargo, este no se deja modificar como si lo hacia VAR. Cu ando intentamos hacerlo, este nos muestra el valor inicial que le pusimos a nuestra variable y posteriormente un error que correspo nde a cuando quisimos reasianarle otro valor.
console.log(a);