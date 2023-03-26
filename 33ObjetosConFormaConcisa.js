//Titulo:33ObjetosConFormaConcisa.js

//Creamos una funcion flecha para crear un objeto
//despues de la flecha abrimos llaves {}
const crearUsusairo=(nombre,edad,lengua)=>{
return {
    nombre: nombre,
    edad: edad,
    lengua: lengua,
    };
};
//window.alert(crearUsusairo("Luis",26,"Español"));
//al usar window.alert saldra el mensaje [object Object] dando a entender que funciona
//esto se puede procesar mejor en la terminal y en lugar de window.alert() usar console.log()
console.log(crearUsusairo("Luis",26,"Español"));

//Ahora creamos un objeto colocando parentesis antes y despues de los corchetes
const crearUsusairo2=(nombre,edad,lengua)=>({nombre,edad,lengua});
//tenemos entonces que la funcion creara un objeto con los mismo nombres que tenemos como argumentos 
window.alert(crearUsusairo2("Paola",24,"Español"));