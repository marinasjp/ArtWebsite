
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


