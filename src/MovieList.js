import React from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export function MovieList({ movieList,setMovieList }) {

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary }, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} 
          deleteButton= {
            <IconButton onClick={()=>{
              const copyMovieList = [...movieList]
               copyMovieList.splice(index,1)
               setMovieList(copyMovieList)
             }} aria-label="delete" color="error" >
  <DeleteIcon />
</IconButton>
          
        }
        id = {index}
          />
      ))}
    </div>
  );
}
