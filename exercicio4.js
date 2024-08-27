//Trabalhando com Null, Undefined, e NaN
let nulo = null;

console.log(null)

// Verificar se nulo é igual a undefined (usando ==) e se nulo é estritamente igual a undefined (usando ===)
let igualUndefined = (nulo == undefined)
let estritamenteIgualUndefined = (nulo === undefined)
console.log(igualUndefined);
console.log(estritamenteIgualUndefined)

// 2. Declarar uma variável indefinido sem atribuir nenhum valor
let indefinido;

// Verificar se indefinido é NaN usando a função isNaN
let indefinidoEhNaN = isNaN(indefinido)

console.log(indefinidoEhNaN)

// 3. Declarar uma variável numStr2 com o valor "123abc" e tentar convertê-la para um número
let numStr2 = "123abc"
let convertido = Number(numStr2)


// Verificar se o resultado é NaN
let resultadoEhNaN = isNaN(convertido)
console.log(resultadoEhNaN)