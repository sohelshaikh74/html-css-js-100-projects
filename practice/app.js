// reverse a given string
let str = "hello"
const revStr = (str)=>{
   let reversed = ""
   for(let i=str.length-1;i>=0;i--){
      reversed += str[i]
   }
   return reversed
}
console.log(revStr(str));
