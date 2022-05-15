const movieList = document.querySelector('.movieList')
const genera = document.querySelector('#genera')
const ratings = document.querySelector('#ratings')
const dropdown = document.querySelector('.dropdown')
function fetchData() {
    fetch('http://localhost:3000/movies').then(data => data.json()).then(data => checkData(data))
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
    if (movie.new) {
        const div = document.createElement('div');
        const img = document.createElement('div');
        const blur = document.createElement('div');
        const h1 = document.createElement('h1');
        const watch = document.createElement('button');
        const later = document.createElement('button');
        h1.innerText = movie.name;
        watch.innerText = '▶ Watch Now'
        later.innerText = '📑 Add to watchlist'
        img.style.backgroundImage = `url(${movie.poster})`
        div.style.backgroundImage = `url(${movie.poster})`
        div.classList.add('movie')
        img.classList.add('img')
        blur.classList.add('blur')
        h1.classList.add('tittle')
        watch.classList.add('watch')
        watch.addEventListener('click', () => {
            ShowMovie(movie)
        })
        later.addEventListener('click', () => {
            WatchLater(movie)
        })
        later.classList.add('later')
        movieList.appendChild(div)
        div.appendChild(blur)
        blur.appendChild(img)
        blur.append(h1)
        blur.append(watch)
        blur.append(later)
    }
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
    document.querySelector('.watchLater').addEventListener('click', () => {
        WatchLater(movie)
    })
}
document.querySelector('.dropdown .blur1 button').addEventListener('click', () => {
    document.querySelector('.blur1').style.display = 'none'
    dropdown.style.height = '0vh'
})
function WatchLater(data) {
    console.log(data)
    fetch(`http://localhost:3000/${data.name}`)
    document.querySelector('.noti').innerHTML = `${data.name} was added to watch later.`
    document.querySelector('.noti').style.display = 'block';
    setTimeout(() => {
        document.querySelector('.noti').style.top = '10vh';
        document.querySelector('.noti').style.opacity = '100%';

    }, 10);
    setTimeout(() => {
        document.querySelector('.noti').style.top = '5vh';
        document.querySelector('.noti').style.opacity = '0%'
        document.querySelector('.noti').style.display = 'none';

    }, 3600);
}


window.addEventListener('load', () => {
    fetch('http://localhost:3000/movies').then(data => data.json()).then(data => splitData(data))
})
function splitData(data) {
    data.forEach(element => {
        buildMovies(element)
    });
}