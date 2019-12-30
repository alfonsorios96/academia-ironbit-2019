const [moviesBtn, usersBtn, newUserBtn] = document.querySelectorAll('.button');
const grid = document.getElementById('grid');

moviesBtn.addEventListener('click', event => {
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(movies => movies.forEach(movie => grid.insertAdjacentHTML('beforeend', `
            <div class="movie">
                <img class="movie__img" src="${movie.imageURL}">
                <h1>${movie.title}</h1>
                <p>${movie.description}</p>
            </div>
        `)))
        .catch(error => alert(error))
});

usersBtn.addEventListener('click', event => {
    fetch('http://localhost:3000/users')
        .then(data => data.json())
        .then(users => users.forEach(user => alert(user)))
        .catch(error => alert(error))
});

const newObj = {
    "id": 1,
    "username": "example",
    "email": "example@example.com",
    "password": "examplepass"
};

const options = {
    method: 'POST',
    body: JSON.stringify(newObj),
    headers: {
        'Content-Type': 'application/json'
    }
};

newUserBtn.addEventListener('click', event => {
    event.preventDefault();
    fetch('http://localhost:3000/users', options)
        .then(response => alert(response))
        .catch(error => alert(error))
});