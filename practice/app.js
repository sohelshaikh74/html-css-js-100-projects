// calcualte the fibonacci sequence
const fibonacci = (n)=>{
  if(n===0) return 0;
  if(n===1) return 1;
  let a = 0;
  let b = 1;
  let fib = 0
  for(let i=2;i<=n;i++){
    fib = a+b;
    a = b;
    b = fib
  }
  return fib
}
console.log(fibonacci(6));
