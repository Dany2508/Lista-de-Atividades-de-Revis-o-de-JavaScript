//Manipulação de Objetos Avançada
//1-Crie um objeto pessoa com as propriedades nome, idade, 
//profissao, e endereco (onde endereco é um objeto com rua, cidade, e estado).

let pessoa = {
    nome: "Maya",
    idade: 17,
    profissao: "Perita Criminal",
    endereco: {
        rua: "Rua Princesa Izabel",
        cidade: "São José",
        estado: "SC"
    },

//2-Adicione um método apresentacao ao objeto pessoa que retorne uma string com uma breve apresentação da pessoa.
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, sou ${this.profissao} e moro em ${this.endereco.cidade}.`;
    }
};

console.log(pessoa.endereco.cidade);

// 4. Atualizar a propriedade profissao para um novo valor e exibir o objeto atualizado
pessoa.profissao = "Perita Criminal"

console.log(pessoa);

// 5. Adicionar uma nova propriedade telefone ao objeto pessoa e exibir o objeto atualizado
pessoa.telefone = "(48) 98488-6345"

console.log(pessoa)

console.log(pessoa.apresentacao())
