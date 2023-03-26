//Titulo: 16OperadoresIgualDesigual.js

//Operador de igualdad ==
function igualdad(){
window.alert(5==5); //true
window.alert(5==6); //false
window.alert(5=="5"); //true aunque este en comillas
window.alert("Hola"=="Hola"); //true
window.alert("Hola"=="Jola"); //false
window.alert([1,2,3]==[1,2,3]); //aunque son iguales marca false
//no podemos usar el operador para comparar array 
}

//Operador de igualdad estricta  ===
function igualdadEstricta(){
  window.alert(9===9); //true
  window.alert(9==="9");  //false a difencia de la igualdad simple el operador no los reconoce como iguales
}

//operador de desigualdad != , en pocas palabras es lo inverso al operador de igualdad
function desigualdad(){
    window.alert(5!=5); //false por que si son iguales
    window.alert(5!=6); //true porque son diferentes
    window.alert(5!="5"); //false
    window.alert("Hola"!="Hola"); //false
    window.alert("Hola"!="Jola"); //true
    window.alert([1,2,3]!=[1,2,3]); //true
}

function desigualdadEstricta(){
    window.alert(5!==5); //false por que si son iguales
    window.alert(5!==6); //true porque son diferentes
    window.alert(5!=="5"); //true porque no esta convirteidno el numero entre comillas
    window.alert("Hola"!=="Hola"); //false
    window.alert("Hola"!=="Jola"); //true
    window.alert([1,2,3]!==[1,2,3]); //true
}

desigualdadEstricta();