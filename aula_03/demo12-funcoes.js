//Funções em javascript

function nomeDaFuncao(parametro){
    //bloco de código
}

function queDiaEHoje(){
    const data = new Date()
    console.log(`Hoje é dia: ${data.getDate()}`)
}

queDiaEHoje(); // Hoje é dia 26

function soma(valor1,valor2){
    console.log(`A soma de ${valor1} + ${valor2} é`, valor1 + valor2)
}
soma(10,20) //A soma de 10 + 20 é 30
soma(3,4)//A soma de 3 + 4 é 7


// - Funções podem retornar valores
function soma(valor1,valor2){
    return valor1+valor2
}
const idade = 20
const tamanho = 10
const resultado = soma(idade, tamanho)
console.log('resultado',resultado) //resultado 30

function multiplicar (valor1,valor2){
    const resultado = valor1*valor2
    return resultado
}
console.log(`O Resultado da multiplicação é`, multiplicar(10,30))
// A const só pode ser criado uma única vez. Tudo quando for criado nas chaves morre nas funções.

const funcionario1 = {
    nome: 'Zezinho',
    desconto: 0.2,
    salarioBruto: 2000,
    salarioLiquido:0
}

const funcionario2 = {
    nome: 'Mariazinha',
    desconto: 0.1,
    salarioBruto: 2000,
    salarioLiquido: 0
}
/*
const descontoFuncionario1 = 
funcionario1.salarioBruto - (funcionario1.desconto*funcionario1.salarioBruto)

const descontoFuncionario2 = 
funcionario2.salarioBruto - (funcionario2.desconto*funcionario2.salarioBruto)


console.log(
    `Funcionario1:${descontoFuncionario1} 
     Funcionario2:${descontoFuncionario2}`
)
*/

//Funcionário 1 R$1.600,00 e Funcionário 2 R$1.800,00

function calcularDesconto(salarioBruto,desconto){
    return salarioBruto - (salarioBruto*desconto)
}
funcionario1.salarioLiquido = calcularDesconto(
    funcionario1.salarioBruto,
    funcionario1.desconto
)

funcionario2.salarioLiquido = calcularDesconto(
    funcionario2.salarioBruto,
    funcionario2.desconto
)
console.log(
    `Salário ${funcionario1.nome}:${funcionario1.salarioLiquido} 
     Salário ${funcionario2.nome}:${funcionario2.salarioLiquido}`
)

