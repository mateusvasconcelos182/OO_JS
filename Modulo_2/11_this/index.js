let ninja = {
    classe: "profissional",
    arma: "shuriken",
    atiraArma: function(){
        console.log("Atirou a " + this.arma);
    },
    atirarDuasVezes: function(){
        for(let i = 2; i > 0; i--){
            this.atiraArma();
        }
    }
}

let ninja2 = {
    classe: "profissional",
    arma: "kunai",
    atiraArma: function(){
        console.log("atirou a " + this.arma);
    }
}

ninja.atiraArma();
ninja2.atiraArma();

ninja.atirarDuasVezes();