//Manipulação de Arrays
let numeros = [10, 20, 30, 40, 50]

console.log(numeros)


// 2. Usar o método push para adicionar o valor 60 ao final do array e exibir o array atualizado
numeros.push(60)
console.log(numeros)


// 3. Usar o método pop para remover o último valor do array e exibir o valor removido e o array atualizado
let valorRemovido = numeros.pop()
console.log(valorRemovido)
console.log(numeros)


// 4. Usar o método splice para remover o terceiro elemento do array (número 30) e exibir o array atualizado
numeros.splice(2, 1)

console.log(numeros)

numeros.sort((a, b) => b - a)

console.log("Array ordenado em ordem decrescente:", numeros)
