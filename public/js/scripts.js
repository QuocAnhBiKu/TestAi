const form = document.getElementById('user-form');
const resultParagraph = document.querySelector('#result p');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const query = document.getElementById('username').value;

  const api = 'https://us-central1-testai3.cloudfunctions.net/app/api/v1'
  try {
    resultParagraph.textContent = 'Loading...';

    const response = await fetch(`${api}/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query })
    });

    if (response.ok) {
      const data = await response.json();
      resultParagraph.textContent = data.answer;
    } else {
      resultParagraph.textContent = 'Error: Could not get a response from the server.';
    }
  } catch (error) {
    resultParagraph.textContent = 'Error: ' + error.message;
  }
});