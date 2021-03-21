import React, { useState, useRef } from 'react';
import ClickOutside from "../../actions/ClickOutside";

const Item = ({title, genre, year, poster}) => {

  const [show, setShow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const ref = useRef();

  ClickOutside(ref, () => {
    setShowMenu(false);
  });

  return !!show && (
    <div className={'item'} ref={ref}>
      <div className={'item__cover'} style={{ backgroundImage: `url(${poster})`}}>
        <button className={'item__menu'} onClick={() => setShowMenu(true)}>
          Show menu
        </button>
        {showMenu &&
        <ul className={'item__menu-dropdown'}>
          <li>? Edit ?</li>
          <li onClick={() => setShow(false)}>Delete</li>
        </ul>
        }
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