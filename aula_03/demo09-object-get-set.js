// Conhecendo os métodos assessores get/set de Objeto.

const pessoa = {
    _nome: '', //Criamos o underline será privado a propriedade nome
    _idade: 20,
    get nome () {
        return this._nome 
    },
    set nome(valor) {
        this._nome = valor.toUpperCase()
    },
    get podeDirigir(){
        return this._idade>18
    },
    set idade(valor){
        this._idade = valor
    }
}

pessoa.nome = 'Maria do Céu'
console.log(pessoa.nome)
pessoa.idade = 16
console.log(pessoa.podeDirigir)//variável de propriedade calculada
console.log(pessoa.idade)// vai trazer undefined porque não tem a função get..

/*
A variavel calculada, só é alterada quando alguem altera outro valor.
Exemplo: você tem uma propriedade chamada idade,
         você tem uma propriedade chamada maiorDeIdade que é um calculo, maiorDeIdade = idade > 17

Se voce alterar o valor de idade para 18
A variavel maiorDeIdade será alterada para true, pois ela depende de idade para ter seu valor. 
*/