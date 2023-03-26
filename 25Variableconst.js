//Titulo: 25Variableconst.js

/*const hace referencia a constant o constante pór lo que una vez se inicializo 
o se asigno un valor ya no se puede modificar*/
/*
const miConstante= 35; 
window.alert(miConstante);
//const se debe crear e inicializar en una sola linea es decir 
//no podemos hacer esto:
    //const miConstante2; // creamos variable
    //miConstante2=15;    //inicializamos, nos saldra error al hacerlo asi
miConstante=15; //error no podemos cambiar el valor 
window.alert(miConstante);
*/

//CAMBIAR VALORES SOLO EN ARRAY
/**/
const MI_ARRAY=[1,2,3,4];
for(var i=0; i<MI_ARRAY.length; i++){
window.alert("Primer array: "+MI_ARRAY[i]);
}

MI_ARRAY[0]=5;
MI_ARRAY[1]=6;
MI_ARRAY[2]=7;
MI_ARRAY[3]=8;

for(var i=0; i<MI_ARRAY.length; i++){
    window.alert("Segundo array: "+MI_ARRAY[i]);
    }