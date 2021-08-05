/* Crie um objeto Pessoa, que tem uma propriedade nome;
   Crie um método que exibe o nome do objeto Pessoa  */

let pessoa = {
    nome: "Mateus",
    exibirNome() {
        console.log("O nome deste objeto é " + this.nome);
    }
};

console.log(pessoa.nome);

pessoa.exibirNome();