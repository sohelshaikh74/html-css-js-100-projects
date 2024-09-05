let countEle = document.getElementById('count')
let incrementEle = document.querySelector('.increment-btn')
let saveEle = document.querySelector('.save-btn')
let saveField = document.getElementById('save')

// console.log(countEle);
// console.log(incrementEle);
// console.log(saveEle);
// console.log(saveField);

let count = 0
incrementEle.addEventListener('click',()=>{
    count +=1
    countEle.textContent =  count
})
saveEle.addEventListener('click',()=>{
    saveField.textContent += count+", "
    count = 0
    countEle.textContent = count
})