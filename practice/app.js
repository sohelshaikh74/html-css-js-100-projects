// reverse a string
let str = "Hello"
const reverseStr = (str)=>{
       let result =  str.split("").reverse().join("")
       return result 
}
console.log(reverseStr(str));
