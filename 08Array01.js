//Titulo: 08Array01

var array=["Luis",17,11,96];

window.alert("Primer array en javascript "+array);

//array anidado

var array2=[["Luis",171196] , ["Paola",180998]];
window.alert("Array anidado "+array2);

//imprimir indices

window.alert("Posicion 1 de array ="+array[0]);
window.alert("Posicion 2 de array ="+array[1]);
window.alert("Posicion 3 de array ="+array[2]);

//sumatoria de arreglo de numero 
var suma= array[1]+array[2]+array[3];
window.alert("El resultado de sumar el array es:"+suma); // el resultado fue 124 por sumar 17+11+96

//sumatoria con cadena
suma= array[0]+array[2]+array[3];
window.alert("El resultado de sumar el array es:"+suma);/* el reultado fue Luis1196 porque no suma cadena de
caracteres*/

//Actualizar valor o agregar
array[4]=10; //agregamos posicion 4 10
array[3]=1996; //modificamos posicion 3 de 96 a 1996
window.alert("Primer array modificado "+array);

//agregar o modificar a un arreglo anidado 
var array3=[10,20,30];
window.alert("array anidado sin modificar "+array3);
array3[0]=[1,2,3];
window.alert("array anidado modificado "+array3);