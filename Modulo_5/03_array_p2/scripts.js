/* 

- A propriedade length indica o número de itens de um array;
- E temos métodos famosos como: push, pop e join;
- É de extrema importância conhecer os métodos de arrays para programar bem em JS;


*/

let a = [0,1,2];
let b = new ArrayBuffer(3,4,5);

console.log(a.length);
console.log(b.length);

a.push(4);
b.push(5);

// Array.prototype.push()

console.log(a);
console.log(b);

a.pop();

console.log(a);

let c = {};

// console.log(c.push(4)); push != Object -> push == Array


