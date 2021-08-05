/* Crie um objeto Ninja, por constructor function;
   Com a propriedade de nome ninja e o método atirar Shuriken */


function Ninja(nome){
    this.nome = nome;
    this.atirarShuriken = function(){
        console.log("O ninja atirou a shuriken!");
    }
};

let naruto = new Ninja("Naruto");

console.log(naruto);

naruto.atirarShuriken();