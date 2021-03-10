import React, {Component, useState, useEffect} from 'react';
import Button from "../../elements/Button";

const Item = ({slug, needle, genre}) => {
  // movieDetails object is undefined upon initialization,
  // after component is mounted, useEffect() hook fetches
  // the data from API and populates all the necessary details

  const [movieDetails, setMovieDetails] = useState(),
    hasNeedle = (s = '') =>
      !!s && Object
        .values(movieDetails || {})
        .some(movieDetail =>
          movieDetail
            .toLowerCase()
            .includes(s.toLowerCase()))

  // API params are appended with the slug (search keywords)

  const apiBaseURL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/',
    headers = {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "647a93cc65msh50494ccaf2a1f63p19a4dajsnd4639551f841",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      }
    }

  useEffect(() => {
    fetch(apiBaseURL+encodeURI(slug), headers)
      .then(res => res.json())
      .then(({title, poster, plot, year}) =>
        setMovieDetails({title, poster, plot, year})
      )
  }, [])

  return !!movieDetails && (!needle || hasNeedle(needle)) && (
    <div className={'item'}>
      <div className={'item__cover'} style={{ backgroundImage: `url(${movieDetails.poster})`}}>
        <Button text={'item__menu'}/>
      </div>
      <div className={'item__description'}>
        <h3 className={'item__name'}>{movieDetails.title}</h3>
        <p className={'item__category'}>
          {genre.map((name) => (
              <span key={name}>{name}</span>
          ))}
        </p>
        <span className={'item__year'}>{movieDetails.year}</span>
      </div>
    </div>
  )
}

export default Item