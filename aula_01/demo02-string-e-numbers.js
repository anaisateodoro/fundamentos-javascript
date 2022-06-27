let salarioDoAmigo = 1000
let meuSalario = '2999.14'
let meuSalarioCorrigido = Number(meuSalario)

console.log(salarioDoAmigo+meuSalarioCorrigido)
console.log(
    typeof(salarioDoAmigo), 
    salarioDoAmigo
)
console.log(
    typeof(meuSalario), 
    meuSalario
)

console.log(
    isNaN(meuSalario))

let minnhaString = "Olá mundo!"
let minhaOutraString = "Olá mundo 2"
let minhaStringComVariaveis = 
`${minnhaString} - ${minhaOutraString} , AÊ!`
console.log(
    minhaStringComVariaveis
)