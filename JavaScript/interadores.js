//INTERADORES

/*  Objetos INTERÁVEIS por padrão no JS
    ARRAYS - STRING - MAPS - SETS
*/

// OBTENDO O INTERADOR
var escritores = ['Monteiro Lobato', 'Augusto do Anjos', 'José Lins do Rego'];
var interadores = escritores[Symbol.iterator]();

console.log(interadores.next());
console.log(interadores.next());
console.log(interadores.next());
console.log(interadores.next());
