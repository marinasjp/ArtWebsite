
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

const isMobile = window.matchMedia("only screen and (max-width: 700px)").matches;

if (isMobile) {
  canvas.height = 600;
  canvas.width = 450;
  canvas.style.left = "20px";
  canvas.style.top = "30px";
}

const context = canvas.getContext('2d');


// for computer
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


//for mobile
canvas.addEventListener('touchstart', e => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener('touchmove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener('touchend', e => {
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
