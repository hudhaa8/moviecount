import { useState } from "react";
import React from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";
import { Counter } from "./Counter";
import InfoIcon from '@mui/icons-material/Info';

export function Movie({ poster, name, rating, summary, deleteButton }) {
  // const  poster= "https://wallpaperaccess.com/full/13453.jpg"
  // const name= "AVENGERS"
  // const summary= "When Thor's evil brother, Loki Tom Hiddleston, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury Samuel L. Jackson, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man Robert Downey Jr.Captain America Chris Evans, the Hulk Mark Ruffalo, Thor Chris Hemsworth, the Black Widow Scarlett Johansson and Hawkeye Jeremy Renner.";
  // const rating= "8.9";
  const styles = {
    // backgroundColor : "green"
    color: rating > 8.5 ? "green" : " red",
  };
  const [show, setShow] = useState(true);
  // conditional styling
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <Card className="movie-container">
      <img src={poster} alt="avengers" className="movie-poster"></img>
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {name}
            
            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="toggle summary"
            >
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>

            <IconButton
              onClick={() => setShow(!show)}
              color="primary"
              aria-label="toggle summary"
            >
             <InfoIcon />
            </IconButton>
            
          </h2>
          <p style={styles} className="movie-rating">
            ⭐ {rating}{" "}
          </p>
        </div>

        {/* conditional rendering */}
        {show ? (
          <p style={summaryStyles} className="movie-summary">
            {summary}{" "}
          </p>
        ) : (
          " "
        )}

        {/* <p style = {summaryStyles} className="movie-summary"> {summary} </p> */}
      </CardContent>
      <CardActions>
        <Counter /> {deleteButton}
      </CardActions>
    </Card>
  );
}
