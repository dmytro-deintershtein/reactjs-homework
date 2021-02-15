import React from 'react';

import CreateElement from "./components/create-element";
import ComponentElement from "./components/component";
import PureComponentElement from "./components/pure-component";
import FunctionalComponentElement from "./components/functional-component";

const createElement = React.createElement(
  'h1',
  null,
  'Hello World!'
)

function App() {
  return (
    <div className="App">
      <CreateElement/>
      <ComponentElement/>
      <PureComponentElement/>
      <FunctionalComponentElement/>
    </div>
  );
}

export default App;
