import React, {Component} from 'react';
import Label from "../../elements/Label";

const Search = () => {
  //todo: add dropdown
  return (
    <div className={'content__contained filter'}>
      <div className={'category'}>
        <Label text={'ALL'}/>
        <Label text={'DOCUMENTARY'}/>
        <Label text={'COMEDY'}/>
        <Label text={'HORROR'}/>
        <Label text={'CRIME'}/>
      </div>
      <div className={'sort-by'}>
        <Label text={'SORT BY'}/>
        <Label text={'Release date'}/>
      </div>
    </div>
  )
}

export default Search