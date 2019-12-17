const loginBtn = document.getElementById('loginBtn');
const movieBtn = document.getElementById('movieBtn');
const movieGrid = document.querySelector('.grid');

loginBtn.addEventListener('click', () => {
    location.href="./login.html";
});

movieBtn.addEventListener('click', event => {
    fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(data => data.forEach(movie => {
            movieGrid.insertAdjacentHTML('beforeend', `
            <div class="movie">
                <img src="${movie.poster}" alt="movie poster" class="movie__img">
                <h2 class="movie__title">${movie.title}</h2>
                <p class="movie__description">${movie.description}</p>
            </div>
            `);
        }))
        .catch(error => console.error(error));
});