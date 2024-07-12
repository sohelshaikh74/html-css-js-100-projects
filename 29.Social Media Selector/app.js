// selectField
let selectField = document.getElementById('selectField')

// selectText
let selectText = document.getElementById('selectText')

// list
let list = document.getElementById('list')

// arrowIcon
let arrowIcon = document.getElementById('arrowIcon')

// options

let options = document.getElementsByClassName('options')


// console.log((selectField));
// console.log((selectText));
// console.log((list));
console.log(arrowIcon);
// console.log(options);


selectField.addEventListener('click',()=>{
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
})

for(option of options){
    option.onclick = function(){
        selectText.innerHTML = this.textContent
        list.classList.toggle('hide');
        arrowIcon.classList.toggle('rotate');
    }
}