let palin = "sohel"
const isPal = (palin)=>{
  let result = palin.split("").reverse().join("")
  return result === palin
}
console.log(isPal(palin));
