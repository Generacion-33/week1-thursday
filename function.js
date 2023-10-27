//FUNCTION

//En JS, una funcion es un bloque de codigo, con el objetivo de poder reutilizarlo y que nos resuelva una tarea especifica. Una funcion nos permite encapsular codigo y poder ejecutarlo cuando lo necesitemos.

//SINTAXIS

/**
 * function nombreDeLaFuncion(parametros:no son obligatorios){
      //intrucciones
  }

  -function: es una palabra reservada en js. Pero es una palabra clave, para declarar la misma
  -nombreDeLaFuncion: el rol es identificar a la funcion 
  -parametros, en si no son obligatorios, puede haber funciones que lleven parametros, como otras que no . Esos parametros, dentro de la funcion de comportan como variables. 
  -{}: colocare aca dentro el bloque de codigo que ejecutara la funcion -> //intrucciones

  -/////////////////////////EJECUCION///////////////////////
  -Para ejecutar una funcion, hago esto-> nombreDeLaFuncion()
  -Argumentos: En caso de que la funcion lleve parametros, los debere pasar al momento de ejcutar la funcion: nombreDeLaFuncio(argumento1, argumento2....)

 */

function bienvenidoRecreo() {
  //intrucciones
  console.log('Que bueno que has llegado, te espere mucho 😅😅');
}

bienvenidoRecreo() //ejecucion de la funcion



//ALCANCE DE VARIABLES

//alcance local
function alcanceLocal() {
  let saludarDentroDeLaFuncion = 'Hola desde adentro de la funcion'
  console.log(saludarDentroDeLaFuncion);
}

alcanceLocal() //ejecucion de la funcion 
//console.log(saludarDentroDeLaFuncion); //esto no es posible: ReferenceError: saludarDentroDeLaFuncion is not defined ❌


//alcance global

let saludarDesdeAfueraDeLaFuncion = 'Hola desde afuera de la funcion'

function saludar() {
  console.log(saludarDesdeAfueraDeLaFuncion);
}

saludar()


//PARAMETROS
console.log('---PARAMETROS---');

function sumar(num1, num2) {
  console.log(num1 + num2);
}

let numero = 10
sumar(numero, 20)
sumar(3, 6)
sumar() //NaN

//VALORES PREDEFINIDOS
function sumarConValoresPredefinidos(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

sumarConValoresPredefinidos(1, 3)
sumarConValoresPredefinidos()
sumarConValoresPredefinidos(10)



//FUNCIONES CON RETORNO

console.log('FUNCIONES CON RETORNO');

function sumarNumeros(num1 = 0, num2 = 0) {
  return num1 + num2
}

let suma = sumarNumeros(10, 20) // -> 30
console.log(suma); //30

console.log(sumarNumeros(10, 20)); //30


let nuevaSuma = suma * 2
console.log(nuevaSuma);


function sumarNumeros2(num1 = 0, num2 = 0) {
  let suma = num1 + num2
  suma - 2
  suma * 3
  return suma
  console.log('Hola');
  let nuevaVariable = '12'
  //todo lo que ponga debajo del return sera ignorado
}


function previoAlosEjercicios(quantity = 20) {
  return `Son ${quantity} ejercicios los que tendran que resolver ✅`
}


let mensaje = previoAlosEjercicios()
console.log(mensaje);




























