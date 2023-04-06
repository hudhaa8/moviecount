import { useState } from "react";
import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import { GameBox } from "./GameBox";

export function TicTacToe() {
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
      //array destructuring
      const [a, b, c] = lines[i];
      // initially all values are same , thats why board[a] !=null
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
      <button onClick={() => {
        setBoard([null, null, null, null, null, null, null, null, null]);
        setIsXturn(true);
      }}>Restart</button>
    </div>
  );
}
