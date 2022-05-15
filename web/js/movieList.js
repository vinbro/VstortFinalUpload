fetch('http://localhost:3000/movies').then(movies => movies.json()).then(data => sendData(data))
function ShowMovie(data) {
    scrollTo(0, 0)
    document.querySelector('header').style.backgroundImage = `url(${data.widePoster})`
    document.querySelector('.poster').style.backgroundImage = `url(${data.poster})`
    document.querySelector('.text').innerHTML = `<h3>
    <h1>${data.name}</h1> <br> <br> <br>${data.about}</h3>`
    document.querySelector('.time h2').innerText = `${data.length}`
    document.querySelector('.rating h2').innerText = `${data.rating}👍`

}
function WatchLater(data) {
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
function sendData(data) {
    buildHeaderMovie(data)
    buildMovies(data)
}
const movieList = document.querySelectorAll('.movieList')[0];
const movieList1 = document.querySelectorAll('.movieList')[1];
const movieList2 = document.querySelectorAll('.movieList')[2];
const movieList3 = document.querySelectorAll('.movieList')[3];
const movieList4 = document.querySelectorAll('.movieList')[4];
function buildMovies(movies) {
    movies.forEach(movie => {
        if (movie.wouldLike) {
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
        if (movie.genera1 == 'Com' || movie.genera2 == 'Com') {
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
            watch.addEventListener('click', () => {
                ShowMovie(movie)
            })
            div.classList.add('movie')
            img.classList.add('img')
            blur.classList.add('blur')
            h1.classList.add('tittle')
            later.addEventListener('click', () => {
                WatchLater(movie)
            })
            watch.classList.add('watch')
            later.classList.add('later')
            movieList1.appendChild(div)
            div.appendChild(blur)
            blur.appendChild(img)
            blur.append(h1)
            blur.append(watch)
            blur.append(later)
        }
        if (movie.genera1 == 'Act' || movie.genera2 == 'Act') {
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
            watch.addEventListener('click', () => {
                ShowMovie(movie)
            })
            later.addEventListener('click', () => {
                WatchLater(movie)
            })
            div.classList.add('movie')
            img.classList.add('img')
            blur.classList.add('blur')
            h1.classList.add('tittle')
            watch.classList.add('watch')
            later.classList.add('later')

            movieList2.appendChild(div)
            div.appendChild(blur)
            blur.appendChild(img)
            blur.append(h1)
            blur.append(watch)
            blur.append(later)
        }
        if (movie.genera1 == 'Hor' || movie.genera2 == 'Hor') {
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
            watch.addEventListener('click', () => {
                ShowMovie(movie)
            })
            later.addEventListener('click', () => {
                WatchLater(movie)
            })
            h1.classList.add('tittle')
            watch.classList.add('watch')
            later.classList.add('later')

            movieList3.appendChild(div)
            div.appendChild(blur)
            blur.appendChild(img)
            blur.append(h1)
            blur.append(watch)
            blur.append(later)
        }
        if (movie.genera1 == 'Sci' || movie.genera2 == 'Sci') {
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
            watch.addEventListener('click', () => {
                ShowMovie(movie)
            })
            later.addEventListener('click', () => {
                WatchLater(movie)
            })
            h1.classList.add('tittle')
            watch.classList.add('watch')
            later.classList.add('later')

            movieList4.appendChild(div)
            div.appendChild(blur)
            blur.appendChild(img)
            blur.append(h1)
            blur.append(watch)
            blur.append(later)
        }
    });
}
function buildHeaderMovie(movies) {
    let rnd = Math.floor(Math.random() * movies.length);
    document.querySelector('header').style.backgroundImage = `url(${movies[rnd].widePoster})`
    document.querySelector('.poster').style.backgroundImage = `url(${movies[rnd].poster})`
    document.querySelector('.text').innerHTML = `<h3>
    <h1>${movies[rnd].name}</h1> <br> <br> <br>${movies[rnd].about}</h3>`
    document.querySelector('.time h2').innerText = `${movies[rnd].length}`
    document.querySelector('.rating h2').innerText = `${movies[rnd].rating}👍`
}

document.querySelectorAll('.movieList').forEach(slider => {

    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX); //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});
document.querySelector('.watchLater').addEventListener('click', () => {
    WatchLater({ name: document.querySelector('.text h1').innerText })
})