//clase #5. Clases, módulos y generadores
//Las clases nos facilitan la vida como programadores y en el caso en particular de JS, nos permite trabajar con programación orientada a objetos (POO)

class calculator {
    //introducimos la palabra class con lo cual indicamos que estamos definiendo una clase 
    constructor() { 
        // las clases necesitan un constructor, en este asignaremos las variables DENTRO DEL SCOPE GLOBAL
        this.valueA =0;
        this.valueB= 0;
    }

    sum(valueA, valueB) {
    //sum vendría siendo un método, al cual le pasaremos los dos valores A y B
    this.valueA =valueA //con esto estoy asignando las variables que construi previamente a los valores que recibe
    this.valueB =valueB

    return this.valueA + this.valueB    //aquí se hace la suma de dichos valores
    }

}

const calc = new calculator();

//Tener en cuenta que para llamar a una clase con una variable, es necesario el "new", explicitamente necesario e indispensable. Si se coloca solo el nombre de la clase, esto no va a funcionar. console.log(calc.sum (5,5));

//Ahora, ¿cómo trabajamos con módulos? //Para esto, crearemos otro archivo
//Ahora, veremos generators
//tiene una sintáxis especial
//puede utilizarse para una serie de fibonacci, por ejemplo 

function* helloWorld() {
    if (true) {
    yield 'Hello';
    }

    if
    (true) {
    yield 'World'
    }

};

const generatorHello = helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


/*
//Aquí tendremos lógica separada de nuestro archivo principal

const hello = () => { return 'hello'
} 

//defino una función arrow export default hello;
//con esta linea puedo exportar el módulo y llamarlo donde lo necesite

import (hello } from './module';

//con esta linea importamos el módulo
//esto significa que podemos tener funciones que hagan ciertas ta reas en especifico (como llamar a una API), fuera de nuestro docu mento principal y simplemente importarlas 

hello();
*/