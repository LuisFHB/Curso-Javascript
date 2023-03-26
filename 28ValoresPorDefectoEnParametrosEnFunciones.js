//Titulo: 28ValoresPorDefectoEnParametrosEnFunciones.js

const incrementar = (num, valor=1) => { return num +valor };

//como el parametro valor se definio con uno el resultado es
window.alert(incrementar(5)); //6
window.alert(incrementar(5,3)); //8
//como mandamos el valor 3 se asigna a la variable valor aunque ya tenga 1



