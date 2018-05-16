// JS é fracamente tipada

var objeto ={};
var numero = 1;
var string = 'havia uma pedra no meu caminho';
var lista = [1,2,3,4];


// const & let

// QUAL SERÁ IMPRESSA?
var msg = 'olá';
{
    var msg = 'adeus';
}

console.log(msg);