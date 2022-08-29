function setBackground() {
  // Get all the p elements that are descendants
  const myBodyElements = document.getElementsByTagName('p');

  // get the first p elements
  const paraFirst = myBodyElements[0];

  paraFirst.style.background = 'aqua';

  // get the second p elements
  const paraSecond = myBodyElements[1];

  paraSecond.style.background = 'chartreuse';
}

const button = document.getElementById('input');

button.onclick = setBackground();
