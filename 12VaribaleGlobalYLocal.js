//Titulo: 12VaribaleGlobalYLocal.js

var varGlobal=5;
var varGlobal2=10;
window.alert(varGlobal);
function miFuncion(){
    var varLocal=6;
    window.alert(varGlobal);
    varGlobal=7;
    window.alert(varLocal);
    window.alert(varGlobal2);
    window.alert(varGlobal);

}

miFuncion();
window.alert(varGlobal2);
window.alert(varGlobal);

window.alert(varLocal);//esta avrible no funciona porque se definio dentro de
//la funcion