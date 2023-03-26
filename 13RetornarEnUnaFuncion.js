//Titulo: 13RetornarEnUnaFuncion.js

function sumar(a,b){
    return a+b;
    // indicamos que es lo que se va a retornar en este caso seria la sumatoria
}

window.alert("La suma es: "+sumar(5,3)); //mandamos los valores y como llamamos 
//la funcion y la funcion nos regresa la sumatoria de los numeros 

//Asignar valor retornado
var resultado = sumar(5,4);
window.alert("La suma es: "+resultado);

function restar(a,b){
    window.alert("La resta es "+(a-b)); 
    //en este caso estamos imprimiendo y no regresamos nada
}

window.alert("La resta es "+restar(5,3)); // como no tenemos return en nuestra
//funcion no podemos imprimir y nos saldra el mensaje undefined es decir 
//indefinido 

