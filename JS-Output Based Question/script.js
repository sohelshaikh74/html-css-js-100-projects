// **********1. what is the output of this*********
// console.log(3+2+"7");  //57

// *********2. What is the output of below logic? ***********
// const a = 1 < 2 < 3;  // true < 3 ==> 1 < 3 (true=1) TRUE
// const b =  1 > 2 > 3; // false > 3 ==> 0 > 3 (false=0) FALSE
// console.log(a, b);

// **********3. Guess the output?**********
// const p = {k:1,l:2}
// const q = {k:1,l:2}

// let isEqual = p == q;  // FLASE
// let isStartEqual = p===q; // FALSE
// console.log(isEqual,isStartEqual);

// *********4. Guess the output?***********
// let a = 2+2;  //4
// let b = "2"+"2"  //22
// let c = 2+2-2;  // 2
// let d = "2"+"2"-"2" // 20
// let e = 4+"2"+2+4+"25"+2+2; // 42+2+4+"25"+2+2
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// let a = 2 + 2;

// This performs a simple arithmetic addition.
// Result: a = 4
// let b = "2" + "2";

// This performs string concatenation because both operands are strings.
// Result: b = "22"
// let c = 2 + 2 - 2;

// This performs arithmetic operations. First, 2 + 2 evaluates to 4, and then 4 - 2 evaluates to 2.
// Result: c = 2
// let d = "2" + "2" - "2";

// The first part "2" + "2" concatenates to "22".
// Then, the expression tries to perform subtraction: "22" - "2".
// JavaScript converts the strings to numbers for subtraction: 22 - 2 evaluates to 20.
// Result: d = 20
// let e = 4 + "2" + 2 + 4 + "25" + 2 + 2;

// This is a mix of numbers and strings, and string concatenation takes precedence.
// Breakdown:
// 4 + "2" becomes "42" (number and string concatenation).
// "42" + 2 becomes "422" (string and number concatenation).
// "422" + 4 becomes "4224" (string and number concatenation).
// "4224" + "25" becomes "422425" (string concatenation).
// "422425" + 2 becomes "4224252" (string and number concatenation).
// "4224252" + 2 becomes "42242522" (string and number concatenation).
// Result: e = "42242522"
// console.log( 4+"2"+2+4+"25"+2+2*2);  // 42242524

// 5.


