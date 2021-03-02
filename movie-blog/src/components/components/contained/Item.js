import React, {Component} from 'react';
import Container from "../../elements/Container";
import Label from "../../elements/Label";
import Button from "../../elements/Button";

class Item extends Component {
  render() {
    return (
      <Container className={'item'}>
        <Container className={'item__cover'}>
          <Button text={'item__menu'}>
          </Button>
        </Container>
        <Container className={'item__description'}>
          <Label className={'item__name'} text={'Pulp Fiction'}/>
          <Label className={'item__category'} text={'Action & adventure'}/>
          <Label className={'item__year'} text={'2004'}/>
        </Container>
      </Container>
    )
  }
}

export default Item