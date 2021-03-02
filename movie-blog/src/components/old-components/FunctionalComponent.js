import React from 'react';

function FunctionalComponent(props) {
  let phrase = props.phrase || "Hello there!";

  return (
    <h1 id="functional-component">{phrase}</h1>
  );
}

export default FunctionalComponent
