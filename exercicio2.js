//Operações com Números
// 1. Declarar as variáveis num1 e num2
let num1 = 200.456
let num2 = 150.789

console.log(num1, num2)

// 2. Arredondar num1 para o valor inteiro mais próximo e exibir no console
let num1Arredondado = Math.round(num1)
console.log(num1Arredondado)

// 3. Encontrar o valor máximo e mínimo entre num1 e num2 e exibir no console
let maximo = Math.max(num1, num2)
let minimo = Math.min(num1, num2)
console.log(maximo)
console.log(minimo)

// 4. Calcular a raiz quadrada de num2 e exibir no console
let raizQuadradaNum2 = Math.sqrt(num2)
console.log(raizQuadradaNum2)

// 5. Converter num1 para uma string com notação científica e exibir no console
let num1NotacaoCientifica = num1.toExponential();
console.log(num1NotacaoCientifica)