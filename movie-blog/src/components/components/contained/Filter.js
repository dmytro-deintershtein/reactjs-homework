import React, { Component, useState } from 'react';

const Search = (props) => {
  let genres = [].concat.apply([], props.genres);

  genres = genres.filter((val, i, self) => {
    return self.indexOf(val) === i;
  })

  console.log(genres);

  return (
    <div className={'content__contained filter'}>
      <div className={'category'}>
        <ul>
          <li onClick={() => {props.filterHandle('all')}}>ALL</li>
          {
            genres.map((item, index) => {
              return (
                <li onClick={() => {props.filterHandle(item)}} key={index}>{item}</li>
                )
            })
          }
        </ul>
      </div>
      <div className={'sort-by'}>
        <p>{'SORT BY'}</p>
        <select onChange={(event) => {props.sortHandle(event.target.value)}}>
          <option value="title-az">Name A-Z</option>
          <option value="title-za">Name Z-A</option>
          <option value="year-newer">Newer - older</option>
          <option value="year-older">Older - newer</option>
        </select>
      </div>
    </div>
  )
}

export default Search