function setBackground() {
  const docBody = document.getElementsByTagName('body')[0];

  // Get all the p elements that are descendants of the body
  const myBodyElements = docBody.getElementsByTagName('p');

  // get the first p elements
  const p1 = myBodyElements[0];
  p1.style.background = 'aqua';

  // get the second p elements
  const p2 = myBodyElements[1];
  p2.style.background = 'chartreuse';
}
