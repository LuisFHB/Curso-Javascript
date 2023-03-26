// Titulo: 20ObjetosComplejos.js

 
var ordenesDePizzzas=[  //objeto tipo array por []
    //las llaves nos sirven para andiar atributos(objetos) y dentro de esos otros 
    //atributos podemos crear otras {} para anidar mas atributos como si fuera un array
    { //primer objeto  
    "tipo": "pastor",
    "tamaño":"individual",
    "precio":55.67,
    "ingredientes":["queso","pastor","piña"],
    "paraLlevar": true
    }//fin primer objeto
    , //coma para indicar cambio de objeto
    { //segundo objeto
        "tipo": "quesos",
        "tamaño":"mediana",
        "precio":125.35,
        "ingredientes":["queso1","queso2","queso3"],
        "paraLlevar": false
        }//fin segundo objeto
]

window.alert(ordenesDePizzzas[0]); //llamamos obejto 1
window.alert(ordenesDePizzzas[1]);  //llamamos obejto 

window,alert(ordenesDePizzzas[0].tipo); //pastor
window,alert(ordenesDePizzzas[1].tipo); //quesos

window,alert(ordenesDePizzzas[0].ingredientes[2]); //piña
window,alert(ordenesDePizzzas[1].ingredientes[0]); //queso1
