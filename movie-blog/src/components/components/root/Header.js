import React, {Component} from 'react';

import Button from "../../elements/Button";
import Search from "../contained/Search";
import Logo from "../contained/Logo";

const Header = () => {
  return (
    <div className={'container__full-width header'}>
      <div className={'content__contained add-movie'}>
        <Logo/>
        <Button
          className={'button'}
          text={'+ ADD MOVIE'}
          onClick={'Movie'}
        />
      </div>
      <Search/>
    </div>
  )
}

export default Header