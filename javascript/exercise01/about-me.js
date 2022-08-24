// Change the body style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = 'Arial, sans-serif';

// Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById('name').innerHTML = 'Minh Nguyen';
document.getElementById('favorites').innerHTML = 'listen to music';
document.getElementById('hometown').innerHTML = 'Da Nang';

const items = document.getElementsByTagName('li');
const myPic = document.createElement('img');

// Iterate through each li and change the class to "listitem".
for (let i = 0; i < items.length; i += 1) {
  items[i].className = 'listitem';
  // Add a style tag that sets a rule for "listitem" to make the color red.
  items[i].style.color = 'red';
}

// Create a new img element and set its src attribute to a picture of you.
myPic.src = 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png';
document.body.appendChild(myPic);
