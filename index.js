let numberOfFilms

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')
    }
}
// start()

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
}

function rememberMyFilm(){
    for (i = 0;i < 2; i++) {
        const a = prompt('Какой последний фильм вы смотрели?','')
        const b = +prompt('На сколько оцените фильм','')
        if (a!= null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b
            console.log('done');
        } else {
            console.log('err');
            i--
        }
    }
}
// rememberMyFilm()


function detectPersonalLevel() {
    if (personalMovieDB.count < 10){
        console.log('Просмотренно довольно мало фильмов')
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count >= 30){
        console.log('Вы киноман')
    } else { console.log('Произошла ошибка')}
}
// detectPersonalLevel()

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
// showMyDB(personalMovieDB.privat)

function writeYourGenres(arr){
    for (i = 1;i <= 3; i++) {
        arr[i - 1] = prompt(`Ваш любимый жанр? #${i}`,'')
    }
}
// writeYourGenres(personalMovieDB.genres) 
console.log(personalMovieDB);