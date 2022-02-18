// Segunda sesion

// let time = 29; // Este es el valor de la hora del día

// let greeting;

// if (time >= 0 && time < 12) {
//     greeting = "Good morning!";
// } else if (time >= 12 && time <= 19) {
//     greeting = "Good afternoon";
// } else if (time >= 20 && time < 24) {
//     greeting = "Good evening";
// } else {
//     greeting = "Hora no válida"
// }

// console.log(greeting)

// let day = 7;

// let text;

// switch (day) {
//     case 0:
//         text = 'Domingo'
//         break;

//     case 1:
//         text = 'Lunes'
//         break;

//     case 2:
//         text = 'Martes'
//         break;

//     case 3:
//         text = 'Miércoles'
//         break;

//     case 4:
//         text = 'Jueves'
//         break;

//     case 5:
//         text = 'Viernes'
//         break;

//     case 6:
//         text = 'Sabado'
//         break;

//     default:
//         text = 'Error de días sleccioado'
//         break;
// }

// console.log(text)

// let speed = 1;
// let message = true;

// // if (speed > 110) {
// //     message = 'Vas muy rápido'
// // } else {
// //     message = 'estas respetando el limite establecido'
// // }



// // message = '0' ? 'Vas muy rápido' : 'estas respetando el limite establecido'

// message = speed && message ? 'gracias por registrar tu velocidad' : 'registra tu velocidad'

// console.log(message)


// for(let i = 0; i < 10; i++) {
//     console.log('Hello world!')
// }

