/*
01 - Object
- O pai de todos os objetos do JavaScript;
- Possui propriedades e métodos, mesmo o objeto estando vazio;
- Pode ser criado via new;
*/

let o1 = {};
let o2 = new Object();

console.log(o1);
console.log(o2);

o1.nome = "Mateus";
o2.nome = "João";

console.log(o1.valueOf());
console.log(o2.valueOf());


console.log(o1.toString());
console.log(o2.toString()); //Object
