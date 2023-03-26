//Titulo: 29OperadorRest.js

function miFuncion(...args){  //operador rest ...args (areglo)
    window.alert(args);
    window.alert(args.length);
}

//miFuncion(1,2,3,4); //asi podemos agregar en parametros los valores que necesitemos
miFuncion([1,2,3],[4,5,6]); //tambien en forma de array si es necesario 