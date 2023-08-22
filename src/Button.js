// button.js
import React from 'react';

function Button(props) {
  return (
    <div className="row">
      <button  onClick={() => props.handleClick("")} className="num">Search</button>
    </div>
  );
}

export default Button;
