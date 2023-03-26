//Titulo: 07InmutabilidadDeCaracteres.js
var cadena="Jola Mundo"

window.alert(cadena);
/*aqui tratamos de indicar que se hara el cambio de la j por la L pero no se puede ya que las cadenas son
inmutables*/
cadena[0]="H";


window.alert(cadena); //Jola Mundo
