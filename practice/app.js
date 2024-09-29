// fibonaccie sequnece
const fibonaccie =(n)=>{
   if(n===0){
    return 0
   }
   else if(n===1){
    return 1
   }
   let a  = 0 ;
   let b = 1;
   let fib = 0 
   for(let i=2;i<=n;i++){
        fib = a+b;
        a=b;
        b = fib;
   }
   return fib
}
console.log(fibonaccie(6));
