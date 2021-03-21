import React, {Component, useState, useEffect} from 'react';
import Label from "../../elements/Label";
import Item from "./Item";

const Catalog = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

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
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  ));

  return (
    <div className={'content__contained catalog'}>
      <Label className={'results-found'} text={'39 movies found'}/>
      <div className={'item-listing'}>
        {
          items.map((item, index) => {
            return (
                <Item
                  key={index}
                  poster={item.poster}
                  title={item.title}
                  name={item.name}
                  year={item.year}
                  genre={item.genre}
                />
              )
          })
        }
      </div>
    </div>
  )
}

export default Catalog