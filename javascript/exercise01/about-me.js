// Change the body style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";

// Replace each of the spans (nickname, favorites, hometown) with your own information.
document.getElementById("name").innerHTML = "Minh Nguyen";
document.getElementById("favorites").innerHTML = "listen to music";
document.getElementById("hometown").innerHTML = "Da Nang";

// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red
var items = document.getElementsByTagName("li");
for (var i = 0; i < items.length; i++) {
  items[i].className = "listitem";
}

// Create a new img element and set its src attribute to a picture of you. Append that element to the page.
var myPic = document.createElement("img");
myPic.src =
  "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png";
document.body.appendChild(myPic);
