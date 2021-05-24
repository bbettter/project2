const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','')

const personalMovieDB = {
    
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false
}
    if (personalMovieDB.count>30){
        console.log('Вы киноман')
    } else if (personalMovieDB.count<=30 && personalMovieDB.count >= 10){
        console.log('Вы классический зритель')
    } else if (personalMovieDB.count<10 && personalMovieDB.count>0){
        console.log('Просмотренно довольно мало фильмов')
    } else { console.log('Произошла ошибка')}


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
console.log(personalMovieDB)