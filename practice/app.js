let input = document.querySelector('input')
let eyeIcon = document.querySelector('#eye-icon')
console.log(input);
console.log(eyeIcon);
eyeIcon.addEventListener('click',()=>{
  // console.log('hello');
  if(input.type==='password'){
    input.type="text"
  }
  else{
    input.type="password"
  }
})