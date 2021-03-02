import React, {Component} from 'react';

import Container from "../../elements/Container";
import Filter from "../contained/Filter";
import Catalog from "../contained/Catalog";

class Body extends Component {
  render() {
      return (
        <Container className={'container__full-width body'}>
          <Filter/>
          <Catalog/>
        </Container>
      )
  }
}

export default Body