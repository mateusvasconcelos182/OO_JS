/*
    Crie uma função que retorna se o objeto é uma instância de outro objeto;
    Deve apresentar no console as mensagens de positivo e negativo;
*/

//helpers

function comparadorObjeto(objeto1, objeto2){
    if(objeto1 instanceof objeto2){
        console.log("O objeto " + objeto1.nome + " é uma instancia de " + objeto2.name);
    } else {
        console.log("O objeto " + objeto1.nome + " não é uma instancia de " + objeto2.name);
    }
}

//objeto

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

comparadorObjeto(naruto, Ninja);