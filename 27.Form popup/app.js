// close
const close = document.getElementById('close')
// open
let open = document.getElementById('open')
// modal
const modal = document.getElementById('modal')

// console.log(close);
// console.log(open);
// console.log(modal);

open.addEventListener('click',()=>
    modal.classList.add('show-modal')
)

close.addEventListener('click',()=>modal.classList.remove('show-modal'))

window.addEventListener('click',e=>e.target===modal?modal.classList.remove('show-modal'):false)