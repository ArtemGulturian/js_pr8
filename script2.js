"use strict";

// let number = 5; debugger

// function logNumber (){
//     let number = 4; debugger
//     console.log(number);
// }

// number = 6;

// logNumber(); debugger

function createCounter(){
    let counter = 0;

    const myFunction = function(){
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
//---
let c = 4
function addX(x) {
  return function(n) {
     return n + x;
  }
}
const addThree = addX(3)
let d = addThree(c)
console.log('example partial application', d);
//---
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++; // есть доступ к внешней переменной "count"
    };
  }
  
  let counter = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2
//--
 console.log(typeof(NaN));
//---
function foo(a,b) {
const [first] = a;
const {eng} = b;

return `${first} ${eng}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);
//---
let time = '';
5 > 3 || 2 ? time = 'Day' : time = 'Night';
console.log(time);
//---
let x = 5;
console.log(x++);// 5
//---
console.log([]+false - null + true); // "NaN"
//---
let y = 1;
let x = y = 2;
console.log(x); // 2
//---
console.log([] + 1 + 2); // "12"
//---
console.log(typeof("1"[0])); // "1"
//---
console.log(2 && 1 && null && 0 && undefined); // null
// И всегда запинается на лжи
// ИЛИ всегда запинается на правде
//---
console.log(!!(1 && 2) === (1 && 2)); // false
//---
console.log(null || 2 && 3 || 4); // 3
//---
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a == b); // false
//---
console.log(typeof(+"Infinity"));
//---
console.log("Ёжик" > "яблоко"); // false
//---
console.log(0 || "" || 2 || undefined || true || false); // 2