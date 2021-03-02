import React, {Component} from 'react';
import Container from "../../elements/Container";
import Label from "../../elements/Label";
import Item from "./Item";

class Catalog extends Component {
  render() {
    //todo: add items output
    return (
      <Container className={'content__contained catalog'}>
        <Label className={'results-found'} text={'39 movies found'}/>
        <Container className={'item-listing'}>
          <Item/>
        </Container>
      </Container>
    )
  }
}

export default Catalog