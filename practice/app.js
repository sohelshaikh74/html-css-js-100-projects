// // count vowel in a string
// const vowel = (str)=>{
//     const vowels = "aeiouAEIOU"
//     let count = 0;
//     for(let char of str){
//         if(vowels.includes(char)){
//             count++
//         }
//     }
//     return count
  
// }
// console.log(vowel("sohel"));

// find the messing number in the array
const missingNumber = (arr)=>{
   let maxValue = Math.max(...arr)
   let minValue = Math.min(...arr)
   let missingNumber = []
   for(let i=minValue;i<=maxValue;i++){
      if(arr.indexOf(i)<0){
        missingNumber.push(i)
      }
   }
   return missingNumber;
}
console.log(missingNumber([1,2,3,4,5]));

