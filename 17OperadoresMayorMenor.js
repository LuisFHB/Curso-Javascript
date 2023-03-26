//Titulo: 17OperadoresMayorMenor.js

function mayorQue(){
  window.alert(5>4); //true
  window.alert(5>6); //false
  window.alert(5>5); //false
  window.alert("A">"A")//False son iguales
  window.alert("A">"B"); //false porque en el alfabeto B esta despues por lo cual es mayor
  window.alert("B">"A"); //true
  window.alert("ACB">"ABC"); //True porque como A esta en primera pocision compara la segunda y tenemos 
  // C que es mayor que B 
  window.alert("AB">"A");  //true porque compara la segunda posicion y como no hay lo toma como 0
  window.alert("Mundo">"Hola"); //true M esta despues de H en el alfabeto
  window.alert("M">"H"); //true M esta despues de H en el alfabeto
  window.alert("Fin Mayor que");  
  window.alert();
}

function menorQue(){
    window.alert(5<4); //false
    window.alert(5<6); //true
    window.alert(5<5); // false
    window.alert("A"<"A")//False son iguales
    window.alert("A"<"B"); //true porque en el alfabeto B esta despues por lo cual es mayor
    window.alert("B"<"A"); //false
    window.alert("ACB"<"ABC"); //false porque como A esta en primera pocision compara la segunda y tenemos 
    // C que es mayor que B 
    window.alert("AB"<"A"); //false porque compara la segunda posicion y como no hay lo toma como 0
    window.alert("Mundo"<"Hola"); //false M esta despues de H en el alfabeto
    window.alert("M"<"H"); //false M esta despues de H en el alfabeto
    window.alert("Fin Menor que");  
    window.alert();
}


function mayorIgualQue(){
    window.alert(5>=4); //true
    window.alert(5>=6); //false
    window.alert(5>=5); //true
    window.alert("A">="A")//True
    window.alert("A">="B"); //false porque en el alfabeto B esta despues por lo cual es mayor
    window.alert("B">="A"); //true
    window.alert("ACB">="ABC"); //True porque como A esta en primera pocision compara la segunda y tenemos 
    // C que es mayor que B 
    window.alert("AB">="A");  //true porque compara la segunda posicion y como no hay lo toma como 0
    window.alert("Mundo">="Hola"); //true M esta despues de H en el alfabeto
    window.alert("M">="H"); //true M esta despues de H en el alfabeto
    window.alert("Fin Mayor igual que");  
    window.alert();
}

function menorIgualQue(){
    window.alert(5<=4); //false
    window.alert(5<=6); //true
    window.alert(5<=5); //true
    window.alert("A"<="A")//true son iguales
    window.alert("A"<="B"); //true porque en el alfabeto B esta despues por lo cual es mayor
    window.alert("B"<="A"); //false
    window.alert("ACB"<="ABC"); //false porque como A esta en primera pocision compara la segunda y tenemos 
    // C que es mayor que B 
    window.alert("AB"<="A"); //false porque compara la segunda posicion y como no hay lo toma como 0
    window.alert("Mundo"<="Hola"); //false M esta despues de H en el alfabeto
    window.alert("M"<="H"); //false M esta despues de H en el alfabeto
    window.alert("Fin Menor igual que");  
    window.alert();
}
//mayorQue();
//menorQue();
//mayorIgualQue();
menorIgualQue();