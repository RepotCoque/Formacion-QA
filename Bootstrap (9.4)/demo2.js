//Variables

// 1.Utilizar con sentido y fácil pronunciación

const fechcumple = "04/04/1990";
const fechaCumple = "04/04/1990";

// 2.Mismo vocabulario para el mismo tipo de variables

conseguirInformacionUsuario
conseguirDatoCliente
conseguirRegistroUsuario

// 3.Nombres que puedan ser buscados

setTimeout(varialbe, 1782641);

const milisegundos_dia = 1824134;

setTimeout(variable, milisegundos_dia);

// 4.Utilizar variables explicativas

guardarCP

// 5.No añadir contexto innecesario

const Coche = {
    marcaCoche: "KIA",
    modeloCoche: "Sportage",
    colorCoche: "gris"
}

function pintarCoche(coche){
    coche.colorCoche = "rojo"
}

const coche = {
    marca: "KIA",
    modelo: "sportage",
    color: "gris"
}

function pintarCoche(coche){
    coche.color = "rojo"
}

// FUNCIONES

// 1.Cuanto menos argumentos/parametros mejor. 2 o menos

function pintarCoche(coche){

}

// 2.Las funciones deberian decir lo que hacen y hacer una sola cosa.

function cambiarRueda(coche){
    coche.rueda = "Bridgestone";
}

// ELIMINAR CODIGO DUPLICADO

// EVITAR VARIABLES GLOBALES

let num1;
let num2;
let total = calcular();

function calcular(){
    num1 = 10;
    num2 = 50;
    calculo = num1 + num2;
    return calculo
}

// CONSISTENCIA

const DIA_SEMANA = 5;
const DIA_MES = 10;

function imprimir(){

}

function verCard(){

}

// COMENTARIOS

// 1- SOLO COMENTAMOS LO COMPLEJO
tolowerCase()

// 2- NO DEIXAR COMENTARIS AL REPOSITORI