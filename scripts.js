console.log('Salve Baker')
// Variável espaço na memória em que guardamos os dados

// Funções, trechos de código reutilizável 

// ARRAY = LISTA de variáveis 

//let arraybacker = [1,'fayra','baker', false]

//let arraybacker = [posicao 0,posicao1, posicao2, posicao3]

// Indice => Posição do elemento no array

// ARRAY inicia-se com o indice Zero

//console.log(arraybacker.length) // qtd elementos
//console.log(arraybacker[2]) // acessar baker 
//console.log(arraybacker[0]) // acessar o número 1
//console.log(arraybacker[1]) // acessar fayra

//let arrayExplicacao = [56,39, 'salve', true , 78]
//console.log(arrayExplicacao)

// PUSH => Insere o elemento no final do array   - array.push("")

//arrayExplicacao.push("baker")
//console.log(arrayExplicacao)

//POP => Retira o elemento no final do array  - array.pop()
//arrayExplicacao.pop()
//console.log(arrayExplicacao)

// UNSHIFT => Adiciona um elemento no inicio de array - array.unshift(" ")
//arrayExplicacao.unshift("Salveee usei o Unshift")
//console.log(arrayExplicacao)

// SHIFT =>  Remove o primeiro elemento de um array e o retorna - array.shift()

//arrayExplicacao.shift()
//console.log(arrayExplicacao)


// SPLICE (i,n)=>  Remove ou substitui elementos em um array  - array.splice(ind, qtd, 'elemento')

//arrayExplicacao.splice(1,2,'Helooo') // a partir do elemento de indice 1, tire 2 itens e troque por Helooo
//console.log(arrayExplicacao)


// INCLUDES : Verifica se o elemento está ou não no array, retornando um booleano - 
//let verificarArray = arrayExplicacao.includes("baker")
//let verificarArray = arrayExplicacao.includes(78)
//console.log(verificarArray)

//INDEXOF : Retorna o indice (posição) da primeira ocorrencia de um valor do array. Caso não for encontrado retorna -1 

//let verificarPosicao = arrayExplicacao.indexOf(39)
//let verificarPosicao = arrayExplicacao.indexOf(78)
//console.log(verificarPosicao)

// SORT: Usado para ordenar os elementos de um array em ordem alfabéticaou numérica

//let ordenarArray = arrayExplicacao.sort()
//console.log(ordenarArray)

//let arrayDeLetras = ['a', 'w', 's', 'f', 'y', 'g', 'l', 'h', 'c']

//let ordenarArrayDeLetras = arrayDeLetras.sort()
//console.log(ordenarArrayDeLetras)

// -------------- EXERCICIO 1 --------

/*const imprimirArray =()=>{
    let arrayDeStrings = ['a', 'baker', 'salve' ]
    console.log(arrayDeStrings)

    let arrayDeNumbers = [1, 29, 94 ]
    console.log(arrayDeNumbers)

    let arrayDeMisto = ['a', 29, true ]
    console.log(arrayDeMisto)

    let arrayDeUmValor = [29]
    console.log(arrayDeUmValor)

    let arraySemValor = [ ]
    console.log(arraySemValor)

}

imprimirArray()*/

// -------------- EXERCICIO 2 --------

/*const imprimirArray =()=>{
    let arrayDeStrings = ['a', 'baker', 'salve' ]
    console.log(arrayDeStrings)
    
    let tamanhoArrayDeString = arrayDeStrings.length
    console.log(tamanhoArrayDeString )
    console.log(tamanhoArrayDeString[3] ) //acessar posição 3

    let arrayDeNumbers = [1, 29, 94 ]
    //console.log(arrayDeNumbers)

    let arrayDeMisto = ['a', 29, true ]
    //console.log(arrayDeMisto)
    let verificarString = arrayDeMisto.includes('a')
    console.log(verificarString)

    let verificarNumber = arrayDeMisto.includes(29)
    console.log(verificarNumber)

    let verificarBolean  = arrayDeMisto.includes(true)
    console.log(verificarBolean)

    let arrayDeUmValor = [29]
    console.log(arrayDeUmValor)
    console.log(arrayDeUmValor[0]) // imprimir o elemento que está no indice 0 
    console.log(arrayDeUmValor.length) // imprimir o tamanho do array

    let arraySemValor = [ ]
    //console.log(arraySemValor)

}

imprimirArray()*/


//------------- EXEMPLO EXTRA COM DADOS DA PESSOA USUÁRIA ---------

// 1. Crie uma funcao que solicite para a pessoa usuária, o nome, email, senha (nessa ordem)
// 2. Imprima a posição do nome
// 3. Imprima os dados da pessoa usuária com a seguinte frase 'Seja bem-vinde NOME ao nosso sistema! A senha cadastrada é : SENHA. Seu email no nosso banco é EMAIL '

/*const solicitarDados =()=>{
    let nome = prompt('Digite o seu nome')
    let email = prompt('Digite o seu email')
    let senha = prompt('Digite o seu senha')
    let arrayDeDados = [nome, email, senha] // formatando o array para os dados
    //let arrayDeDados =[]
    arrayDeDados.push(nome) // adiciona no fim do array
    arrayDeDados.push(email)  // adiciona no fim do array pós nome
    arrayDeDados.push(senha) // adiciona no fim do array pós email

    console.log(arrayDeDados) 
    console.log(` A posição do nome, tem como indice ${arrayDeDados.indexOf(nome)}. Seja bem-vinde ${arrayDeDados[0]} ao nosso sistema! A senha cadastrada é : ${arrayDeDados[2]}. Seu email no nosso banco é ${arrayDeDados[1]} `) 

}


solicitarDados()*/


// -------------- EXERCICIO 3 -----------

const imprimirArray =()=>{
    let arrayDeStrings = ['a', 'baker', 'salve' ]
    console.log(arrayDeStrings)

    let copiaArrayDeStrings = arrayDeStrings
    console.log(copiaArrayDeStrings)

    copiaArrayDeStrings.push('bananinha')
    console.log("Esse é o array de cópia ",copiaArrayDeStrings)
    console.log("Esse é o array original ",arrayDeStrings)

    // Criar a cópia do array que será manipulado => slice vazio
    let arrayQueSeraCopiadoAtualizado = arrayDeStrings.slice()
    //console.log(arrayQueSeraCopiadoAtualizado)

    // Estamos manipulando apenas a cópia do array
    let arrayRetirado = arrayQueSeraCopiadoAtualizado.slice(0,2 , '')
    console.log(arrayRetirado)


    
    let tamanhoArrayDeString = arrayDeStrings.length
    console.log(tamanhoArrayDeString )
    console.log(tamanhoArrayDeString[3] ) //acessar posição 3

    let arrayDeNumbers = [1, 29, 94 ]
    //console.log(arrayDeNumbers)

    let arrayDeMisto = ['a', 29, true ]
    //console.log(arrayDeMisto)
    let verificarString = arrayDeMisto.includes('a')
    console.log(verificarString)

    let verificarNumber = arrayDeMisto.includes(29)
    console.log(verificarNumber)

    let verificarBolean  = arrayDeMisto.includes(true)
    console.log(verificarBolean)

    let arrayDeUmValor = [29]
    console.log(arrayDeUmValor)
    console.log(arrayDeUmValor[0]) // imprimir o elemento que está no indice 0 
    console.log(arrayDeUmValor.length) // imprimir o tamanho do array

    let arraySemValor = [ ]
    //console.log(arraySemValor)

}

imprimirArray()



// -------------- EXERCICIO EXTRA --------

