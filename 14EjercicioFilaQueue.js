//Titulo: 14EjercicioFilaQueue.js

/*Crea un programa que modifique un arreglo(array) eliminando el primer valor y 
agregando uno nuevo ademas de mostrar el orden antes y despues */

function proximoEnLaFila(arreglo,lugar){
    arreglo.push(lugar); //Agregamos lugar al final del array
    return arreglo.shift(); //Quitamos y retornamos el primer valor del array
}
//definimos nuestro arreglo
var array=[1,2,3,4,5];
//imprimimos nuestro array antes de modificar
window.alert("Antes"+ JSON.stringify(array));
//Con JSON.stringify convertimos el array en una cadena 

//mandamos array, nuevo lugar  y tambien imprimimos el lugar que se elimina
window.alert(proximoEnLaFila(array,6));

//imprimimos el nuevo array
window.alert("Despues"+ JSON.stringify(array));