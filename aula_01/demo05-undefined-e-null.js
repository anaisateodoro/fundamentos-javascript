//undefined nunca recebeu valor

let variavelSemInicializacao
console.log(
    variavelSemInicializacao,
    typeof(variavelSemInicializacao)
) //exibiu undefined undefined
            //(tipo) (valor)

         variavelSemInicializacao = "Hello World!!"
            console.log(
                variavelSemInicializacao,
                typeof(variavelSemInicializacao)
            ) //exibe Hello World string

            variavelSemInicializacao = null
            console.log(
                variavelSemInicializacao,
                typeof(variavelSemInicializacao)
            ) //exibe null object