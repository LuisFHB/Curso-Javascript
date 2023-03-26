//Titulo:19Objetos.js

//crear un objeto con atributos
var miPerro = {
    "nombre": "Luna", 
    "edad": 8,
    "peso": 5.5,
    "raza": "Schnauzer",
     1 : ["bonita","gordita","alegre"] 
};

 //consulta con punto nombreObjeto.Atributo
 /*
window.alert("Nombre: "+miPerro.nombre);
*/

 //consulta con corchete nombreObjeto[Atributo] si un atributo es numero usamos este
 /*
window.alert("Edad en años normales: "+miPerro["edad"]);
*/

//usar y actualizar propiedad
/*
miPerro.nombre="Luna Hdez Cortes";
window.alert("Nombre: "+miPerro.nombre); //luna
var edadAnosPerro= miPerro.edad * 7; //54
miPerro.edad = edadAnosPerro; 
window.alert("Edad en años perro: "+miPerro.edad); //54
window.alert("Caracteristica: "+miPerro[1]); //bonita,gordita,alegre
var caracteristicaEliminada=miPerro[1].pop(); //alegre eliminada
window.alert(caracteristicaEliminada); //alegre
miPerro[1].push("Dormilona"); //dormilona
window.alert("Caracteristica: "+miPerro[1]); //bonita,gordita,dormilona
//Lo mismo aplica con unshift y shift al tratarse de un array
*/

//agregar y eliminar atributo
/*
miPerro.comidaFav = "pollito"; //agregar propiedad
window.alert(miPerro.comidaFav); //pollito
delete miPerro.comidaFav; //eliminar propiedad
window.alert(miPerro.comidaFav); //undefined
*/

//Verificar si un valor existe
/*
window.alert(miPerro.hasOwnProperty(1));//true
window.alert(miPerro.hasOwnProperty("peso"));//true
window.alert(miPerro.hasOwnProperty(2));//false
window.alert(miPerro.hasOwnProperty("poder"));//false

//ejemplo con condicional
function verificarPropiedad(obj,propiedad){
    if(obj.hasOwnProperty(propiedad)){
        return "propiedad: " + obj[propiedad];
    } else {
        return "Propiedad inexistente"
    }
}

window.alert(verificarPropiedad(miPerro,1)); //Propiedad: bonita,gordita,alegre
window.alert(verificarPropiedad(miPerro,"color")); // Propiedad inexistente
window.alert(verificarPropiedad(miPerro,"nombre")); // Propiedad: Luna
*/

