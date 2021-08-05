let pessoa = {
    nome: "Mateus",
    getNome() {
        console.log("Este é o nome do objeto: " + this.nome);
    }
};


let pessoa2 = {

};

Object.assign(pessoa2, pessoa);

console.log(pessoa2);

pessoa2.getNome();

pessoa2.nome = "João";

console.log(pessoa);

console.log(pessoa === pessoa2);