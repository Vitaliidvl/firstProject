"use strict";

const numberOfFilms = +prompt("Скільки фільмів ти вже переглянув?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один з останніх переглянутих фільмів?", ""),
  b = prompt("На скільки оцінете його?", ""),
  c = prompt("Один з останніх переглянутих фільмів?", ""),
  d = prompt("На скільки оцінете його?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
