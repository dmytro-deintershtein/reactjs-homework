import React from 'react';
import Button from "../../elements/Button";

const Item = ({title, genre, year, poster}) => {
  return (
    <div className={'item'}>
      <div className={'item__cover'} style={{ backgroundImage: `url(${poster})`}}>
        <Button text={'item__menu'}/>
      </div>
      <div className={'item__description'}>
        <h3 className={'item__name'}>{title}</h3>
        <p className={'item__category'}>
          {genre.map((name, index) => (
              <span key={index}>{name} </span>
          ))}
        </p>
        <span className={'item__year'}>{year}</span>
      </div>
    </div>
  )
}

export default Item