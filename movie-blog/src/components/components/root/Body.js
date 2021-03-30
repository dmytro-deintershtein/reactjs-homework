import React, {Component, useEffect, useState} from 'react';

import Filter from "../contained/Filter";
import Catalog from "../contained/Catalog";

const Body = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [filters, setFilters] = useState([]);
  const [genreName, setGenreName] = useState('all');
  const [sortType, setSortType] = useState('title');

  const apiBaseURL = 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/',
    headers = {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "647a93cc65msh50494ccaf2a1f63p19a4dajsnd4639551f841",
        "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
      }
    };

  const movies = [
    {slug: "knocking on heaven's door", genre: ['drama', 'criminal']},
    {slug: "interstellar", genre: ['sci-fi', 'drama']},
    {slug: "city lights", genre: ['comedy']},
    {slug: "matrix", genre: ['sci-fi', 'action']},
    {slug: "Amelie", genre: ['comedy']},
    {slug: "Showshank redemption", genre: ['drama', 'criminal']}
  ]

  movies.map(({slug, genre}) => (
    useEffect(() => {
      fetch(apiBaseURL + encodeURI(slug), headers)
        .then(res => res.json())
        .then((res) => {
            res.genre = genre;
            setItems(items => [...items, res]);
            setFilters(filters => [...filters, res.genre])
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  ));

  console.log(isLoaded, error);

  const filterHandle = (name) => {
    setGenreName(name);
    console.log(genreName);
  }

  const sortHandle = (name) => {
    setSortType(name);
  }

  return (
    <div className={'container__full-width body'}>
      <Filter genres={filters} filterHandle={filterHandle} sortHandle={sortHandle}/>
      <Catalog items={items} sortType={sortType} genreName={genreName}/>
    </div>
  )
}

export default Body