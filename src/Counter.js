import { useState } from 'react';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  return (
    <div classNmae="counter-container">

      <IconButton className="like-dislike" onClick={() => setLike(like + 1)} color="primary" aria-label="delete">
        <Badge badgeContent={like} color="primary">
         
          <span role="img"aria-label="Smiling Face"> 👍 </span>
        </Badge>
      </IconButton>
      <IconButton className="like-dislike" onClick={() => setDislike(dislike + 1)} color="error" aria-label="delete">
        <Badge badgeContent={dislike} color="error">
          
          <span role="img"aria-label="Smiling Face"> 👎 </span>
        </Badge>
      </IconButton>


    </div>
  );
}
