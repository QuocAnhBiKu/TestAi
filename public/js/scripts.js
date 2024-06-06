const form = document.getElementById('user-form');
const resultParagraph = document.querySelector('#result p');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); 

  const query = document.getElementById('username').value;

  try {
    resultParagraph.textContent = 'Loading...';

    const response = await fetch('http://localhost:5000/api/v1/ask', {
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