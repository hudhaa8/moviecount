import './App.css';
import {useState} from 'react';

export default function App() {
  const arr = ["mohammad", "rahman", "rizwan"];
  let persons = [
    {
      name: "Mohammad",
      pic:
        "https://cdn.kimkim.com/files/a/images/c4232789cea9781694e5962c7d2cb13398f8d84e/big-0e7e6eab6fd05216c7b794bf1706e906.jpg"
    },
    {
      name: "Rahman",
      pic:
        "https://s1.it.atcdn.net/wp-content/uploads/2020/12/A-view-of-SantAngelo-in-Ischia-island-in-Italy-800x600.jpg"
    },
    {
      name: "Rizwan",
      pic:
        "https://cdn.theculturetrip.com/wp-content/uploads/2021/05/2a7d8pk-e1621272929144-768x431.jpg"
    }
  ];
  return(
    <div className="App">
      <h2> Movie List and Count </h2>

      <Counter />
      
      {/* {arr.map((nm)=> <Welcome name={nm}/>)} */}
      {persons.map((obj)=> <Welcome name={obj.name} pic={obj.pic}/>  )}
        
 <Add />
    </div>
  )
}

function Welcome({name,pic}) {
  return(
    <div className="welcome">
      <h2> Hello {name}</h2>
      <img src={pic} alt="picture" />
    </div>
  )
}

function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] =useState(0);
  return(
    <div>
      <button onClick={()=> setLike(like + 1) }>👍 {like}</button>
      <button onClick={()=>setDislike(dislike + 1)}> 👎 {dislike}</button>
    </div>
  )
}

function Add() {
  return(
    <div>
      {15+22}
    </div>
  )
}