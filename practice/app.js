let str = "jhon"
const revStr = (str)=>{
  let reveresd = ""
  for(let i=str.length-1;i>=0;i--){
       reveresd += str[i]
  }
  return reveresd
}
console.log(revStr(str));

