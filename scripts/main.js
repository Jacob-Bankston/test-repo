var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vocaltract.svg') {
      myImage.setAttribute ('src','images/vocaltract2.png');
    } else {
      myImage.setAttribute ('src','images/vocaltract.svg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Vocal Aficionado, ' + myName;
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Vocal Aficionado ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}