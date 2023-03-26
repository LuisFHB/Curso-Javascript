//Titulo: 36GetterYSetter.js

class Libro{
    constructor(autor){ //argumento del constructor entre parentesis
        //this.autor = autor; //variable accesible para cualquiera y poder modificar
        this._autor = autor; //con el_ ahora la variable es privada como en java
        //en toeria sigue siendo accesible la variable pero el guion bajo indica a otro programador que no
        //se debe modificar, es decir que es privada
        //entonces para poder interactuar con la variable al igual que en java necesitamos getter y setter
    }
//con getter accedemos al valor sin modificarlo es decir retorna para poder usarlo
    get autor(){ //nombre del argumento del constructor
    return this._autor;
    }
//con setter nos deja actualizar el valor
    set autor(nuevoAutor){ //nombre del argumento del constructor (nuevoArgumento)
        window.alert("setter");//ponemos mensaje para saber que usamos el setter 
        this._autor=nuevoAutor; //podemos poner condicionales para asegurar cierto valor
    }
}

const libro1= new Libro("anonimo"); //creamos mensajero mandamos el nombre
window.alert(libro1.autor); //llamamos al mensajero con la variables sin _ es decir 
//el argumento del constructor

//usando setter para actualizar valor 
libro1.autor="Luis";
window.alert(libro1.autor);

