import React from 'react';

function Welcome({ name, pic }) {
  return (
    <div className="welcome">
      <h2> Hello {name}</h2>
      <img src={pic} alt="picture1" />
    </div>
  );
}
