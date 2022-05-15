const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
const port = 3000;
let movies = [
    {
        name: 'MoonKnight',
        length: '4 Episods x 50min',
        director: 'Robert Zemeckis',
        rating: '7.7/10',
        about: `Steven Grant and mercenary Marc Spector investigate the mysteries of the Egyptian gods from inside the same body.`,
        poster: 'https://pbs.twimg.com/media/FMv19p9VkAQmPAn?format=jpg&name=medium',
        widePoster: 'https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/432338/large_469ade0ebca7d222f70b34a073079bbd-MoonKnight_20topp.jpg',
        genera1: 'Act',
        genera2: 'Sci',
        wouldLike: true,
        type: 'show',
        new: true,
    },
    {
        name: 'Back To The Future',
        length: '1h 56min',
        director: 'Robert Zemeckis',
        rating: '8.5/10',
        about: `Marty travels back in time using an eccentric scientist's time machine. However, he must make his high-school-aged parents fall in love in order to return to the present.`,
        poster: 'https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_SY741_.jpg',
        widePoster: 'https://miro.medium.com/max/1400/0*AQOKsdjBjm63oAE-.jpg',
        genera1: 'Sci',
        genera2: 'Com',
        wouldLike: false,
        type: 'movie',
        new: false,

    },
    {
        name: 'Us',
        length: '2h 1min',
        director: 'Jordan Peele',
        rating: '6.8/10',
        about: 'Adelaide Wilson and her family are attacked by mysterious figures dressed in red. Upon closer inspection, the Wilsons realise that the intruders are exact lookalikes of them.',
        poster: 'https://collider.com/wp-content/uploads/2017/06/us-poster.jpg',
        widePoster: 'http://s21519.pcdn.co/wp-content/uploads/2019/04/Us.png',
        genera1: 'Hor',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: 'Uncharted',
        length: '1h 56min',
        director: 'Ruben Fleischer',
        rating: '6.6/10',
        about: `Treasure hunter Victor "Sully" Sullivan recruits street-smart Nathan Drake to help him recover a 500-year-old lost fortune amassed by explorer Ferdinand Magellan. What starts out as a heist soon becomes a globe-trotting, white-knuckle race to reach the prize before the ruthless Santiago Moncada can get his hands on it.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BM2Y0NjNkZTYtZmVjOC00MTQxLTk2OTYtZTBhNzhjMDM1YzRhXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg',
        widePoster: 'https://www.unchartedmovie.com/images/share.jpg',
        genera1: 'Act',
        genera2: 'Com',
        wouldLike: true,
        type: 'movie',
        new: true,


    },
    {
        name: `The King's Man`,
        length: '2h 11min',
        director: 'Matthew Vaughn',
        rating: '6.3/10',
        about: `One man must race against time to stop history's worst tyrants and criminal masterminds as they get together to plot a war that could wipe out millions of people and destroy humanity.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTM3ZTllNzItNTNmOS00NzJiLTg1MWMtMjMxNDc0NmJhODU5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
        widePoster: 'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/The-Fall-of-The-Kingsman-Franchise.jpg',
        genera1: 'Act',
        wouldLike: true,
        type: 'movie',
        new: false,


    },
    {
        name: `Murderville`,
        length: '6 Episodes x 29 - 35 min',
        director: 'Matthew Vaughn',
        rating: '6.9/10',
        about: `Terry Seattle and his guest celebrity partner improvise their way through a scripted murder investigation without the script.`,
        poster: 'https://resizing.flixster.com/Hm9EwkK2kW-TIMoheJd0SE1F468=/ems.ZW1zLXByZC1hc3NldHMvdHZzZWFzb24vZTgxZjU1YjMtZDMzYS00NjBhLTkwMjctYzMyMmE1ZWU5NDhkLmpwZw==',
        widePoster: 'https://www.hollywoodreporter.com/wp-content/uploads/2022/01/Murderville-Arnett-Obrien-Still-Netflix-Publicity-H-2022.jpg',
        genera1: 'Com',
        wouldLike: false,
        type: 'show',
        new: true,


    },
    {
        name: `The Adam Project`,
        length: '1h 46min',
        director: 'Shawn Levy',
        rating: '6.7/10',
        about: `After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future.`,
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGZMvynxlczttOzspLoBEulfsZHR4kiKQ_k-oixot8HxNz1xds',
        widePoster: 'https://ntvb.tmsimg.com/assets/p21396488_v_h8_aa.jpg?w=1280&h=720',
        genera1: 'Com',
        genera2: 'Sci',
        wouldLike: true,
        type: 'movie',
        new: true,


    },
    {
        name: `Arcane`,
        length: '9 Episods x 40min',
        director: 'Christian Linke, Alex Yee',
        rating: '9.1/10',
        about: `The origins of two iconic League champions, set in the utopian Piltover and the oppressed underground of Zaun.`,
        poster: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTxqxBh-2dnbTqCuj0n_Qx5G3IQ5r6maT6s53nfIRVNMpR0bf1N',
        widePoster: 'https://occ-0-990-987.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWINfeF3tnUMRAQSwGXXXPLTOuocmJoBdERICqr9a6-yG5cYwGKw99M5ihyZO-ajfYURepW9FfRNC_N99OrYEnCAMytZkPNLsJT40ry5BWBTh3kIemkt3oklVPdavw.jpg?r=c00',
        genera1: 'Sci',
        genera2: 'Act',
        wouldLike: false,
        type: 'show',
        new: false,


    },
    {
        name: `The Dictator`,
        length: '1h 23min',
        director: 'Larry Charles',
        rating: '6.4/10',
        about: `Aladeen, a brutal dictator, travels to New York in order to address the United Nations Security Council. However, his plans go south when a hitman hired by his uncle, Tamir, kidnaps him..`,
        poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT897lBOrKpLaRJhis0b1SK-4qRZNdVYP2P8XO9Tx_UMwd71wGX',
        widePoster: 'https://static.timesofisrael.com/www/uploads/2012/05/Dictator_Quad-1024x768.jpg',
        genera1: 'Com',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `Jumanji: Welcome to the Jungle`,
        length: '1h 59min',
        director: 'Jake Kasdan',
        rating: '6.9/10',
        about: `When four students play with a magical video game, they are drawn to the jungle world of Jumanji, where they are trapped as their avatars. To return to the real world, they must finish the game.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        widePoster: 'https://m.media-amazon.com/images/M/MV5BMjM0NTQ5NjI0N15BMl5BanBnXkFtZTgwNDI4NTY3MjI@._V1_.jpg',
        genera1: 'Com',
        genera2: 'Sci',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `Shrek`,
        length: '1h 30min',
        director: 'Andrew Adamson, Vicky Jenson',
        rating: '7.9/10',
        about: `Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.`,
        poster: 'https://i-viaplay-com.akamaized.net/viaplay-prod/993/800/1613762117-f07774c22a81b35740522f9e1b18e1e03331bc19.jpg?width=400&height=600',
        widePoster: 'https://i-viaplay-com.akamaized.net/viaplay-prod/993/800/1460157988-053acbbcb9511bbdc947d87d9ed899095e434016.jpg?width=1600&height=900',
        genera1: 'Com',
        genera2: 'Sci',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `6 Underground`,
        length: '2h 8min',
        director: 'Michael Bay',
        rating: '6.1/10',
        about: `Six individuals from all around the globe, each the very best at what they do, have been chosen not only for their skill, but for a unique desire to delete their pasts to change the future.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BNzE2ZjQxNjEtNmI2ZS00ZmU0LTg4M2YtYzVhYmRiYWU0YzI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        widePoster: 'https://www.jpsmedia.se/wp-content/uploads/2020/03/6-Underground.jpg',
        genera1: 'Com',
        genera2: 'Act',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `The Hobbit`,
        length: '2h 49min',
        director: 'Peter Jackson',
        rating: '7.8/10',
        about: `Bilbo Baggins, a hobbit, is persuaded into accompanying a wizard and a group of dwarves on a journey to reclaim the city of Erebor and all its riches from the dragon Smaug.`,
        poster: 'https://sfanytime-images-prod.secure.footprint.net/COVER/6bcbfb39-c076-4d3b-9ee6-a19400ab401d_COVER.jpg?w=375&fm=pjpg&s=89b91f05aba105eb1b3a99937ae586af',
        widePoster: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABePO6nPoHGwtE4iesaA7_RAU7OYTVkbVOGTQVszyp5pb3WWHL1KHuP_EMXMb9VJO2t5ily1slmyf6PV3u-v9GFdW6Ij8.jpg?r=7ab',
        genera1: 'Sci',
        genera2: 'Act',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `Kung Fu Panda`,
        length: '1h 38min',
        director: 'Mark Osborne, John Stevenson',
        rating: '7.6/10',
        about: `When Po the Panda, a kung fu enthusiast, gets selected as the Dragon Warrior, he decides to team up with the Furious Five and destroy the evil forces that threaten the Valley of Peace.`,
        poster: 'https://img-cdn.b17g.net/16448d77-193c-4642-b280-89ba68dd88e4/crop2x3.jpg',
        widePoster: 'https://www.denofgeek.com/wp-content/uploads/2016/01/kung-fu-panda-3.jpg?fit=910%2C564',
        genera1: 'Com',
        genera2: 'Sci',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `You Don't Mess With the Zohan`,
        length: '1h 53min',
        director: 'Dennis Dugan',
        rating: '5.6/10',
        about: `Zohan, an Israeli counterterrorist commando, stages his own death when he grows tired of his job and travels to New York City to pursue his lifelong dream of having a career in hairstyling.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BMzE2MzEzNDc5M15BMl5BanBnXkFtZTcwMzYxOTA3MQ@@._V1_.jpg',
        widePoster: 'https://i-viaplay-com.akamaized.net/viaplay-prod/604/484/1488966079-1807e802e2df5e04e879a6202d2ffbbf6c899fa5.jpg?width=960&height=540',
        genera1: 'Com',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `World War Z`,
        length: '1h 56min',
        director: 'Marc Forster',
        rating: '7/10',
        about: `Gerry, a former United Nations employee, unexpectedly finds himself in a race against time as he investigates a threatening virus that turns humans into zombies.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg',
        widePoster: 'https://cdn2.unrealengine.com/game-wwzaftermath-3840x2160-4787ff8ab111.jpg?h=720&resize=1&w=1280',
        genera1: 'Hor',
        genera2: 'Act',
        wouldLike: true,
        type: 'movie',
        new: false,


    },
    {
        name: `Scary Movie`,
        length: '1h 28min',
        director: 'Keenen Ivory Wayans',
        rating: '6.2/10',
        about: `Cindy Campbell and her friends mistakenly end up killing a man. A year after the unfortunate incident, someone stalks them, leaves threatening messages and tries to kill them one by one.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BMGEzZjdjMGQtZmYzZC00N2I4LThiY2QtNWY5ZmQ3M2ExZmM4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        widePoster: 'https://i-viaplay-com.akamaized.net/viaplay-prod/227/368/1613846872-a46210924cd60e489aa16441251782e625e32140.jpg?width=1600&height=900',
        genera1: 'Hor',
        genera2: 'Com',
        wouldLike: true,
        type: 'movie',
        new: false,


    },
    {
        name: `Blumhouse's Fantasy Island`,
        length: '1h 49min',
        director: 'Jeff Wadlow',
        rating: '4.9/10',
        about: `A mysterious man invites a group of lucky guests to his secretive resort to fulfil their darkest fantasies. However, when people start arriving, things take an unexpected turn.`,
        poster: 'https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/375923/b9afa069c6fef5b6f3cce6082946266a-fantasy-island-poster-2020.jpg',
        widePoster: 'https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABV3kPOBBTQSCloIi36j3FR_22mT5XoVqFazje4XSnlopkA4sA8qudvETOz5LX0G8NbrjMoAu8s5d9prTAAoS4vQ-UcOA.jpg?r=df5',
        genera1: 'Hor',
        genera2: 'Sci',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `G.I. Jane`,
        length: '2h 5min',
        director: 'Ridley Scott',
        rating: '6/10',
        about: `When a female lieutenant is given an opportunity to earn her place in Navy SEALs, she is determined to not bow down to the pressure or the expectations of those rooting for her to fail.`,
        poster: 'https://img-9gag-fun.9cache.com/photo/aWgn9rn_460s.jpg',
        widePoster: 'https://c.files.bbci.co.uk/B17E/production/_123983454_willsmithslap.jpg',
        genera1: 'Act',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `Spider-Man: No Way Home`,
        length: '2h 28min',
        director: 'Jon Watts',
        rating: '8.4/10',
        about: `Peter Parker seeks Doctor Strange's help to make people forget about Spiderman's identity. However, when the spell he casts gets corrupted, several unwanted guests enter their universe.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg',
        widePoster: 'https://d2iltjk184xms5.cloudfront.net/uploads/photo/file/423536/a148b63545b7397c7da08e3379df360c-spiderman3.png',
        genera1: 'Act',
        genera2: 'Sci',
        wouldLike: false,
        type: 'movie',
        new: true,


    },
    {
        name: `Star Wars: Revenge of the Sith (Episode III)`,
        length: '2h 20min',
        director: 'George Lucas',
        rating: '7.6/10',
        about: `Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.`,
        poster: 'https://prod.cdn.bbaws.net/TDC_Blockbuster_-_Production/943/356/DI-0351_po-reg-medium_orig-1573721952374.jpg',
        widePoster: 'https://wallpaperaccess.com/full/2120936.jpg',
        genera1: 'Act',
        genera2: 'Sci',
        wouldLike: false,
        type: 'movie',
        new: false,


    },
    {
        name: `Rick And Morty`,
        length: '49 Episodes x 22min',
        director: 'J. Michael Mendel',
        rating: '9.2/10',
        about: `Rick, an alcoholic sociopath and scientist, lives with his daughter Beth's family. Apart from building gadgets, he takes his morally right but dimwit grandson Morty on absurd intergalactic adventures.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg',
        widePoster: 'https://m.media-amazon.com/images/M/MV5BZmZhNWMyODgtMzA0OC00NWFhLTllODQtYmJkZjYxYWU4MGU1XkEyXkFqcGdeQWFybm8@._V1_QL75_UX500_CR0,0,500,281_.jpg',
        genera1: 'Com',
        genera2: 'Sci',
        wouldLike: false,
        type: 'show',
        new: false,

    },
    {
        name: `The Hungover Games`,
        length: '1h 25min',
        director: 'Josh Stolberg',
        rating: '3.5/10',
        about: `Bradley, Ed and Zach celebrate Doug's upcoming wedding but the hungover men wake up in a state of shock. However, they have to battle their way through the pop culture districts to save their lives.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BMTk0NjM3MDk3NV5BMl5BanBnXkFtZTgwNTEzNTY3MDE@._V1_.jpg',
        widePoster: 'https://m.media-amazon.com/images/M/MV5BNWFhYmFjYWUtZTE0Ny00MmU5LTliMjEtOTQ4OGNkMWFjOWYxXkEyXkFqcGdeQXVyOTc5MDI5NjE@._V1_.jpg',
        genera1: 'Act',
        genera2: 'Com',
        wouldLike: false,
        type: 'movie',
        new: false,

    },
    {
        name: `Chicago Med`,
        length: '138 Episodes x 40min',
        director: 'NBC',
        rating: '7.7/10',
        about: `The doctors and nurses who work at the emergency ward of the Gaffney Chicago Medical Center strive to save the lives of their patients while dealing with personal and interpersonal issues.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BMDUzNTBiZTUtZjBkOC00MzAyLTgxYTUtMjVkZDQ3MGUzNDE1XkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_FMjpg_UX1000_.jpg',
        widePoster: 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Campaign/landingpages/library/chicagomed/resize/art/chm-hero-d.jpg/_jcr_content/renditions/original.JPEG',
        genera1: 'Act',
        genera2: 'Sci',
        wouldLike: false,
        type: 'show',
        new: false,

    },
    {
        name: `Black Mirror`,
        length: '22 Episodes x 48 - 89min',
        director: 'Charlie Brooker; Konnie Huq; Jesse Armstrong; Rashida Jones; Michael Schur; William Bridges',
        rating: '8.8/10',
        about: `In an abstrusely dystopian future, several individuals grapple with the manipulative effects of cutting edge technology in their personal lives and behaviours.`,
        poster: 'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        widePoster: 'https://i.guim.co.uk/img/media/e86c89b522de759169ca921a4279b9718f38b94c/27_0_1213_728/master/1213.jpg?width=1200&quality=85&auto=format&fit=max&s=da92dffd8a4cafe9b7f9ed68cf036c3b',
        genera1: 'Sci',
        wouldLike: true,
        type: 'show',
        new: false,

    },

]
let users = [
    { 'e': 'vincent.brodin21@gmail.com', 'u': 'Vincent the best', 'p': 'Vincent2180' }
]
let watchLater = [];
app.listen(port, () => {
    console.log(`open on http://localhost:${port}/`)
})
app.get('/movies', (req, res) => {

    res.status(200).send(movies)

})
app.get('/watchlater', (req, res) => {
    res.status(200).send(watchLater)
})
app.get('/remove/:movie', (req, res) => {
    let updatedWatchLater = [];
    console.log(req.params.movie);
    watchLater.forEach(movie => {
        if (movie.name == req.params.movie) {

        }
        else {
            updatedWatchLater.push(movie)
        }
    });
    watchLater = [];
    watchLater = updatedWatchLater;
})
let username
app.post('/signUp', (req, res) => {
    console.log(req.body)
    const email = req.body.email;
    username = req.body.username;
    const password1 = req.body.password1;
    const password2 = req.body.password2;
    if (password1 === password2) {
        users.push({ "e": email, "u": username, "p": password1 })
        console.log(users)
        res.sendFile(path.join(__dirname, './res.html'));
    }
    else {
        res.status(500)
    }
})
app.get('/userData', (req, res) => {
    res.send({ "username": username })
})
app.get('/users', (req, res) => {
    res.send(users)
})
app.get('/:movie', (req, res) => {
    console.log(req.params.movie);
    movies.forEach(movie => {
        if (movie.name == req.params.movie) {
            watchLater.push(movie);
        }
    });
})