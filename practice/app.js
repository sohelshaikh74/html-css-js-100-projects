let str = "sohel"
const isPalndrom = (str)=>{
  let result =  str.split("").reverse().join("")
  return result === str;
  
}
console.log(isPalndrom(str));
