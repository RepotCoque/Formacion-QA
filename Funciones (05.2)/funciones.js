/*

// Ejercicio 1

function imprimirHola() {
    for (let i = 0; i < 3; i++) {
        console.log("Hola");
    }
}

// Llama a la función para imprimir "Hola" 3 veces
imprimirHola();

*/

/*

// Ejercicio 2

console.log("Vas a ver 5 Hola");

function imprimirHola5(){
    for (let i = 0; i < 5; i++) {
        console.log("Hola");
    }
}
imprimirHola5();
console.log("Vas a ver 3 Hola");

function imprimirHola3(){
    for (let i = 0; i < 3; i++) {
        console.log("Hola");
    }
}
imprimirHola3();

*/

/*

// Ejercicio 3

function sumar(a, b) {
    var resultado = a + b;
    console.log("El resultado de la suma es: " + resultado);
  }
  
  // Ejemplo de uso:
  var parametro1 = 5;
  var parametro2 = 7;
  
  sumar(parametro1, parametro2);
  

*/

/*

// Ejercicio 4

// Función que suma dos parámetros y devuelve el resultado
function sumar(a, b) {
    return a + b;
  }
  
  // Solicitar al usuario dos números
  var numero1 = parseFloat(prompt("Introduce el primer número:"));
  var numero2 = parseFloat(prompt("Introduce el segundo número:"));
  
  // Llamar a la función y asignar el resultado a una tercera variable
  var resultadoSuma = sumar(numero1, numero2);
  
  // Mostrar el resultado en la consola
  console.log("El resultado de la suma es: " + resultadoSuma);
  
  

*/

/*

// Ejercicio 5

// Función que compara dos números y devuelve true si el primero es mayor
function esPrimerNumeroMayor(num1, num2) {
    return num1 > num2;
  }
  
  // Solicitar al usuario dos números
  var numero1 = parseFloat(prompt("Introduce el primer número:"));
  var numero2 = parseFloat(prompt("Introduce el segundo número:"));
  
  // Llamar a la función y verificar si el primer número es mayor
  if (esPrimerNumeroMayor(numero1, numero2)) {
    console.log("El primer número es más grande.");
  } else {
    console.log("El primer número no es más grande.");
  }
  
*/

/*

// Ejercicio 6

// Función que divide el primer número por el segundo y devuelve el resultado
function dividirNumeros(numero1, numero2) {
    return numero1 / numero2;
  }
  
  // Bucle para repetir el proceso hasta que el usuario introduzca 0 como segundo número
  while (true) {
    // Solicitar al usuario dos números
    var numero1 = parseFloat(prompt("Introduce el primer número:"));
  
    // Salir del bucle si el usuario introduce 0 como segundo número
    if (numero1 === 0) {
      break;
    }
  
    var numero2 = parseFloat(prompt("Introduce el segundo número (0 para salir):"));
  
    // Salir del bucle si el usuario introduce 0 como segundo número
    if (numero2 === 0) {
      break;
    }
  
    // Llamar a la función y mostrar el resultado en un alert
    var resultado = dividirNumeros(numero1, numero2);
    alert("El resultado de la división es: " + resultado);
  }
  

*/

/*

// Ejercicio 7

// Definir la función esPar
function esPar(numero) {
    return numero % 2 === 0;
}

// Pedir al usuario que ingrese un número mediante prompt
var numeroIngresado = prompt("Ingresa un número:");

// Convertir el valor ingresado a un número
var numero = parseInt(numeroIngresado);

// Verificar si el número es par utilizando la función esPar
if (esPar(numero)) {
    alert("El número ingresado es par.");
} else {
    alert("El número ingresado no es par.");
}

*/

// /*

// Ejercicio 8

// Definir la función esPar
function esPar(numero) {
    return numero % 2 === 0;
}

// Pedir al usuario que ingrese un número mediante prompt
var numeroIngresado = prompt("Ingresa un número:");

// Convertir el valor ingresado a un número
var numero = parseInt(numeroIngresado);

// Verificar si el número es par utilizando la función esPar
if (esPar(numero)) {
    alert("El número ingresado es par.");
} else {
    alert("El número ingresado no es par.");
}

// */