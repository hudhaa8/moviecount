import React from "react";
import { Movie } from "./Movie";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {useHistory} from "react-router-dom";
import {useState, useEffect} from "react"
import {API} from "./global"


export function MovieList() {
  
const history = useHistory()
const [movieList,setMovieList] = useState([])

const getMovies = () =>{
  fetch(`${API}/movies`,{
    method : "GET"
  })
  .then((data)=> data.json())
  .then((mov) => setMovieList(mov))
  .catch((err)=> console.log(err))
}

useEffect(()=>getMovies(),[])

// delete the movie -> refresh the data
const deleteMovie= (id) => {
  fetch(`${API}/movies/${id}`,{
    method : "DELETE"
  }) .then(()=>getMovies())
}

  return (
    <div className="movie-list">
      {movieList.map(({ name, poster, rating, summary,trailer ,id}, index) => (
        <Movie
          key={index}
          id ={id}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} 
          trailer={trailer}
          // passing jsx as props
          deleteButton= {
            <IconButton
            style={{marginLeft : "auto"}} 
            onClick={()=>deleteMovie(id)} 
             aria-label="delete" color="error" >
  <DeleteIcon />
</IconButton>
          
        }

        editButton= {
          <IconButton onClick={()=>{
            history.push(`/editmovies/edit/${id}`)
           }} aria-label="delete" color="secondary" >
<EditIcon />
</IconButton>
        
      }
        //passing index as id prop
        id = {id}
          />
      ))}
    </div>
  );
}


//export function MovieList({movieList,setMovieList}) {
// const history = useHistory() 
// return (
//   <div className="movie-list">
//     {movieList.map(({ name, poster, rating, summary,trailer ,id}, index) => (
//       <Movie
//         key={index}
//         id ={id}
//         name={name}
//         poster={poster}
//         rating={rating}
//         summary={summary} 
//         trailer={trailer}
//         // passing jsx as props
//         deleteButton= {
//           <IconButton
//           onClick={()=>{
//             const copyMovieList = [...movieList];
//             copyMovieList.splice(index, 1)
//             setMovieList(copyMovieList)
//           }}
//           >
// <DeleteIcon />
// </IconButton>
        
//       }

//       editButton= {
//         <IconButton onClick={()=>{
//           history.push(`/editmovies/edit/${id}`)
//          }} aria-label="delete" color="secondary" >
// <EditIcon />
// </IconButton>
      
//     }
//       //passing index as id prop
//       id = {id}
//         />
//     ))}
//   </div>
// );
// }
