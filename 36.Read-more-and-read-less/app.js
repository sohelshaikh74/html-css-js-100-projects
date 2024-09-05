let demo = document.querySelector('.continue')
let btn = document.querySelector('.btn');
let content2 = document.querySelector('.contnet-2')
btn.addEventListener('click',()=>{
   content2.classList.toggle('toggle')
   demo.classList.toggle('toggle')

})