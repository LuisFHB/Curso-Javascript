//Titulo: 09ArrayMatriz.js
//EJEMPLO 1 imprimir matriz
/*

var array=[[1,2,3],[4,5,6],[7,8,9]]

//imprimimos la pocision 00 y 11

window.alert(array[0][0]);
window.alert(array[1][1]);
*/

//EJEMPLO 2 metodo PUSH Y POP, AGREGAR Y QUITAR ULTIMA POSICION
/*
//Agregar UN ELEMENTO A UN ARRAY CON .PUSH Y REMOVER CON .POP 
var estaciones=["invierno","Primavera","Verano"];
window.alert(estaciones);
estaciones.push("otoño");
window.alert(estaciones);
// si solo usamos nombreArray.pop(); solo eleiminamos el ultimo factor, pero si ademas lo asignamos a una 
//variable podemos usar esa variable despues por ejemplo en estacion4 se guardo otoño
var estacion4=estaciones.pop();
window.alert(estaciones);
window.alert(estacion4);
*/

//EJEMPLO 3 METODO SHIFT UNSHIFT AGREGAR Y QUITAR PRIMERA POSICION
/**/
var array3= ["invierno","Primavera","Verano","Otoño"];
window.alert(array3);
array3.shift(); //se elimina invierno
window.alert(array3);
array3.unshift("invierno");//regresamos invierno
window.alert(array3);