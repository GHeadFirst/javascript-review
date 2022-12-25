console.log("hello there!");
let color = document.querySelector(".body")
let colorText = document.querySelector(".text-color")

function generateBackgroundColor() {
    let colorGenerated = '#' + Math.floor(Math.random()*16777215).toString(16)
    color.style.backgroundColor = colorGenerated
    colorText.textContent = `Your color is: ${colorGenerated}`
    
    
    console.log(colorText.textContent);
    console.log(color);
    // console.log(colorGenerated);
}

  document.querySelector(".btn").addEventListener('click', () => {
   generateBackgroundColor()
  });




//   let color;

// function generateBackgroundColor() {
//   color = '#' + Math.floor(Math.random()*16777215).toString(16);
// }

// const button = document.querySelector('button');
// button.addEventListener('click', () => {
//   generateBackgroundColor();
//   document.body.style.backgroundColor = color;
//   const colorTextElements = document.getElementsByClassName("text-color");
//   for (let i = 0; i < colorTextElements.length; i++) {
//     colorTextElements[i].textContent = color;
//   }
// });

