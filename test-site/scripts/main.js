let myImage = document.querySelector("img");

myImage.onclick = function() {
  let mySrc = myImage.getAttribute("src");
  if (mySrc == "images/meme.png") {
    myImage.setAttribute("src", "images/meme2.png");
  } else {
    myImage.setAttribute("src", "images/meme.png");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = "GIB ME15k, " + myName;
  }
}

/* Initialization code */
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = "GIB ME 15k, "  + storedName;
}

myButton.onclick = function() {
  setUserName();
}