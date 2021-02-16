import React from 'react';

import CreateElement from "./CreateElement";
import ComponentElement from "./ClassComponent";
import PureComponentElement from "./PureComponent";
import FunctionalComponentElement from "./FunctionalComponent";

function GreetingsComponent() {
  return (
    <React.Fragment>
      <CreateElement phrase="Hello world by React.createElement"/>
      <ComponentElement phrase="Hello world by Class Component"/>
      <PureComponentElement phrase="Hello world by Functional Component"/>
      <FunctionalComponentElement phrase="Hello world by functional component"/>
    </React.Fragment>
  );
}

export default GreetingsComponent;

