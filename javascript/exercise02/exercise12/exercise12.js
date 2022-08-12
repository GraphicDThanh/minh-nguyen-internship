// Create a list of all bold items
let boldItems;

// Collect all <strong> tags
function getBoldItems() {
  boldItems = document.getElementsByTagName('strong');
}

// loading status of the current document.
document.readyState = getBoldItems();

// iterate all bold tags and change color
function highlight() {
  for (let i = 0; i < boldItems.length; i += 1) {
    boldItems[i].style.color = 'red';
  }
}

// On mouse out highlighted words become black
function returnNormal() {
  for (let i = 0; i < boldItems.length; i += 1) {
    boldItems[i].style.color = 'black';
  }
}
