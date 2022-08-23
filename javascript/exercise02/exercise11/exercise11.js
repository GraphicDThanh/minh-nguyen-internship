function displayRandomImage() {
  // assign the given link to the variable
  const theImages = [{
    src: 'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',
    width: '240',
    height: '160',
  }, {
    src: 'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',
    width: '320',
    height: '195',
  }, {
    src: 'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg',
    width: '500',
    height: '343',
  }];

  // norsignment number for image
  const number = [];
  let i;
  const j = theImages.length;
  for (i = 0; i < j; i += 1) {
    number[i] = new Image();
    number[i].src = theImages[i].src;
    number[i].width = theImages[i].width;
    number[i].height = theImages[i].height;
  }

  // create random image number
  function getRandomInt(min, max) {
    //  returns a random number between min and max (min < number <= max)
    const randomImg = Math.floor(Math.random() * (max - min + 1)) + min;
    return number[randomImg];
  }

  // 0 is first image, number.length - 1 is  last image
  const newImage = getRandomInt(0, number.length - 1);

  // remove the previous images
  const images = document.getElementsByTagName('img');
  const l = images.length;
  for (let p = 0; p < l; p += 1) {
    images[0].parentNode.removeChild(images[0]);
  }
  // display the image
  document.body.appendChild(newImage);
}

const button = document.getElementById('display');
button.onclick = displayRandomImage();
