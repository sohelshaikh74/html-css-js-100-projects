// function removeDuplicates(arr) {
//     const uniqueArray = []; // This will store our unique values

//     for (let i = 0; i < arr.length; i++) {
//         let isDuplicate = false; // Flag to check if the number is a duplicate

//         // Check if the current number already exists in the uniqueArray
//         for (let j = 0; j < uniqueArray.length; j++) {
//             if (arr[i] === uniqueArray[j]) {
//                 isDuplicate = true; // Found a duplicate
//                 break; // No need to check further
//             }
//         }

//         // If it's not a duplicate, add it to uniqueArray
//         if (!isDuplicate) {
//             uniqueArray.push(arr[i]);
//         }
//     }

//     return uniqueArray; // Return the array with duplicates removed
// }

// // Example usage
// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const result = removeDuplicates(numbers);
// console.log(result); // Output: [1, 2, 3, 4, 5]

// // const arr = [1,2,3,4,4]
// // const removeDuplicates =(arr)=>{
// //    const uniqueArray = []
// //    for(let i=0;i<arr.length;i++){
// //     let isDuplicate = false;

// //     for(let j=0;j<Uint16Array.length;j++){
// //         if(arr[i]===uniqueArray[j]){
// //               isDuplicate=true;
// //               break
// //         }
// //     }
// //     if(!isDuplicate){
// //          uniqueArray.push(arr[i])
// //     }
// //    }
// //    return uniqueArray
// // }
// // console.log(removeDuplicates(arr));

console.log(Math.random());
var x = Math.floor(Math.random())
if(x>0.5){
  var x =1
}
else{
    var x = 2;
}
console.log(x);
