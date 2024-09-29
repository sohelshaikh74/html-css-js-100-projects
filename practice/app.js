// check palindrom
let str = "sohel"
const isPalindorme = (str)=>{
  let result  = str.split("").reverse().join("")
  if(result === str) return true;
  else false;
}
console.log(isPalindorme(str));

