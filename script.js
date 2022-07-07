
let navLinks = document.getElementById("navLinks")

function changeIcon(x) {

  if (navLinks.style.right === "0px"){
    navLinks.style.right = "-200px";
  }
  else{
    navLinks.style.right = "0";
  }
  x.classList.toggle("change");
}


// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;


const canvas = document.getElementById("canvas");
canvas.height = 600;
canvas.width = 1000;
canvas.style.left = "300px";
canvas.style.top = "100px";

const context = canvas.getContext('2d');

canvas.addEventListener('mousedown', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('mousemove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('mouseup', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = 'black';
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
