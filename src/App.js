import "./App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
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
import {Theme, ThemeuseContext} from "./ThemeuseContext";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7'; 

import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Button from '@mui/material/Button';

 
export default function App() {

const [movieList, setMovieList] = useState(INITIAL_MOVIE_LIST);

const history = useHistory();
const [mode, setMode] = useState('dark')
const theme = createTheme({
  palette: {
    mode: mode,
  },
});
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{borderRadius : "0px", minHeight : "100vH"}} elevation={0} >
    <div className="App">
      {/* <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/color-game">Color Game</Link>
        </li>
        <li>
          <Link to="/theme">Theme Dark Light</Link>
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
        
      </ul> */}
      <AppBar position="static">
        <Toolbar>
          <Button onClick={()=>history.push("/")} color="inherit">Home</Button>
          <Button onClick={()=>history.push("/movies")}  color="inherit">Movies</Button>
          <Button  onClick={()=>history.push("/movies/add")}  color="inherit">Add Movie</Button>
          <Button onClick={()=>history.push("/tic-tac-toe")}  color="inherit">Tic Tac Toe</Button>
          <Button onClick={()=>history.push("/colortheme")}   color="inherit">Theme Dark Light</Button>
          <Button onClick={()=>history.push("/color-game")}  color="inherit">Color Game</Button>
          <Button onClick={()=>setMode(mode === "light" ? "dark" : "light" )} 
          startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          style={{marginLeft : "auto"}}
          color="inherit">
            {mode === "light" ? "dark" : "light" } mode</Button>
        </Toolbar>
      </AppBar>
<div className="route-container">
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
        <Route path="/colortheme">
          <ThemeuseContext />
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
      
    </div>
    </Paper>
    </ThemeProvider>
  );
}


