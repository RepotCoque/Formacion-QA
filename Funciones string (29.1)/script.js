/*

//Ejercicio 1

// Crear un array
var miArray = [];

// Asignar 10 valores diferentes
miArray[0] = 5;
miArray[1] = "Hola";
miArray[2] = true;
miArray[3] = 3.14;
miArray[4] = "Mundo";
miArray[5] = false;
miArray[6] = 7;
miArray[7] = "JavaScript";
miArray[8] = 9.8;
miArray[9] = "Array";

// Mostrar los 10 valores en pantalla
for (var i = 0; i < miArray.length; i++) {
    console.log(miArray[i]);
}

*/


//Ejercicio 2

// Crear un array vacío
var miArray = [];

// Pedir al usuario que ingrese tres strings
for (var i = 0; i < 3; i++) {
    var userInput = prompt("Por favor, ingresa un numero:");
    miArray[i] = userInput;
}

// Mostrar en pantalla en el orden: posición 1, posición 2 y posición 0
console.log("Posición 1:", miArray[1]);
console.log("Posición 2:", miArray[2]);
console.log("Posición 0:", miArray[0]);

