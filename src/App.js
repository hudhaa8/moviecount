import "./App.css";
import { useState } from "react";
import React from "react";
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
import { SingleMovie } from "./SingleMovie";
import { MovieDetails } from "./MovieDetails";
import { AddMovie } from "./AddMovie";
import {EditMovie} from "./EditMovie";

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

  const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

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
          <Link to="/movies/add">Add Movie</Link>
        
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>

      <Switch>
        <Route path="/films">
          <Redirect to="/movies" />
        </Route>

        <Route path="/movies/add">
      <AddMovie movieList={movieList} setMovieList={setMovieList}/>
        </Route>

        <Route path="/movies">
         
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
        <Route path="/editmovies/edit/:id">
        <EditMovie movieList={movieList} setMovieList={setMovieList} />
        </Route>
        <Route path="/newmovies/:id">
          <MovieDetails movieList={movieList} />
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


