const podeDirigir = true
if(podeDirigir){
    console.log('Ela pode dirigir!')
}
//Se tiver o true a const vai exibir. Se for false na const, ele não vai exibir.

/*const saldoEmConta = 0
if(!saldoEmConta){
    console.log('Não tem saldo!')
}
//Exibe Não tem saldo!
*/

const saldoEmConta = 1
if(!saldoEmConta){
    console.log('Não tem saldo!')
}

//Ele converteu ao colocar o numeral 1. Assim não vai aparecer no console.

const boolComString = "aê hackerzão!!!"
console.log('boolComString',!!boolComString) //exibiu false

//negação 
console.log('negação',!boolComString)

//negação + forçar a bool
console.log(
    !(!!boolComString)
)

console.log(!(!! "Olá mundo"))

console.log(!true)

console.log(!!"0")

console.log(`!!`)