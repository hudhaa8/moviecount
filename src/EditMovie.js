import { useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import { useHistory ,useParams} from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { API } from "./global";

export function EditMovie() {

const {id} =useParams()
//useparams extract variable id from url
// const movie = movieList[id]
const [movie,setMovie] = useState(null)
useEffect(()=>{
  fetch(`${API}/movies/${id}`,{
    method : "GET"
  })
  .then((data)=> data.json())
  .then((mvss) => setMovie(mvss))
  .catch((err) => console.log(err))
  },[])
 
  return (
    <div>
      { movie ? <MovieEditForm  movie={movie} /> : <h2>Loading</h2>}
    </div>

  );

}


function MovieEditForm({movie}) {
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer,setTrailer] = useState(movie.trailer)
  const history = useHistory()

const editMovie = () => {
        //this is obj
          const updatedMovie = {
            poster: poster,
            name: name,
            summary: summary,
            rating: rating,
            trailer : trailer,
          };
          // 1. Method must be PUT and pass id
// 2. BODY - JSON data
// 3. headers - JSON data
// 4 .After PUT is completed -> move to movies
fetch(`${API}/movies/${movie.id}`,{
  method : "PUT",
  body : JSON.stringify(updatedMovie),
  headers : {
    "Content-type" : "application/json"
  }
}).then(()=>history.push(`/movies`))
          // const copyMovieList = [...movieList];
          // copyMovieList[id] = updatedMovie;
          // setMovieList(copyMovieList)
          // history.push(`/movies`)

          // setMovieList([...movieList, newMovie]);
          // history.push(`/movies`)
}
  return(
    <div className="add-movie-form">
      {/* <input type="text" /> */}
      <TextField
        onChange={(event) => setName(event.target.value)}
        value ={name}
        label="Name"
        variant="outlined" />
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        value ={poster}
        label="Poster"
        variant="outlined" />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        value ={summary}
        label="Summary"
        variant="outlined" />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        value ={rating}
        label="Rating"
        variant="outlined" />
         <TextField
        onChange={(event) => setTrailer(event.target.value)}
        value ={trailer}
        label="Trailer"
        variant="outlined" />
        

      {/* copy of the movie list and add new movie to it */}

      <Button
        onClick={() => {editMovie()}}
        variant="contained"
        color = "success"
      >
        Save
      </Button>
    </div>
  )
}
