//Titulo: 30OperadorSpread.js

//es lo contrario a Rest este operador descompone los parametros

const numeros = [1,2,3];

function sumar (x,y,z){
    return x + y + z;
}

window.alert(sumar(...numeros)); //tomamos los valores del array y separamos el resultado es 6
// ...nombreVariable