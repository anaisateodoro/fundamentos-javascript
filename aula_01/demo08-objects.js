const heroi = {
    nome: 'Flash',
    idade: 100,
    sexo: 'Masculino'    
}

// console.log('nome', heroi.nome)
// console.log('idade', heroi['idade'])
// console.log('naoExiste', heroi.naoExiste)
// heroi.id = 0001
// console.log(heroi)

//console.log(Object.keys(heroi)) //[ 'nome', 'idade', 'sexo' ] saber as chaves

//console.log(Object.values(heroi)) 
// exibe [ 'nome', 'idade', 'sexo' ] 
// exibe [ 'Flash', 100, 'Masculino' ]

const pessoa = {
    tamanho: '10 metros'
}
const novoObj = Object.assign(heroi,pessoa)
delete novoObj.nome

console.log(novoObj)//{ nome: 'Flash', idade: 100, sexo: 'Masculino', tamanho: '10 metros' }