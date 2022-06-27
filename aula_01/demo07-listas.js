const minhaLista = [ ]
const minhaListaDeTarefas = [
    'mandar email',
    'colocar comida para o dog',
    'limpar o quarto'
]

//console.log(minhaListaDeTarefas[0])//mandar email
//console.log(minhaListaDeTarefas[1])//colocar comida para o dog
//console.log(minhaListaDeTarefas[4]) //undefined em função de que não há índice

//adicionar item
//minhaListaDeTarefas.push('formatar computador')
//console.log(minhaListaDeTarefas);

//quantidade de itens no array
//console.log(minhaListaDeTarefas.length)

//adicionar item
//minhaListaDeTarefas.push('formatar computador')
//console.log(minhaListaDeTarefas)

//remover ultimo da lista
//const ultimo = minhaListaDeTarefas.pop()
//console.log(ultimo,minhaListaDeTarefas)

// remover o primeiro da lista
//const primeiro = minhaListaDeTarefas.shift()
//console.log(primeiro,minhaListaDeTarefas)

//remover o primeiro da Lista
//console.log(minhaListaDeTarefas[2])

//qual item de início
// quantos remover

//minhaListaDeTarefas.splice(2,1)
//console.log(minhaListaDeTarefas);


const itens = [
   1,'computador', 0.22
]
//verificar o tipo de array
//console.log(typeof(itens)) //objeto

// verificar se é array da forma correta
//console.log(Array.isArray(itens)) // Exibe objeto e true

//ordenar números
//const numeros = [3,2,1,0]
//console.log(numeros.sort())

//ordenar letras
//const letras = ["t","g","h","l"]
//console.log(letras.sort())

// juntar dois arrays

//const novo = itens.concat([1,2,3]) //Exibe 1,'computador', 0.22, 1,2,3
//console.log(novo)

// juntar arrays em uma string
//console.log(itens.join(',')) //Exibe 1,'computador', 0.22

const index = itens.indexOf('computador')
console.log(itens[index])

//Não esquecer que se retornar -1 não encontrou o iten. não compare -1 com true or false
//const lista = [1,2,3,4]
//console.log(itens[index])

const lista = ["a", "b", "c" ]
console.log(lista[1])
console.log(lista[3])


