//Titulo: 35Clases.js

/*a diferencia de java no tenemos todas la capacidades que podemos tener en una clase, en realida
lo que hacemos es crear un objeto*/
//Ejemplo 1
/*
class TransboradorEspacial{
    constructor(planeta){ //funcion o metodo que se ejecuta siempre y al iniciar 
     this.planeta = planeta; //indicamos que el planeta de this clase se le asignara el valor de 
     // planeta enviado al constructor 
    }
   
}

var zeus = new TransboradorEspacial("Jupiter"); //creamos mensajero similar a java y mandamos var planeta
window.alert(zeus.planeta); //llamamos al mensajero y que nos de la variable

var prometeus = new TransboradorEspacial("Nova 4");
window.alert(prometeus.planeta);
*/

//Ejemplo2
class Mascota {
    constructor (nombre, edad){
        this.nombre= nombre;
        this.edad=edad;
    }
}

var luna=new Mascota("Luna",8);
window.alert(luna.nombre + luna.edad); 
window.alert(`Nombre: ${luna.nombre} edad: ${luna.edad}`);
window.alert("Nombre: "+luna.nombre+" edad: " +luna.edad);

