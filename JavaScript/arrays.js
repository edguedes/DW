// METODOS AUXILIARES DE ARRAY
// ------------------------------------------

var nomes = ['ANA','RENATA','MARIA'];

for (var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
};

nomes.forEach(function(nomes){
    console.log(nomes);
});


var numeros = [1,2,3,4];
var dobro = [];

numeros.forEach(function(numero){
    dobro.push(numero * 2);
    console.log(dobro);
});

console.log('------------------')
console.log('O dobro eh: '+dobro);

// TRABALHANDO COM MAP

var numeros = [1,2,3,4];
var dobro = numeros.map(function(numero){
    return numero * 2;
    console.log(dobro);
});

console.log('------MAP--------')
console.log(dobro);
console.log(numeros);


// TRABALHANDO COM FILTER
// FILTRA ELEMENTOS DE UM ARRAY
// RETORNE OS ALUNOS MAIORES DE IDADE

var alunos = [
    {nome: 'JOSE', idade:15},
    {nome: 'BRUNA', idade:20},
    {nome: 'CARLA', idade:13},
    {nome: 'RENATO', idade:21},
    {nome: 'ANA', idade:25}
];
// SEM FILTER
var alunosDeMaior = [];

for(var i = 0; i< alunos.length; i++){
  var aluno = alunos[i];
    if(aluno.idade >=18)
      alunosDeMaior.push(aluno)
}

console.log(alunosDeMaior);

// COM FILTER
var alunosDeMaior = alunos.filter(function(aluno){
    return aluno.idade >=18;
});

console.log(alunosDeMaior);


// TRABALHANDO COM FIND
// BUSCAR ELEMENTO ESPECIFICO ARRAY

var alunos = [
    {matricula:1, nome: 'JOSE', idade:15},
    {matricula:2, nome: 'BRUNA', idade:20},
    {matricula:3, nome: 'CARLA', idade:13},
    {matricula:4, nome: 'RENATO', idade:21},
    {matricula:5, nome: 'ANA', idade:25}
];

// SEM FIND
var alunoMatricula = [];

for(var i = 0; i< alunos.length; i++){
  var aluno = alunos[i];
    if(aluno.matricula == 4)
    alunoMatricula.push(aluno)
}

console.log(alunoMatricula);

// COM FIND
console.log('-------FIND---------');

var alunoMatricula = alunos.find(function(aluno){
  return aluno.matricula == 5;
});

console.log(alunoMatricula);

// SOME - VERIFICA SE CONTEM O VALOR NA BUSCA
var alunos = [
    {matricula:1, nome: 'JOSE', idade:15, curso: 'Administração'},
    {matricula:2, nome: 'BRUNA', idade:20, curso: 'Contabilidade'},
    {matricula:3, nome: 'CARLA', idade:13, curso: 'Administração'},
    {matricula:4, nome: 'RENATO', idade:21, curso: 'Contabilidade'},
    {matricula:5, nome: 'ANA', idade:25, curso: 'Administração'}
];

var temAlunoContabilidade = alunos.some(function(aluno){
    return aluno.curso ==='Contabilidade';
  });
  
  // RETORNAR TRUE
  console.log(temAlunoContabilidade);


// REDUCE

var numeros = [1,2,3,4,5];

var soma = numeros.reduce(function(somaAux, numero){
    return somaAux += numero;
}, 0);

console.log(soma);