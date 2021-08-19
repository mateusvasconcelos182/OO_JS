

/* Aula 1
Definindo classes

- A declaração é bem parecida com constructor functions;
- As propriedades devem ficar num método especial chamado **constructor**;
- Onde serão inicializadas;
*/

class Tenis {
    constructor(modelo, cor){
        this.modelo = modelo;
        this.cor = cor;
    }
}

console.log(typeof Tenis);

let allstar = new Tenis("All Star", "Branco");


/* Aula 2
//////////////////////////////////// Outra maneira de criar classes
 Classes anonimas
*/
let Tenis = class {
    constructor(modelo, cor){
        this.modelo = modelo;
        this.cor = cor;
    };
    modeloDoTenis(){
        return this.modelo;
    }
}

let allstar = new Tenis('All Star', "preto");
console.log(allstar);



/* Aula 3
Curiosidades sobre o constructor
- É utilizado apenas para inicializar valores de propriedades;
- Você só pode utilizar um constructor por classe;
- O constructor pode chamar a classe pai por uma instrução super (o que ajuda na herança);

*/


/* Aula 4
Prototype methods
- São métodos que já existem no objeto ou na classe (Class), por exemplo os getters e setters;
*/
let Tenis = class{
    constructor(modelo, cor){
        this.modelo = modelo;
        this.cor = cor
    }
    modeloDoTenis(){
        return this.modelo;
    }
    set trocarModelo(novoModelo){
        this.modelo = novoModelo;
    }
    get obterModelo(){
        return "O modelo do tênis é: " + this.modelo;
    }
}

let allstar = new Tenis("All star", "preto");

allstar.trocarModelo = "All Star 2.0";
console.log(allstar.obterModelo);



/* Aula 5
Métodos estáticos
- Métodos que só funcionam caso você utilize o nome da classe;
- Ou seja, você não cria um novo objeto para usar eles;
- Utilizado muito como um helper;
*/

class Calc {
    static soma(a,b) {
        return a + b;
    }
}

console.log(Calc.soma(2,5));
Calc.soma(2,5);









/* Aula 6
SubClasses
- Uma forma de criar herança com as classes;
- Utilizando a apalavra extends, uma classe herda as propriedades de outra;
- Bem mais fácil de utilizar;

*/

class Animal {
    constructor(nome) {
        this.nome = nome;
    }
}

class Cachorro extends Animal {
    latir() {
        console.log("Au au");
    }
}

let bob = new Cachorro("Bob");
bob.latir();

console.log(bob.nome);




/*
Aula 7



*/




/*
Aula 8



*/






/*
Aula 9



*/







































