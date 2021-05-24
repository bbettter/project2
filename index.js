const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
}
const a1 = prompt('Какой последний фильм вы смотрели?','')
const a2 = +prompt('На сколько оцените фильм','')
const a3 = prompt('Какой последний фильм вы смотрели?','')
const a4 = +prompt('На сколько оцените фильм','')

personalMovieDB.movies[a1] = a2
personalMovieDB.movies[a3] = a4
console.log(personalMovieDB)