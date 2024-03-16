"use strict";
//Imprime un mensaje
console.log('Hola mundo');
/*Imprime u mensaje que ha sido declarado de tipo texto*/
var text = 'hola' + ' como estas';
//Solo acepta verdadero o falso y en este caso solo estaremos aceptando: falso.
var bandera = false;
//Aqui declararemos valores constantes y sus valores no cambian.
var listaNumeros = [12, 43, 2, 23, 4];
// no se recomienda utilizar salvo sea muy necesario
var cualquiera = false;
console.log(text);
//valores inferidos o no mutables
var songName = 'el tucanazo';
/*la siguiente asignación es erronea por que estamos
asignando un valor tipo number a uno de tipo string*/
//songName = 2;
//tipado de objetos
function printCoor(pt) {
    console.log('el valor de la coordenada x es:  ' + pt.x);
    console.log('el valor de la coordenada y es:  ' + pt.y);
}
printCoor({ x: 3, y: 4 });
//tipado pato
var nameIdObject = { name: 'isaias', id: 1, print: function () { } };
