//Titulo: 27FuncionesFlecha.js

//son funciones compactas
//Diferencia de funcion normal y flecha
/* 
//Asi defenimos de forma normal una funcion anonima despues de function no hay nombre
//pero si esta asignada a una variable
const fecha= function(){
    return new Date();
};
//con la funcion flecha 
const fecha = () => new Date();
*/

//Ejemplo1
/*
//funcion normal anonima
const sumarTres = function(x){
    return x+3;
}

//funcion flecha
const sumarTres2 = (y) => x+3;

window.alert(sumarTres2(5)); //8
*/

//Ejemplo con array
/*
//funcion normal anonima
const concatenarArray = function(arr1,arr2){
    return arr1.concat( arr2); //concat nos sirve para concatenar o unir 2 array
};

var arr3 = concatenarArray([1,2],[3,4,5]);

for(var i=0; i <arr3.length; i++){
    window.alert("Funcion normal: "+arr3[i]);
}

//funcion flecha
const concatenarArray2 = (arr1,arr2) => arr1.concat( arr2); 
var arr4 = concatenarArray2([2,3],[4,5,6]);

for(var i=0; i <arr4.length; i++){
    window.alert("Funcion flecha: "+arr4[i]);
}
*/

//Ejemplo quitando palabra function y poniendo =>
//funcion normal
//const sumar = function(a,b){
//    let num =6;
//    return a+b+num;
//};

//funcion flecha
const sumar =(a,b) => {
    let num =6;
    return a+b+num;
};

window.alert(sumar(2,2));//10



