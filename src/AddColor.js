import { useState } from 'react';
import React from 'react';
import { ColorBox } from './ColorBox';

export function AddColor() {
  const [color, setColor] = useState('pink');
  const styles = {
    backgroundColor: color,
  };

  const [colorList, setColorList] = useState(['pink', 'orange', 'teal', 'crimson']);
  return (
    <div>
      <input style={styles} onChange={(event) => {
        setColor(event.target.value);
      }} type="text" placeholder="Enter color" value={color} />
      {/* copy of the colorlist and new color to it   */}
      <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      {colorList.map((nm) => <ColorBox color={nm} />)}

      {/* {colorList.map((nm)=> <ColorBox color = {nm} />)} */}

    </div>
  );
}
