// images
let images =document.querySelectorAll('img')
// wrapper
let wrapper = document.getElementById('wrapper')
// imagewrapper
let imagewrapper = document.getElementById('fullImg')
// close
let close = document.querySelector('span')

// console.log(images);
// console.log(wrapper);
// console.log(imagewrapper);
// console.log(close);

images.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        openModal(`images/img${index}.jpg`)
    })
})

function openModal(pic){
    wrapper.style.display='flex'
    imagewrapper.src = pic
}

close.addEventListener('click',()=> wrapper.style.display='none')