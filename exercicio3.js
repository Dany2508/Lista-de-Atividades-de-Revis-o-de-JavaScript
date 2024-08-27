//Lógica Booleana e Comparações
let x = 8
let y = 12
let z = 8

console.log(8, 12, 8)

// Comparar se x é maior ou igual a y e exibir o resultado
let maiorOuIgual = x >= y

console.log(maiorOuIgual)

// Verificar se x é diferente de z (usando !=) e se x é estritamente diferente de z (usando !==)
let diferente = x != z
let estritamenteDiferente = x !== z

console.log( diferente)
console.log( estritamenteDiferente)

// Usar uma expressão lógica para verificar se x é menor que y e z é maior que x
let condicao1 = x < y && z > x

console.log(condicao1)

// Usar uma expressão lógica para verificar se x é igual a z ou y é menor que z
let condicao2 = x === z || y < z

console.log(condicao2)