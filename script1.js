"use strict";

// to string
// #1
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// #2
console.log(typeof(null + ''));
const num = 5;
console.log("https://facebook.com/" + num);

// to number
// #1
console.log(typeof(Number('4')));
// #2
console.log(typeof(+'4'));
// #3
console.log(typeof(parseInt("15px", 10)))

let answ = +prompt("Hello", "");

// to boolean
// false - 0, '', null, undefind, NaN;
// #1
let switcher = 1;

if (switcher){
    console.log('Working..');
}

// #2
console.log(Boolean('4'));
// #3
console.log(typeof(!!"4444"));