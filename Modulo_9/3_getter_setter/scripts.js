class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    nomeDaPessoa(){
        return "O nome da pessoa é: " + this.nome
    }
    set mudarNomeDaPessoa(novoNome){
        this.nome = "Sr. " + novoNome;
    }
    get receberNomePessoa(){
        return "O nome da pessoa é: " + this.nome;
    }
}

console.log(typeof Humano);

let mateus = new Humano('Mateus', 29);
console.log(mateus);

console.log(mateus.nomeDaPessoa());

mateus.mudarNomeDaPessoa = "Mateus";

console.log(mateus.nome);
console.log(mateus.receberNomePessoa);