import React from 'react';

export function ColorBox({ color }) {
  const styles = {
    backgroundColor: color,
    width: '550px',
    height: '25px',
    marginTop: '10px'
  };
  return (
    <div style={styles}>

    </div>
  );
}
