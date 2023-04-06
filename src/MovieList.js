import React from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom"

export function MovieList({ movieList,setMovieList }) {
const history = useHistory()
  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary,trailer }, index) => (
        <Movie
          key={index}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} 
          trailer={trailer}
          // passing jsx as props
          deleteButton= {
            <IconButton onClick={()=>{
              const copyMovieList = [...movieList]
               copyMovieList.splice(index,1)
               setMovieList(copyMovieList)
             }} aria-label="delete" color="error" >
  <DeleteIcon />
</IconButton>
          
        }

        editButton= {
          <IconButton onClick={()=>{
            history.push(`/editmovies/edit/${index}`)
           }} aria-label="delete" color="secondary" >
<EditIcon />
</IconButton>
        
      }
        //passing index as id prop
        id = {index}
          />
      ))}
    </div>
  );
}
