//Titulo: 32PlantillasDeCadenas.js

/*A la hora de imprimirpodemos cambiar las comillas "" para escribir y usar acento invertido ` 
para colocar texto (alt+tecla esta a un lado del boton borrar)
podemos cambair el concatenamiento por ${} dentro de las llaves podemos escribir variables o 
podemos escribir valores diferentes*/

//Ejemplo variables
/*
var nombre= "Luis";
var  edad=26;
window.alert(`Nombre: ${nombre} y tengo ${edad}`);

//Ejemplo array
var array=[1,2,3,4];
window.alert(`El arreglo es ${array}`); //se imprime asi= 1,2,3,4
window.alert(`El arreglo es ${JSON.stringify(array)}`); //Se imprime con corchetes= [1,2,3,4]
*/

//Ejemplo con objeto
var persona ={
    nombre: "Paola",
    edad: 24
}
 //declaramos variable con mensaje
const saludo= `Hola mi nombre es ${persona.nombre} y tengo ${persona.edad}`;
window.alert(saludo);