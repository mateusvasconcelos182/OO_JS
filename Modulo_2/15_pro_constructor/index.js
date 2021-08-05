function criarArvore(especie, temFruto){
    return{
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore("Laranjeira", true);

console.log(laranjeira);
console.log(laranjeira.constructor);

function Herio(nome, classe){
    this.nome = nome;
    this.classe = classe;
}

let jaspion = new Herio("Jaspion", "robo" );

console.log(jaspion);
console.log(jaspion.constructor);

let objeto = {
    tete: "teste",
}

console.log(objeto.constructor);