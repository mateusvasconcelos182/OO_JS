let rodas = 4;
let portas = 4;
let aro = 20;
let tetoSolar = true;

let t = "tipo_de_";

let carro ={
    rodas,
    portas,
    aro,
    tetoSolar,
    bancoDeCouro: true,
    [t + "carro"]: "Sedan",
    ligar() {
        console.log("O carro ligou");
    },
    desligar() {
        console.log("O carro desligou");
    }
};


let barco = {
    [t + "barco"]: "Lancha"
}

let aviao = {
    [t + "aviao"]: "Boeing"
}



console.log(carro.tipo_de_carro);
console.log(aviao.tipo_de_aviao);
console.log(barco.tipo_de_barco);