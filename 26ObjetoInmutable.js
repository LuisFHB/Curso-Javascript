//Titulo: 26ObjetoInmutable.js

let colores={
    "verde":"#10e04b",
    "azul": "#1b50e0",
    "negro": "#000000",
    "blanco": "#ffffff"
};

Object.freeze(colores);//con esto evitamos el cambio o adicion de atributos

colores.amarillo ="#fff200"; //error no se puede agregar
colores.verde ="#fff200"; //error no se puede modificar
delete colores.verde; //error no se puede eliminar
