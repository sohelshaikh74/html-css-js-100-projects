// menu
const menu = document.querySelector('.menu')

// links

const links = document.querySelectorAll('li')
// highlight
const highlight = document.querySelectorAll('.highlight')

// btns
const btn = document.querySelector('.btn')

// console.log(menu);
// console.log(links);
// console.log(highlight);
// console.log(btn);

btn.addEventListener('click',()=>{
    if(this.dataset.open==="close"){
        menu.style.clipPath = "circle(100% at 50%)";
        this.dataset.opne='open'

    }else{
        menu.style.clipPath =""
        this.dataset.open ="close"
        highlight.style =""
    }
})

