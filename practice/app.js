let indicator = document.querySelector('.scroll-indicator')
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

window.addEventListener('scroll',()=>{
    let scrollTop = document.documentElement.scrollTop
    let scrolled = (scrollTop/scrollHeight)*100
    indicator.style.width=`${scrolled}%`
})