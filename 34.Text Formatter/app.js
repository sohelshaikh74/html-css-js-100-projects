let output = document.getElementById('output')

let input = document.getElementById('text-input')
let capital = document.getElementById('capital')
let small = document.getElementById('small')

// (input.value);
let array = []
capital.addEventListener('click',()=>{
        array = input.value
        console.log(array);
})