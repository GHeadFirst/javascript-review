console.log("hello there!");
let color = document.body.style.backgroundColor
let colorText = document.querySelector("text-color").textContent

function generateBackgroundColor() {
    let colorGenerated = '#' + Math.floor(Math.random()*16777215).toString(16)
    colorText = color
}

button.addEventListener('click', () => {
   generateBackgroundColor()
  });

color = colorGenerated



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

