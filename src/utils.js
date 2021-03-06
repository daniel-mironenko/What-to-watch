import React from "react";
import {MONTHS, ALL_GENRE, MAX_GENRES} from './constans';

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const checkLengthGenres = (genres) => {
  if (genres.length > MAX_GENRES) {
    return genres.slice(0, MAX_GENRES);
  }

  return genres;
};

const getDescriptionRating = (rating) => {
  switch (true) {
    case rating < 3:
      return `Bad`;

    case rating >= 3 && rating < 5:
      return `Normal`;

    case rating >= 5 && rating < 8:
      return `Good`;

    case rating >= 8 && rating < 10:
      return `Very good`;

    case rating >= 10:
      return `Awesome`;
  }
  return `Unknown`;
};

const getRatingWithComma = (rating) => {
  if (Number.isInteger(rating)) {
    return commaReplacement(rating.toFixed(1));
  }

  return commaReplacement(rating);
};

const getFormatedRunTime = (time) => {
  const minute = time % 60;
  const hour = Math.floor(time / 60);

  return `${hour > 0 ? `${hour}h ` : ``}${minute > 0 ? `${minute}m` : ``}`;
};

const getListActors = (list) => {
  return list.map((it, index) => {
    if (index !== list.length - 1) {
      return <React.Fragment key={it}> {it}, <br/> </React.Fragment>;
    } else {
      return <React.Fragment key={it}> {it} </React.Fragment>;
    }
  });
};

const getDateForComment = (strDate) => {
  const date = new Date(strDate);
  const year = date.getFullYear();
  const day = date.getDate();
  const monthIndex = date.getMonth() + 1;
  const month = MONTHS[monthIndex];

  return `${month} ${day}, ${year}`;
};

const commaReplacement = (rating) => {
  return String(rating).replace(`.`, `,`);
};

const getFilmsByGener = (films, genre) => {
  if (genre === ALL_GENRE) {
    return films;
  } else {
    return films.filter((it) => it.genre === genre);
  }
};

const checkFilmInFavorite = (listFavorite, film) => {
  return Boolean(listFavorite.find((it) => it.id === film.id));
};

const removeFilmFromFavorites = (favorites, film) => {
  const filmIndex = favorites.findIndex((it) => it.id === film.id);
  favorites.splice(filmIndex, 1);
  return favorites;
};

const convertColor = (color) => {
  if (color.substring(0, 1) === `#`) {
    color = color.substring(1);
  }

  const rgbColor = {};

  rgbColor.r = parseInt(color.substring(0, 2), 16) + 10;
  rgbColor.g = parseInt(color.substring(2, 4), 16) + 10;
  rgbColor.b = parseInt(color.substring(4), 16) + 10;

  return `rgb(${rgbColor.r},${rgbColor.g},${rgbColor.b})`;
};

const getTimeForVideoPlayer = (time) => {
  const timeFloor = Math.floor(time);
  const hours = Math.floor(timeFloor / 60 / 60);
  const minutes = Math.floor(timeFloor / 60) - (hours * 60);
  const seconds = timeFloor % 60;
  const castomTime = `${hours > 0 ? `${hours}:` : ``}${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  return castomTime;
};

export {
  extend,
  checkLengthGenres,
  getDescriptionRating,
  getFormatedRunTime,
  getListActors,
  getDateForComment,
  getRatingWithComma,
  getFilmsByGener,
  checkFilmInFavorite,
  removeFilmFromFavorites,
  convertColor,
  getTimeForVideoPlayer
};
