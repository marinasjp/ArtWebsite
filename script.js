
let navLinks = document.getElementById("navLinks")

function changeIcon(x) {

  if (navLinks.style.visibility === "visible"){
    navLinks.style.top = "-770px";
    navLinks.style.visibility = "hidden";
  }
  else{
    navLinks.style.top = "0";
    navLinks.style.visibility = "visible";
  }
  x.classList.toggle("change");
}


// When true, moving the mouse draws on the canvas
let isDrawing = false;
let x = 0;
let y = 0;


const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth * 0.7;
canvas.height = window.innerHeight * 0.6;
canvas.style.top = "130px";

const isMobile = window.matchMedia("only screen and (max-width: 700px)").matches;

if (isMobile) {
  canvas.style.top = "100px";
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
  x = e.touches[0].clientX;
  y = e.touches[0].clientY;
  isDrawing = true;
});

canvas.addEventListener('touchmove', e => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
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

// Prevent scrolling when touching the canvas
document.body.addEventListener("touchstart", function (e) {
  if (e.target === canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchend", function (e) {
  if (e.target === canvas) {
    e.preventDefault();
  }
}, false);
document.body.addEventListener("touchmove", function (e) {
  if (e.target === canvas) {
    e.preventDefault();
  }
}, false);