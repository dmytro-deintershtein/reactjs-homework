import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Container from "../../elements/Container";
import Label from "../../elements/Label";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

class Search extends Component {
  render() {
    return (
      //todo: default input field value!
      <Container className={'content__contained search-field'}>
        <Label className={'label'} text={'FIND YOUR MOVIE'}/>
        <Input className={'field'} placeholder={this.props.defaultPlaceholderText}/>
        <Button className={'button'} text={'Search'}/>
      </Container>
    )
  }
}

Search.propTypes = {
  defaultInputText: PropTypes.string,
  defaultPlaceholderText: PropTypes.string
}

Search.defaultProps = {
  defaultInputText: '',
  defaultPlaceholderText: 'What do you want to watch?'
}

export default Search