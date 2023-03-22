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
import { Movie } from "./Movie";
import { Link, Route, Switch } from "react-router-dom";
import { Msg } from "./Msg";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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
  const INITIAL_MOVIE_LIST = [
    {
      poster:
        "https://m.media-amazon.com/images/M/MV5BZTc4YWY5MzAtOTc4Zi00NDVmLThlMGItYjliOGNkYmM3NDBmXkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_.jpg",
      name: "THUPPAKKI",
      summary:
        "Thuppakki is an action thriller movie revolving  around a youngster from a Mumbai-based Tamil family and his decisions he takes after his life undergoes a sudden turn.Kajal Aggarwal has a meaty role in Thuppakki. Her role is not limited to be an arm-candy of Vijay in Thuppakki. Well she will be seen in the role of a boxer in the film. She plays the role named Nisha an iron-willed girl. However, the actress will also be seen in glamorous avatars.And the story goes like this  Jagadish, an army men and a secret agent of DIA returns to Mumbai on leave. His parents wants him to tie the knot with a girl chosen by them. He meets Nisha ,a boxer.Jagadish spoils the plan of a serial bomb blasts with the help of his 11 army friends. They kill 12 sleeper cells in 12 different places at the same time. The kingpin played by Vidyut Jamwal is shocked and decides to hunt down the people, who crashed his plansand then how they meet and fight.",

      rating: "8.6",
    },
    {
      poster:
        "https://assetscdn1.paytm.com/images/cinema/6-gallery-ef137e80-4228-11ec-96cd-1bf51c099a46.jpg",
      name: "PUSHPA",
      summary:
        "Pushpa Raj (Allu Arjun) lives as a laborer in the illegal trade of red sandalwood in the remnant forests of Tirupati. The lack of a household name to say the least, however, increases Coolie's desire to see his life as a coolie and conquer the world. Kondareddy (Ajay Ghosh), who is waiting in his business, joins hands with Mangalam Srinu (Sunil) and Dakshayini (Anasuya). However, at one point, Pushpa challenges Mangalam Sreenu, who has wronged him. Under such circumstances, Bhanwar Singh Shekhawat (Fazil Fahad), who came to the district as police superintendent. Bhanwar Singh conspires to prevent Pushpa's marriage to Srivalli (Rashmika Mandanna) from his hometown. But how did Pushpa reach his goal of reaching the top in his life? How did Pushpa plan righteousness with Mangalam Sreenu who confronted him? How he persuaded Srivalli to marry him. What is the role of MP Bhumireddy Siddappa Naidu (Rao Ramesh) in this story? The story of the movie Pushpa is the answer to the question of what made Sukumar so interesting in the second part of Pushpa.",
      rating: "8",
    },

    {
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/71oDl6bDvRS._RI_.jpg",
      name: "MANKATHA",
      summary:
        "Mankatha a complete action thriller that will narrate the match fixing sagas in international cricket matches. The film will star Ajith Kumar in the lead roles with the Co-Stars Trisha,  Arjun Sarja, Sneha, Lakshmi Rai, Ganesh Venkatraman, Premji Amaren.  ‘Mankatha’ is all about Mystery & Suspense,Drama,Action & Adventure all in one.This movie likely to be made as biggest ever multi-starer movie of tamil Cinema. Mankatha story revolves around a Mafia gambling gang during the Indian Premier League (IPL) cricket season. Ajith Plays a negative role named Vinayak Mahadevan and Arjun plays the role of C.I.D Officer.",
      rating: "8.8",
    },
    {
      poster: "https://wallpapercave.com/wp/wp2525818.jpg",
      name: "HANGOVER",
      summary:
        "The Hangover is a comedy movie centered around four friends—the groom Doug Billings (Justin Bartha), his soon-to-be brother-in-law Alan Garner (Zach Galifianakis), his two best friends Phil Wenneck (Bradley Cooper) and Stu Price (Ed Helms)—head to Las Vegas for Doug's bachelor party. After a night of alcohol, gambling, and partying, Alan, Stu, and Phil awake the next morning not remembering the events of the prior night. Unable to find Doug, the groomsmen encounter a variety of problems as they retrace their steps in order to find him.",
      rating: "8",
    },
    {
      poster: "https://wallpaperaccess.com/full/13453.jpg",
      name: "AVENGERS",
      summary:
        "When Thor's evil brother, Loki Tom Hiddleston, gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury Samuel L. Jackson, director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Fury's dream team are Iron Man Robert Downey Jr.Captain America Chris Evans, the Hulk Mark Ruffalo, Thor Chris Hemsworth, the Black Widow Scarlett Johansson and Hawkeye Jeremy Renner.",
      rating: "8.9",
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

      <switch>
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

          <div className="movie-list">
            {movieList.map(({ name, poster, rating, summary }, index) => (
              <Movie
                key={index}
                name={name}
                poster={poster}
                rating={rating}
                summary={summary}
              />
            ))}
          </div>
        </Route>
        <Route path="/color-game">
          <AddColor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route path="/">
          <Msg />
        </Route>
      </switch>
    </div>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const decideWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    // if winning condition is present in board then we go for winner
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] !== null && board[a] === board[b] && board[b] === board[c]) {
        console.log("Winner is", board[a]);
        return board[a];
      }
    }
    return null;
  };
  const winner = decideWinner(board);

  const [isXturn, setIsXturn] = useState(true);

  const handleClick = (index) => {
    //copy of the board and replace with "X" inn the clicked Gamebox
    //udate only untouched boxes until no winner
    if (winner === null && board[index] === null) {
      const boardCopy = [...board];
      boardCopy[index] = isXturn ? "X" : "O";
      setBoard(boardCopy);
      setIsXturn(!isXturn);
      // console.log(index)
    }
  };
  const { width, height } = useWindowSize();
  return (
    <div className="full-game">
      {winner ? <Confetti width={width} height={height} /> : " "}
      <div className="board">
        {board.map((val, index) => (
          <GameBox val={val} onPlayerClick={() => handleClick(index)} />
        ))}
        {/* <GameBox /> */}
        {/* <h2> Winner is {winner}</h2> */}
        {winner ? <h2> Winner is {winner}</h2> : ""}
      </div>
    </div>
  );
}

function GameBox({ val, onPlayerClick }) {
  // const [val , setVal] = useState(null)
  // const [isXturn , setIsXturn] = useState(val)
  // const val = "X"
  const styles = {
    color: val == "X" ? "green" : "red",
  };

  return (
    <div onClick={() => onPlayerClick()} style={styles} className="game-box">
      {val}
    </div>
  );
}
