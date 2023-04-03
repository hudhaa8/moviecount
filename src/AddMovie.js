import { useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";

export function AddMovie({ movieList, setMovieList }) {
  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  return (
    <div className="add-movie-form">
      <TextField
        onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined" />
      <TextField
        onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined" />
      <TextField
        onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined" />
      <TextField
        onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined" />

      {/* copy of the movie list and add new movie to it */}

      <Button
        onClick={() => {
          //this is obj
          const newMovie = {
            poster: poster,
            name: name,
            summary: summary,
            rating: rating,
          };
          setMovieList([...movieList, newMovie]);
        }}
        variant="contained"
      >
        Add Movie
      </Button>
    </div>

  );

}
