import React, {Component} from 'react';

import Container from "../../elements/Container";
import Label from "../../elements/Label";
import Button from "../../elements/Button";
import Search from "../contained/Search";
import ErrorBoundary from "../ErrorBoundary";

class Header extends Component {
  render() {
    return (
      <Container className={'container__full-width header'}>
        <Container className={'content__contained add-movie'}>
          <Label className={'title'} text={'netflixroulette'}/>
          <Button className={'button'} text={'+ ADD MOVIE'}/>
        </Container>
        <ErrorBoundary>
          <Search/>
        </ErrorBoundary>
      </Container>
    )
  }
}

export default Header