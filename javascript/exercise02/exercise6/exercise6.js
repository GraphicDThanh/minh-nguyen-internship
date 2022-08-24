const form = document.querySelector('.form');
const items = document.querySelectorAll('.value');

// Get data from selected cell
items.forEach((item) => {
  item.addEventListener('click', (e) => {
    const text = e.target.innerHTML;

    document.querySelector('#content').value = text;
    e.target.classList.add('action');
  });
});

// Click submit button to push the edited data to the selected cell
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const editedText = document.querySelector('.action');
  const { value } = document.querySelector('#content');

  editedText.innerHTML = value;
  editedText.classList.toggle('action');
});
