let carro = {
    tipo: "SUV"
}

carro.portas = 4;

console.log(carro.portas);


if(carro.tipo == "SUV"){
    carro.tetosolar = true;
}

console.log(carro);

carro.acelerar = function(){
    console.log("Vrummmm");
}

carro.acelerar();