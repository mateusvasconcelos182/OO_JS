let arr = [1, 2, 3, 4, 5, 6, 88, 100, 'qwe', 'dsa'];
let arr2 = [1,2,3,4,5,6,7,8,9,0,10,11,12,19,1992];

let [a,b, ...c] = arr2;

console.log(a);
console.log(b);
console.log(c);