//Titulo: 34Metodos.js

//Podemos decir que cuando un objeto tiene una funcion como propiedad es un metodo
//Opcion 1
/*
const persona={
    nombre: "Paola",
    presentarse: function(){ //dejamos function
        return `Hola mi nombre es ${this.nombre}`; //this para indicar que usamos la variable del objeto
    }
};
*/
//opcion 2
const persona={
    nombre: "Paola",
    presentarse(){ //quitamos function el resultado es el mismo
        return `Hola mi nombre es ${this.nombre}`; //this para indicar que usamos la variable del objeto
    }
};


window.alert(persona.presentarse());

//a diferencia de java en javascript tenem