/* No objeto ninja que a propriedade shuriken, com uma quantidade de estrelas ninjas;
   A cada método do disparo, subtraia uma;
   O ninja não pode jogar mais shurikens caso elas tenham acabado;                 
*/

function Ninja(nome, quantidade){
    this.nome = nome;
    this.quantidadeShuriken = quantidade;
    this.atirarShuriken = function(){
        if(this.quantidadeShuriken > 0){
        console.log("O ninja atirou a shuriken!");
        this.quantidadeShuriken -= 1;
    } else {
        console.log("Naruto não possui mais shurikens")
    }
  }
}


let naruto = new Ninja("Naruto", 3);

console.log(naruto);

naruto.atirarShuriken();
console.log(naruto);
naruto.atirarShuriken();
console.log(naruto);
naruto.atirarShuriken();
console.log(naruto);
naruto.atirarShuriken();
console.log(naruto);

naruto.atirarShuriken();