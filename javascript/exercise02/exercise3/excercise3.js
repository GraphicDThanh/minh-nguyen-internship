function setBackground() {
  // Get all the p elements that are descendants
  const myBodyElements = document.getElementsByTagName('p');

  // get the first p elements
  const p1 = myBodyElements[0];

  p1.style.background = 'aqua';

  // get the second p elements
  const p2 = myBodyElements[1];

  p2.style.background = 'chartreuse';
}

const button = document.getElementById('input');
button.onclick = setBackground();
