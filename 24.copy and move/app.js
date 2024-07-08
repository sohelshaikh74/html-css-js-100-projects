// // copyText
// const copyText = document.querySelector('textarea[name=copyTxt')
// // finalText
// const finalText=document.querySelector('textarea[name=finalTxt')

// // moveBtn
// const moveBtn = document.querySelector('.moveBtn')

// // copyBtn
// const copyBtn = document.querySelector('.copyBtn')

// // output
// const output = document.querySelector('.output')


// copyBtn.addEventListener('click',()=>{
//     let temp = copyText.value
//     copyToClipBoard(temp    )
// })


// copyText.addEventListener('click',()=>this.select())
// finalText.addEventListener('click',()=>this.select())


// function copyToClipBoard(str){
//   const outputContainer = document.querySelector('.output-container')
// //   careting textArea
// const textarea = document.createElement('textarea')
// textarea.value = str
// outputContainer.appendChild('textarea')
// textarea.select();
// document.execCommand('copy')
// outputContainer.removeChild('textarea')
// output.classList.add('added')
// setTimeout(()=>{
//     output.classList.toggle('added')
//     output.textContent="";
// },2000)
// }


const copyText = document.querySelector("textarea[name=copyTxt");
const finalText = document.querySelector("textarea[name=finalTxt");
const moveBtn = document.querySelector(".moverBtn");
const copyBtn = document.querySelector(".copyBtn");
const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
  let temp = copyText.value;
  copyToClipBoard(temp);
});

moveBtn.addEventListener("click", () => {
  let temp = copyText.value;
  finalText.value = temp;
});

copyText.addEventListener("click", () => this.select());
finalText.addEventListener("click", () => this.select());

function copyToClipBoard(str) {
  const outputContainer = document.querySelector(".output-container");
  const textarea = document.createElement("textarea");
  textarea.value = str;
  outputContainer.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  outputContainer.removeChild(textarea);
  output.innerHTML = `<h3>Content Copied </h3>`;
  output.classList.add("added");
  setTimeout(() => {
    output.classList.toggle("added");
    output.textContent = "";
  }, 2000);
}