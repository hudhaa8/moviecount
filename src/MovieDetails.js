import React from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState, useEffect } from "react";
import {API} from "./global";

export function MovieDetails() {
  const { id } = useParams(); // extrating parameter from the url
  // console.log(id);

  const [movie,setMovie] = useState({})
useEffect(()=>{
fetch(`${API}/movies/${id}`,{
  method : "GET"
})

.then((data)=> data.json())
.then((mvss) => setMovie(mvss))
.catch((err) => console.log(err))
},[])

  // const movie = movieList[id];
  const history = useHistory()
  return (
    <div>
      <iframe width="100%" height="450" src={movie.trailer} title="Marvel&#39;s The Avengers- Trailer (OFFICIAL)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


      <div className="movie-detail-container">
        {/* <img src={movie.poster} alt="movposter" className="movie-poster"></img> */}

        <div className="movie-specs">
          <h2 className="movie-name">{movie.name}</h2>
          <p className="movie-rating">  ⭐ {movie.rating} </p>
        </div>

        <p className="movie-summary">  {movie.summary} </p>
        <button onClick={()=>history.goBack()}>Back</button>
        
      </div>
    </div>
  );
}


// function MovieDetails({movieList}) {
//   const {id} = useParams()  // extrating parameter from the url
//   console.log(id)
  
//   const movie = movieList[id]
//   return (
//     <div>
//        <iframe width="100%" height="450" src={movie.trailer} title="Marvel&#39;s The Avengers- Trailer (OFFICIAL)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    
//     <div className="movie-detail-container">
//       {/* <img src={movie.poster} alt="movposter" className="movie-poster"></img> */}
     
//       <div className="movie-specs">
//         <h2 className="movie-name">{movie.name}</h2>
//         <p className="movie-rating">  ⭐ {movie.rating} </p>
//       </div>

//       <p className="movie-summary">  {movie.summary} </p>
//     </div>
//     </div>
//   );
// }
