import { useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import { useHistory ,useParams} from "react-router-dom/cjs/react-router-dom.min";

export function EditMovie({ movieList, setMovieList }) {

const {id} =useParams()
const movie = movieList[id]

  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setRating] = useState(movie.rating);
  const [trailer,setTrailer] = useState(movie.trailer)
  const history = useHistory()
  return (
    <div className="add-movie-form">
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
        onClick={() => {
          //this is obj
          const updatedMovie = {
            poster: poster,
            name: name,
            summary: summary,
            rating: rating,
            trailer : trailer,
          };
          const copyMovieList = [...movieList];
          copyMovieList[id] = updatedMovie;
          setMovieList(copyMovieList)
          history.push(`/movies`)
          // setMovieList([...movieList, newMovie]);
          // history.push(`/movies`)
        }}
        variant="contained"
        color = "success"
      >
        Save
      </Button>
    </div>

  );

}
