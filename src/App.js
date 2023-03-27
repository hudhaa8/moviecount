import "./App.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
// import { display } from '@mui/system';
// import DeleteIcon from '@mui/icons-material/Delete';
// import MailIcon from '@mui/icons-material/Mail';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { AddColor } from "./AddColor";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { Msg } from "./Msg";
import { NotFound } from "./NotFound";
import { MovieList } from "./MovieList";
import { TicTacToe } from "./TicTacToe";
import { INITIAL_MOVIE_LIST } from "./INITIAL_MOVIE_LIST";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


export default function App() {
  const arr = ["mohammad", "rahman", "rizwan"];
  let persons = [
    {
      name: "Mohammad",
      pic:
        "https://cdn.kimkim.com/files/a/images/c4232789cea9781694e5962c7d2cb13398f8d84e/big-0e7e6eab6fd05216c7b794bf1706e906.jpg",
    },
    {
      name: "Rahman",
      pic:
        "https://s1.it.atcdn.net/wp-content/uploads/2020/12/A-view-of-SantAngelo-in-Ischia-island-in-Italy-800x600.jpg",
    },
    {
      name: "Rizwan",
      pic:
        "https://cdn.theculturetrip.com/wp-content/uploads/2021/05/2a7d8pk-e1621272929144-768x431.jpg",
    },
  ];

  const [poster, setPoster] = useState("");
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState("");

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);
  //movie-  add movie and movie list
  // color-game - add color
  //  / - welcome to the movie app
const {id} = useParams()
  return (
    <div className="App">
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
        <li>
          <Link to="/tic-tac-toe">Tic Tac Toe</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>
        <Route path="/movies">
          <div className="add-movie-form">
            <TextField
              onChange={(event) => setPoster(event.target.value)}
              label="Poster"
              variant="outlined"
            />
            <TextField
              onChange={(event) => setName(event.target.value)}
              label="Name"
              variant="outlined"
            />
            <TextField
              onChange={(event) => setSummary(event.target.value)}
              label="Summary"
              variant="outlined"
            />
            <TextField
              onChange={(event) => setRating(event.target.value)}
              label="Rating"
              variant="outlined"
            />

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

          {/* <h2> Movie List and Count </h2> */}

          {/* <Counter /> */}

          {/* {arr.map((nm)=> <Welcome name={nm}/>)} */}
          {/* {persons.map((obj)=> <Welcome name={obj.name} pic={obj.pic}/>  )} */}

          {/* <Movie /> */}

          {/* {movieList.map((mv)=> 
       <Movie name= {mv.name} poster={mv.poster} rating={mv.rating} summary={mv.summary} />
    )} */}

          {/* <AddColor /> */}

          <MovieList movieList={movieList} setMovieList={setMovieList} />
        </Route>

        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/movies/:id">
      <MovieDetails />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route exact path="/">
          <Msg />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}


function MovieDetails() {
  // const {id} = useParams()  // extrating parameter from the url
  // console.log(id)
  return(
    <div>
      Awesome Movie
    </div>
  )
}