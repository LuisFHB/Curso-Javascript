//Titulo: 21NumerosAleatorios.js

//Num decimal----------------------------
/*
//Por medio de funcion
function numDecimalAleatorio(){
    return "Primer decimal"+Math.random();
}
window.alert(numDecimalAleatorio());

//Por medio de variable
var a = Math.random();
window.alert("Segundo decimal"+a);
*/

//Numero entero entre 0  y 19-----------------------------
/*
//Por medio de funcion
function numEnteroAleatorio(){
    return "Primer entero"+Math.floor(Math.random()*20);
    //floor solo toma el numero entero y deja a un lado el decimal
}
window.alert(numEnteroAleatorio());

//Por medio de variable
var b = Math.floor(Math.random()*20);
window.alert("Segundo entero: "+b);
*/

//Ejercicio numero aleatorio dependiendo del limite que se defina en un bucle for
/*
function numAleatorio(limiteSuperior){
    return Math.floor(Math.random()*(limiteSuperior+1));
}
for(var i=0; i<=5;i++){
window.alert(numAleatorio(10));
}
*/

var a =1;
var b= 6;

function rangoAleatorio(limiteSuperior,limiteInferior){
    return Math.floor(Math.random()*(limiteSuperior-limiteInferior+1))+limiteInferior;
}
for(var i=0; i<=5;i++){
    window.alert(rangoAleatorio(a,b));
}

