"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Скільки фільмів ти вже переглянув?", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Скільки фільмів ти вже переглянув?", "");
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один з останніх переглянутих фільмів?", ""),
        b = prompt("На скільки оцінете його?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Переглянуто мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
      console.log("Ви кіноман");
    } else {
      console.log("Виниклв помилка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt(`Ваш любимий жанр під номером ${i}`);

      if (genres === "" || genres == null) {
        console.log("Ви ввели невірні дані або взагалі нічого не ввели");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимий жанр ${i + 1} це ${item}`);
    });
  },
};