// let index = 0;
// while(index < 10) {
//     console.log('Hello world!');
//     index++;
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 5 === 0) {
//         console.log('Número divisible entre 5', i)
//     }
// }

// for(let counter = 2; counter <= 100; counter++){
//     let isPrime = true;

//     for(let i = 2; i <= counter; i++) {
//         if(counter % i === 0 && i !== counter){
//             isPrime = false;
//         }
//     }

//     if (isPrime) console.log('Numero primo', counter)

// }

// LEcción 3

// Funciones

// function myFunction(param1, param2) {
//     // codigo que quiera ejecitar
// }

// const myFunction = (param1, param2) => {
//     // codigo que quiero ejecutar
// }

// let years = 1969;

// function calculateAge(birthYear) {
//     let age = 2022 - birthYear;
//     return age;
// }

// let johnAge = calculateAge(years);

// function yearsUntilRetirement(year, name) {
//     let age = calculateAge(year);
//     let retirement = 67 - age;
//     console.log(name, ' retires in ', retirement, ' years');
// }

// yearsUntilRetirement(years, 'Pepe');

// function exponential (base, exp){
//     let result = base;
//     for(let i = 1; i < exp; i++){
//         result = result * base;
//     }
//     return result;
// }

// const exponential = (base, exponente) => {
//     let result = 1;

//     for(let i = 0; i < exponente; i++) {
//         result *= base;
//     }

//     return result;
// }

// console.log('pot 2,2 ', exponential(2,2));
// console.log('pot 3,2 ', exponential(3,2));
// console.log('pot 2,3 ', exponential(2,3));
// console.log('pot 3,3 ', exponential(3,3));
// console.log('pot 4,2 ', exponential(4,2));
// console.log('pot 4,3 ', exponential(4,3));
// console.log('pot 4,3 ', exponential(4,0));

// function chicken() {
//     return egg();
// }
// function egg() {
//     return chicken();
// }

// console.log(chicken() + " came first.");

// let square = function(number) {
//     return number * number;
// }

// let sqrOffFour = square(4);

// console.log(sqrOffFour)

// let whatDoYouDo = function(job, name) {
//     switch (job) {
//         case 'developer':
//             return name + ' develops cool things.';

//         case 'designer':
//             return name + ' design awesome things.';

//         default:
//             return name + ' do something else.'
//     }
// }

// console.log(whatDoYouDo('developer', 'Pepe'))

// let factorial = function fac(number) {
//     return number < 2 ? 1 : number * fac(number - 1);
// }

// console.log(factorial(5))

// (function logName(name) {
//     console.log(name)
// })('John Doe')

// function getLargerInt(number1, number2) {
//     // if(number1 > number2) {
//     //     return number1;
//     // } else {
//     //     return number2;
//     // }

//     return number1 > number2 ? number1 : number2;
// }

// console.log(getLargerInt(8, 2))

function fibonacciSequence(num) {

}


// para 1 = 1
// para 0 = 1
// para 2 = 1 + 1 resultado 2
// para 3 = 1 + 2 rsultado 3
// para 4 = 2 + 3 resultado 5


// function fibonacci(limit){
//     let f = 1;

//     if (limit > f) {
//         return fibonacci(limit - 1) + fibonacci(limit - 2);
//     } else {
//         return f;
//     }

//     // return limit > f ? fibonacci(limit - 1) + fibonacci(limit - 2) : f;
// }


// function sequenceFibonacci(limit) {
//     if(limit < 0) return console.log('El limite solo puede ser positovo desde cero')

//     for(let i = 0; i < limit; i++) {
//         console.log(fibonacci(i))
//     }
// }

// sequenceFibonacci(13);

// function printFarmInventory(cows, chickens) {
    // let cowString = String(cows);

    // while (cowString.length < 3) {
    //   cowString = "0" + cowString;
    // }

    // console.log(`${cowString} Vacas`);

//     let chickenString = String(chickens);

//     while (chickenString.length < 3) {
//       chickenString = "0" + chickenString;
//     }

//     console.log(`${chickenString} Pollos`);
// }

// function imprimirCantidadesConCerosALaIzquierda(number, label) {
//     let numberString = String(number);

//     while (numberString.length < 3) {
//       numberString = "0" + numberString;
//     }

//     console.log(`${numberString} ${label}`)
// }

// function printFarmInventory(cows, chickens, pigs) {
//     imprimirCantidadesConCerosALaIzquierda(cows, 'Vacas')
//     imprimirCantidadesConCerosALaIzquierda(chickens, 'Pollos')
//     imprimirCantidadesConCerosALaIzquierda(pigs, 'Puerquitos')
// }

// printFarmInventory(7, 10, 8)

// function zeroPad(number, width) {
//     let string = String(number);

//     while (string.length < width) {
//       string = "0" + string;
//     }

//     return string;
// }

// function printFarmInventory(cows, chickens, pigs) {
//     console.log(`${zeroPad(cows, 3)} Vacas`)
//     console.log(`${zeroPad(chickens, 3)} Pollos`)
//     console.log(`${zeroPad(pigs, 3)} Puerquitos`)
// }

// printFarmInventory(7, 10, 8)


// const cambios = async function retriveData() {
//     await fetch('https://api.weatherapi.com/v1/current.json?key=54d31babced041509ac221222200409&q=London&aqi=no')
//         .then(resp => resp.json())
//         .then(data => {
//             results = data
//             console.log(results)
//         })
//     return results;
// }


// console.log(cambios())

// let array = [1, 3, 4, 6, 8, 9, 5, 9] //array inicial
// // [2, 6, 8, 12, 16, 18, 10, 18] // array final

// function multiplicaPorDos(array) {
//     let multiplica = []

//     for(let i = 0; i < array.length; i++) {
        // array[i] *= 2 // array[i] = array[i] * 2
        // multiplica.push(array[i] * 2);
//     }

//     return multiplica;
// }

// console.log(multiplicaPorDos(array)) //array final
// console.log(array) // arrayinicial

// let calificaciones = [10, 9, 2, 6, 9, 5, 8, 7, 6, 8]

// function promedioCalificaciones(calif) {
//     let acumulador = 0;

//     for(let i = 0; i < calif.length; i++) {
//         acumulador += calif[i];
//     }

//     return acumulador / calif.length;
// }

// console.log(promedioCalificaciones(calificaciones))

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: {
//         dia: 15,
//         mes: 09,
//         anio: 1990
//     }
// }

// john.firstName = 'Jane'

// john['firstName'] = 'Max'

// console.log(john.firstName);
// console.log(john['firstName']);

// let nombreCompleto = `${john.firstName} ${john.lastName}, fecha de nacimiento ${john.birthYear.dia}/${john.birthYear.mes}/${john.birthYear.anio}`

// console.log(nombreCompleto);

// let auto = {
//     brand: 'Nissan',
//     model: 'Sentra',
//     year: 2020
// }

// // // [
// //     ['brand', 'Nissan'],
// //     ['model', 'Sentra'],
// //     ['year', 2020]
// // ]  // Resultado esperado

// function keyValuePairs(objeto) {
//     let keys = Object.keys(objeto);
//     let pares = [];

//     for(let i = 0; i < keys.length; i++) {
//         pares.push([keys[i], objeto[keys[i]]]);
//     }

//     return pares;
// }

// console.log(keyValuePairs(auto));

// function objetoFromArray(array) {
//     let objeto = {}

//     for( let i = 0; i < array.length; i++) {
//         objeto[array[i][0]] = array[i][1]
//     }

//     return objeto;
// }

// // let arregloDeObjeto = keyValuePairs(auto);

// let objetoFromArray = Object.fromEntries(arregloDeObjeto)

// console.log(objetoFromArray(keyValuePairs(auto)))

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function(birthYear) {
//         let today = new Date();
//         let year = today.getFullYear();

//         return year - birthYear
//     }
// }

// let conejo = {
//     color: 'blanco',
//     tamanio: 'pequeño',
//     raza: 'leporino',
//     brinca: function() {
//         console.log('estoy broincando!')
//     },
//     comer: function() {
//         console.log(('como zanahorias!'))
//     }
// }

// let john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     calculateAge: function() {
//         let today = new Date();
//         let year = today.getFullYear();

//         this.age = year - this.birthYear
//     }
// }

// console.log(john)
// console.log(john.calculateAge());
// console.log(john)

let singers = [
    { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
    { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
    { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
    { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
  ];

function pluck(list, propertyName) {
    let values = [];

    for(let i = 0; i < list.length; i++) {
        values.push(list[i][propertyName])
    }

    return values;
}

console.log( pluck(singers, 'name') );
// ["Steven Tyler", "Karen Carpenter", "Kurt Cobain", "Chris Cornell"]

console.log( pluck(singers, 'band') );
// ["Aerosmith", "The Carpenters", "Nirvana", "Soundgarden"]

console.log( pluck(singers, 'born') );
// [1948, 1950, 1967, 1964]