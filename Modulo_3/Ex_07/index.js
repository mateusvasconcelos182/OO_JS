/*
    Crie dois objetos que compartilhem nomes de propriedades via object literals;
    Uma variável deve definir a parte que se repete nas propriedades dos objetos;
*/



let a = "numero_de_";

let arvore = {
    [a + "frutos"]: 10,
};

let carro = {
    [a + "portas"]: 4,
};

let pessoa = {
    [a + "pernas"]: 4,
};

console.log(arvore);
console.log(carro);
console.log(pessoa);