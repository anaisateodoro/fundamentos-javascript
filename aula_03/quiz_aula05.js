/*const animal = {_idade: '123', set idade(valor) {this._idade = valor } }
animal.idade = 10
console.log(animal.idade)*/

const animal = {_id: '123', get id() {return this._id } }
console.log(animal.id)