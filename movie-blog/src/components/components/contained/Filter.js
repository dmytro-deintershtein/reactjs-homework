import React, {Component} from 'react';
import Container from "../../elements/Container";
import Label from "../../elements/Label";

class Search extends Component {
  render() {
    //todo: add dropdown
    return (
      <Container className={'content__contained filter'}>
        <Container className={'category'}>
          <Label text={'ALL'}/>
          <Label text={'DOCUMENTARY'}/>
          <Label text={'COMEDY'}/>
          <Label text={'HORROR'}/>
          <Label text={'CRIME'}/>
        </Container>
        <Container className={'sort-by'}>
          <Label text={'SORT BY'}/>
          <Label text={'Release date'}/>
        </Container>
      </Container>
    )
  }
}

export default Search