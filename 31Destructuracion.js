//Titulo: 31Destructuracion.js

//Funcionamiento
/*
const usuairo ={
    nombre: "Luis",
    edad: 26
};

//si quisieramos asignar los valores de uno en uno lo hacemos como se muestra a continuacion 
//const nom = usuairo.nombre;
//const ed =usuairo.edad;
 //observenmos que podemos colocar el nombre que se nos antoje a la variable 


const {nombre, edad} =usuairo;
//tipoVar{ var1,var2}=objeto;
//con esto creamos las variables y asignamos dichos valores pero las variables deben 
//llamarse igual que el atributo dentro del objeto como nombre y edad
*/

//Ejemplo con coordenadas
/*
var coordenadas = {
    x:5,
    y:6,
    z:8
};

var {x,y,z}=coordenadas;
window.alert("Cordenada x :"+x);
window.alert("Cordenada y :"+y);
window.alert("Cordenada z :"+z);
*/

//Ejemplo1 con objetos anidados
/*
const usuario={
    luis: {
        nombre: "luis",
        edad:27,
        correo: "luisgmail.com"
    },
    paola:{
        hobie:{
            op1: "jugar",
            op2: "leer"
        }
    }
};

const {luis:{nombre,edad,correo}}=usuario;
//tipoVar {atributoAExtraer:{subatributo,subatributo}}=objeto;
window.alert(nombre+" edad: "+edad);
window.alert(nombre+" correo "+correo);

const {paola:{hobie:{op1}}}=usuario;
window.alert("hobie paola "+op1);
*/

//Ejemplo2 con objetos anidados cambiando nombre de variable
/*
const usuario={
    luis: {
        nombre: "luiss",
        edad:27,
        correo: "luisgmail.com"
    },
    paola:{
        nombre: "paoola",
        hobie:{
            op1: "jugar",
            op2: "leer"
        }
    }
};

const {luis:{nombre:nombreUsuario,edad:edadUsuario,correo:correoUsuario}}=usuario;
//tipoVar {atributoAExtraer:{subatributo:nuevoNombreVar,subatributo:nuevoNombreVar}}=objeto;
window.alert(nombreUsuario+" edad: "+edadUsuario);
window.alert(nombreUsuario+" correo "+correoUsuario);

const {paola:{nombre:nombreUsuario2,hobie:{op1:hobbie1}}}=usuario; 
//Para facilitar despues del nombre del atributo:nuevoNombraVar
window.alert("hobie de "+nombreUsuario2+": "+hobbie1);
*/

//Ejemplo con  array
/*
var a , b, c ; //declaramos variables 
[a,b,c]=[1,2,3]; //podemos asignar valores de esta manera 
window.alert(a+" "+b+" "+c); //podemos imprimir 1  2 3

//asignar variables a menos 
var x, y ;
[x,y]=[4,5,6,7,8,9];

window.alert(x+" "+y); //x= 4 y =5

//asignar otro valor de otra posicion por ejemplo del arreglo [6,7,8,9,10,11,12,13]
// asignar a l el valor 10 que es la posicion 4
var j,k,l;
[j,k,,,l]=[6,7,8,9,10,11,12,13]//escribimos la l dejando el numero de espacios es decir poniendo comas ,
//j=posicion 0, k= posicion 1, l= posicion 10 
window.alert(j+" "+k+" "+l); //j=6, k=7 l=10

//Intercambair valores en un array

var a =8, b= 6;
[b,a]=[a,b] //b=a por lo que b= 8, a=b por lo que  a=6

window.alert(a+"  "+b); //a=6, b=8
*/



//Ejemplo con oprador rest en array
/*
var a, b;
// ... nombreVariableArray
[a,b,...array] = [1,2,3,4,5,6,7] //a=1, b=2, array= [3,4,5,6,7]
window.alert(a); //1
window.alert(b);//2
window.alert(array);//3,4,5,6,7

//remover primeros elementos
const arrayInicial =[1,2,3,4,5,6,7,8];

function removerTresPrimerosElementos(array2){
    const [,,,...arrayLocal]=array2; 
    return arrayLocal;
}
window.alert("aary inicial: "+arrayInicial)
window.alert("Quitando los primeros 3: "+ removerTresPrimerosElementos(arrayInicial));
*/


//Ejemplo pasar objeto como argumento
/*
//definimos objeto
var nuevoPerfilCliente={
    nombre: "Luis",
    edad: 26,
    origen: "Mexico",
    ubicacion: "Pachuca"
};
//creamos metodo o funcion flecha para destructural como lo hicimos hasta ahora
const actualizarPerfil = (informacionDePerfil) =>{
    const{nombre,edad,origen,ubicacion}= informacionDePerfil;
    window.alert(nombre);
    window.alert(edad);
    window.alert(origen);
    window.alert(ubicacion);
};
//llamamos la funcion y mandamos nuestro objeto
actualizarPerfil(nuevoPerfilCliente);

//ahora lo haremos como destructuracion 
//definimos objeto
var nuevoPerfilCliente2={
    nombre: "Paola",
    edad: 24,
    origen: "Mexico",
    ubicacion: "Pachuca"
}
//creamos metodo pero ahora nuestro argumento o variable son los atributos del objeto en automatico
//js hace la asignacion 
const actualizarPerfil2 = ({nombre,edad,origen,ubicacion})=>{
    window.alert(nombre);
    window.alert(edad);
    window.alert(origen);
    window.alert(ubicacion);
}

actualizarPerfil2(nuevoPerfilCliente2);
*/
//Ejemplo numerico y funcion flecha

const estadictisas={
    media:10,
    mediana:5,
    minimo: 4,
    maximo: 10
}

const promedio = ({maximo,minimo})=>  (maximo+minimo)/2;

window.alert(promedio(estadictisas)); // (10+4)/2=7


