import React, {Component, useState, useEffect} from 'react';
import Container from "../../elements/Container";
import Label from "../../elements/Label";
import Item from "./Item";

const Catalog = () => {
  const movies = [
    {slug: "knocking on heaven's door", genre: ['drama', 'criminal']},
    {slug: "interstellar", genre: ['sci-fi', 'drama']},
    {slug: "city lights", genre: ['comedy']},
    {slug: "matrix", genre: ['sci-fi', 'action']},
    {slug: "Amelie", genre: ['comedy']},
    {slug: "Showshank redemption", genre: ['drama', 'criminal']}
  ]

  // dynamically populated list of the genres, based on the movies array

  const genres = ['all',...new Set(movies.flatMap(({genre}) => genre))]

  const attributes = ['none', 'slug']

  const [needle, setNeedle] = useState(),
    [activeGenre, setActiveGenre] = useState('all'),
    [orderAttribute, setOrderAttribute] = useState('none'),
    onSearch = ({target:{value}}) => setNeedle(value),
    isOfGenre = genres => genres.includes(activeGenre) || activeGenre === 'all',
    onPickGenre = newActiveGenre => setActiveGenre(newActiveGenre),
    onOrderPick = attr => setOrderAttribute(attr)

  return (
    <div className={'content__contained catalog'}>
      <Label className={'results-found'} text={'39 movies found'}/>
      <div className={'item-listing'}>
        {
          movies
            .sort(({[orderAttribute]:a},{[orderAttribute]:b}) =>
              orderAttribute !== 'none' && a && b && a.localeCompare(b))
            .map(({slug, genre}) => isOfGenre(genre) && (
              <Item
                key={slug}
                slug={slug}
                needle={needle}
                genre={genre}
              />
            ))
        }

      </div>
    </div>
  )
}

export default Catalog