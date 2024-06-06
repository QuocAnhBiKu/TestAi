window.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');

    // Fetch users from backend
    fetch('https://us-central1-testai3.cloudfunctions.net/app/api/v1/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>Age: ${user.age}</p>
                `;
                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching users:', error));
});
