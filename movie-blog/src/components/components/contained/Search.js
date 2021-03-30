import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Label from "../../elements/Label";
import Input from "../../elements/Input";
import Button from "../../elements/Button";

const Search = (props) => {
  let searchId = 'search-field';

  return (
    //todo: default input field value!
    <div className={'content__contained search-field'}>
      <Label
        for={searchId}
        className={'label'}
        text={'FIND YOUR MOVIE'}
      />
      <Input
        id={searchId}
        className={'field'}
        value={''}
        placeholder={props.defaultPlaceholderText}
      />
      <Button
        className={'button'}
        onClick={''}
        text={'Search'}
      />
    </div>
  )
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