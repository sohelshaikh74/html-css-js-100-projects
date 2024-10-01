// print palindrom 
let str = "madam"
const isPalindrom = (str)=>{
  let result =  str.split("").reverse().join("")
  return result===str;
}
console.log(isPalindrom(str));
