import React, {Component} from 'react';

import Filter from "../contained/Filter";
import Catalog from "../contained/Catalog";

const Body = () => {
  return (
    <div className={'container__full-width body'}>
      <Filter/>
      <Catalog/>
    </div>
  )
}

export default Body