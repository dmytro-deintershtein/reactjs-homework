import Container from "../../elements/Container";
import Label from "../../elements/Label";

import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (
      <Container className={'container__full-width footer'}>
        <Label text={'netflixroulette'}/>
      </Container>
    )
  }
}

export default Footer