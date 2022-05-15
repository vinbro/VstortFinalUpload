const movieList = document.querySelector('.movieList')
const genera = document.querySelector('#genera')
const ratings = document.querySelector('#ratings')
const dropdown = document.querySelector('.dropdown')
function fetchData() {
    fetch('http://localhost:3000/watchLater').then(data => data.json()).then(data => checkData(data))
}
function checkData(data) {
    movieList.innerHTML = '';
    data.forEach(movie => {
        let name = movie.name.toLowerCase();
        if (name.includes(document.querySelector('.search').value.toLowerCase()) && (movie.genera1 == genera.value || movie.genera2 == genera.value || genera.value == 'none') && (parseInt(movie.rating) >= parseInt(ratings.value))) {
            buildMovies(movie)
        }
    });

}
document.querySelector('.search').addEventListener('keydown', (e) => {
    fetchData()
})
document.querySelector('.send').addEventListener('click', (e) => {
    fetchData()
})
function buildMovies(movie) {
    const div = document.createElement('div');
    const img = document.createElement('div');
    const blur = document.createElement('div');
    const h1 = document.createElement('h1');
    const watch = document.createElement('button');
    const remove = document.createElement('button');
    h1.innerText = movie.name;
    watch.innerText = '▶ Watch Now'
    remove.innerText = 'Remove From Watch Later'
    img.style.backgroundImage = `url(${movie.poster})`
    div.style.backgroundImage = `url(${movie.poster})`
    div.classList.add('movie')
    img.classList.add('img')
    blur.classList.add('blur')
    h1.classList.add('tittle')
    watch.classList.add('watch')
    remove.classList.add('later')
    watch.addEventListener('click', () => {
        ShowMovie(movie)
    })
    remove.addEventListener('click', () => {
        RemoveMovie(movie)
    })
    movieList.appendChild(div)
    div.appendChild(blur)
    blur.appendChild(img)
    blur.append(h1)
    blur.append(watch)
    blur.append(remove)
}
function ShowMovie(movie) {
    dropdown.style.height = '70vh'
    dropdown.style.backgroundImage = `url(${movie.widePoster})`;
    document.querySelector('.poster').style.backgroundImage = `url(${movie.poster})`
    document.querySelector('.blur1').style.display = 'flex'
    document.querySelector('.poster').style.backgroundImage = `url(${movie.poster})`
    document.querySelector('.text').innerHTML = `<h3>
    <h1>${movie.name}</h1> <br> <br> <br>${movie.about}</h3>`
    document.querySelector('.time h2').innerText = `${movie.length}`
    document.querySelector('.rating h2').innerText = `${movie.rating}👍`

}
document.querySelector('.dropdown .blur1 button').addEventListener('click', () => {
    document.querySelector('.blur1').style.display = 'none'
    dropdown.style.height = '0vh'
})
window.addEventListener('load', () => {
    fetch('http://localhost:3000/watchLater').then(data => data.json()).then(data => splitData(data))
})
function splitData(data) {
    if (data.length == 0) {
        document.querySelector('.noMovies').style.display = 'block'
    }
    data.forEach(element => {
        buildMovies(element)
    });
}
function RemoveMovie(movie) {
    fetch(`http://localhost:3000/remove/${movie.name}`)
    document.location.reload(true)
}