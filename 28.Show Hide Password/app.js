const input = document.querySelector('input')
const eyeIcon = document.querySelector('#eye-icon')

eyeIcon.addEventListener('click',()=>{
    // if(input.type === 'password'){
    //     input.type = "text"
    // }
    // else{
    //     input.type="password"
    // }
    // refactor
    input.type==="password"?input.type="text":input.type="password"
})
