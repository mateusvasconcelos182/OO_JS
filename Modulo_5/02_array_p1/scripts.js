/* 
02 - Array

- O objeto pai de todos os arrays;
- Pode instanciar um array com new;
- Possui também propriedades e métodos;
*/

let a = [0,1,2];
let b = new ArrayBuffer(3,4,5);

console.log(a);
console.log(b);

console.log(a.toString());
console.log(b.toString());

console.log(a instanceof Array);
console.log(b instanceof Array);
console.log(b instanceof Object);
console.log(Array instanceof Object);

