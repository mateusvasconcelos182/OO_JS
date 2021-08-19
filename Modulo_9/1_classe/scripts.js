class Humano {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

console.log(typeof Humano);

let mateus = new Humano('Mateus', 29);
console.log(mateus);