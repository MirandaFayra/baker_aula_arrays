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

const imprimirArray =()=>{
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

imprimirArray()

// -------------- EXERCICIO 2 --------

// -------------- EXERCICIO 3 -----------

// -------------- EXERCICIO EXTRA --------

