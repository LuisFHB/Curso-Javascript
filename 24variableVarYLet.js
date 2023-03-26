//Titulo: 24variableVarYLet.js

//Diferencia entre var y let
/*
var nombre = "luis";
var nombre = "paola";
//podemos definir muchas veces la misma variable y asignar valores


let apellido ="Hernandez";
//let apellido="Bravo"; //si dejamos el let nos marca error por que la variable ya se declaro
apellido="Bravo";
// si quitamos let, ahora podemos modificar el valor de la variable
*/

//Ambitos de var y let
/*
//Ejemplo con var-----------------------
var miVariableGlobal=5;
window.alert(miVariableGlobal);

function miFuncion(){
    window.alert(miVariableGlobal);

    var miVariableLocal=8;
    window.alert(miVariableLocal);
}

miFuncion();

//window.alert(miVariableLocal); //error de referencia porque esta en la funcion
window.alert(miVariableGlobal);// con la variable global no hay problema 

for (var i=0; i<3; i++){ //aqui i trabaja como una varibale global
    window.alert(i);
}
window.alert("Variable i:"+i); // aqui podemos usar i por ser global



//Ejemplo con let-----------------------------
for (let j=0; j<3; j++){
    window.alert(j);
}

//window.alert("Variable j:"j); //marca error porque let vuelve funcianl j solo en el bucle for
*/




