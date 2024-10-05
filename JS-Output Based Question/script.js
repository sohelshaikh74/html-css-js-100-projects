// 1. what is the output of this
// console.log(3+2+"7");  //57

// 2. What is the output of below logic?
// const a = 1 < 2 < 3;  // true < 3 ==> 1 < 3 (true=1) TRUE
// const b =  1 > 2 > 3; // false > 3 ==> 0 > 3 (false=0) FALSE
// console.log(a, b);

// 3. Guess the output?
const p = {k:1,l:2}
const q = {k:1,l:2}

let isEqual = p == q;  // true
let isStartEqual = p===q; // true
console.log(isEqual,isStartEqual);

