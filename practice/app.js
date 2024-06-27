// how to find fibonacci sequence in javascript
let num = 5
let temp = num;
let a = 0 ;
let b = 1;  
while(num>0){
   temp = temp%10
   a = b;
   b = temp;
   temp = parseInt(temp /10)
   console.log(temp);
}