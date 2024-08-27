//Manipulação de Strings

//1-Declare uma variável texto com o valor "Aprendendo JavaScript é divertido e recompensador!".
var frase = "Aprendendo JavaScript é divertido e recompensador!"
console.log(frase)

//2-Converta o valor de texto para maiúsculas e exiba no console.
let texto = "Aprendendo JavaScript é divertido e recompensador!"
let textoMaiusculo = texto.toUpperCase();
console.log(textoMaiusculo);

//3-Verifique se texto contém a palavra "divertido" e exiba o resultado no console.
let contemDivertido = texto.includes("divertido");
console.log(contemDivertido);

//4-Divida texto em um array de palavras e exiba o array resultante no console.
let arrayDePalavras = texto.split(" ");
console.log(arrayDePalavras);

//5-Junte as palavras do array resultante em uma única string, separadas por hífens,
//e exiba o resultado no console.
let textoComHifens = arrayDePalavras.join("-");
console.log(textoComHifens);
