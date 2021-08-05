function Ninja(nome, arma){
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja("Naruto", "shuriken");
const rocklee = new Ninja("Rock Lee", "punhos");
const cloneDoNaruto = new Ninja("Naruto", "shuriken");
const cloneVerdadeiroDoNaruto = naruto;

console.log(naruto == rocklee);

console.log(naruto == cloneDoNaruto);

console.log(naruto == cloneVerdadeiroDoNaruto);

console.log(cloneDoNaruto == cloneVerdadeiroDoNaruto);