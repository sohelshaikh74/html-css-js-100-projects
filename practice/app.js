// write a js function that takes an array of numbers and returns a new array with only the even numbers
const arr = [1,2,3,4,5]
const evenArr =(arr)=>{
  let evenArray = []
  for(let i=0;i<arr.length;i++){
     if(arr[i]%2==0){
          evenArr.push(arr[i])
     }
  }
  return evenArray
}
console.log(evenArr(arr));
console.log('js');
alert(1)
