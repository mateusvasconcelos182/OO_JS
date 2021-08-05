/*
Crie um objeto inimigo, com as propriedades nome e vivo (que é um boolean e inicie como true);
O método atirarShuriken do eercício passado deve 'matar' o inimigo,
setando a propriedade do inimigo vivo como false;
*/

function Ninja(nome, quantidade){
    this.nome = nome;
    this.quantidadeShuriken = quantidade;
    this.atirarShuriken = function(inimigo){
        if(this.quantidadeShuriken > 0){
            console.log("O ninja atirou uma shuriken!");
            this.quantidadeShuriken -= 1;
            inimigo.vivo = false;
        } else{
            console.log("O ninja não possui mais shuriken")
        }
    }
}

function Inimigo(nome){
    this.nome = nome;
    this.vivo = true;
}


let naruto = new Ninja("Naruto", 3);
let orochimaru = new Inimigo("Orochimaru")

console.log(naruto);
console.log(orochimaru);

naruto.atirarShuriken(orochimaru);

console.log(naruto);
console.log(orochimaru);