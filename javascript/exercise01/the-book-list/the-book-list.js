// Create array of books
const books = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    alreadyRead: false,
  },
  {
    title: 'Conan',
    author: 'Aoyama',
    alreadyRead: true,
  }];

//  Create p element with the book title and author and append it to the page.
for (let i = 0; i < books.length; i += 1) {
  const bookP = document.createElement('p');
  const bookDescription = document.createTextNode(`${books[i].title} by ${books[i].author}`);

  bookP.appendChild(bookDescription);
  document.body.appendChild(bookP);
}

// Bonus: Use a ul and li to display the books.
const bookList = document.createElement('ul');

for (let i = 0; i < books.length; i += 1) {
  const bookItem = document.createElement('li');
  const bookImg = document.createElement('img');
  const bookDescription = document.createTextNode(` ${books[i].title} by ${books[i].author}`);

  // Bonus: Add an img element for each book on the page.
  bookImg.src = books[i].img;
  bookItem.appendChild(bookImg);

  // Book title and author and append it to the page.
  bookItem.appendChild(bookDescription);

  // Bonus: Change the style of the book depending on whether you have read it or not.
  if (!books[i].alreadyRead) {
    bookItem.style.color = 'red';
  }

  bookList.appendChild(bookItem);
}

document.body.appendChild(bookList);
