let lists = document.getElementsByClassName('list')
console.log(lists);

let rightBox = document.querySelector('.right')
let leftBox = document.querySelector('.left')
console.log(rightBox);
console.log(leftBox);

for(let list of lists){
    list.addEventListener('dragstart',(e)=>{
        let selected = e.target
        rightBox.addEventListener('dragover',(e)=>{
             e.preventDefault()
        })
        rightBox.addEventListener('drop',(e)=>{
            rightBox.appendChild(selected)
            selected= null
        })
        leftBox.addEventListener('dragover',(e)=>{
             e.preventDefault()
        })
        leftBox.addEventListener('drop',(e)=>{
            rightBox.appendChild(selected)
            selected= null
        })
    })
}
