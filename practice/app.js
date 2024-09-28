// reverse a string()
let str ="hello"
const reverseString = (str)=>{
    let result  = str.split("").reverse().join("")
    return result;
}
console.log(reverseString(str));

// find the largest number in the array
let arr = [1,2,3]
console.log(Math.max(...arr));
