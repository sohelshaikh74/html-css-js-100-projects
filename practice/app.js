let input = document.querySelector('input')

let eyeIcon=document.querySelector('#eye-icon')

eyeIcon.addEventListener('click',()=>{
  input.type ==="password"?input.type="text":input.type="password"
})


