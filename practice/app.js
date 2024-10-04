// // reverse a given string
// let str = "hello"
// const revStr = (str)=>{
//    let reversed = ""
//    for(let i=str.length-1;i>=0;i--){
//       reversed += str[i]
//    }
//    return reversed
// }
// console.log(revStr(str));


// let str2 = "world"
// const revStr2 = (str2)=>{
//   let result = str2.split("").reverse().join("")
//   return result
// }
// console.log(revStr2(str2));

// print fizzbuzz
for(let i=1;i<=100;i++){
   if(i%3===0 && i%5===0){
    console.log('FizzBuzz');
   }
   else if(i%3===0){
    console.log('Fizz');
    
   }
   else if(i%5===0){
   console.log('Buzz');
   }
   else{
    console.log(i);
    
   }
}
