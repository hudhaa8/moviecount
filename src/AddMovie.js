import { useState } from "react";
import Button from "@mui/material/Button";
import React from "react";
import TextField from "@mui/material/TextField";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

export const movieValidationSchema = yup.object({
  name: yup
    .string()
    .required("why not fill this name")
    .min(5, "Need longer email"),
  poster: yup
    .string()
    .required("why not fill this poster")
    .min(4, "Need longer "),
  summary: yup
    .string()
    .required("why not fill this summary")
    .min(20, "Need longer "),
  rating: yup
    .number()
    .required("why not fill this rating")
    .min(1)
    .max(10),
  trailer: yup
    .string()
    .required("why not fill this trailer")
    .min(5, "Need longer "),
});

export function AddMovie() {

  const history = useHistory();

  const addMovie = (newMovie) => {
    console.log("onsubmit", newMovie);
    //this is obj
    //  const newMovie = {
    //   poster: poster,
    //   name: name,
    //   summary: summary,
    //   rating: rating,
    //   trailer : trailer,
    // };
    // 1. Method must be POST
    // 2. BODY - JSON data
    // 3. headers - JSON data
    // 4 .After POST is completed -> move to movies
    fetch(`${API}/movies`,{
      method : "POST",
      body : JSON.stringify(newMovie),
      headers : {
        "Content-type" : "application/json"
      }
    }).then(()=>history.push(`/movies`))
    // setMovieList([...movieList, newMovie]);
    // history.push(`/movies`)
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      poster: "",
      summary: "",
      rating: "",
      trailer: "",
    },
    validationSchema: movieValidationSchema,
    onSubmit: (newMovie) => {
      addMovie(newMovie);
    },
  });
  return (
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event) => setName(event.target.value)}
        label="Name"
        variant="outlined"
        error={formik.touched.name && formik.errors.name}
        helperText={formik.touched.name && formik.errors.name ? formik.errors.name : " "}
      />
      
      <TextField
        id="poster"
        name="poster"
        value={formik.values.poster}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event) => setPoster(event.target.value)}
        label="Poster"
        variant="outlined"
        error={formik.touched.poster && formik.errors.poster}
        helperText={formik.touched.poster && formik.errors.poster ? formik.errors.poster : " "}
      />
      <TextField
        id="summary"
        name="summary"
        value={formik.values.summary}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event) => setSummary(event.target.value)}
        label="Summary"
        variant="outlined"
        error={formik.touched.summary && formik.errors.summary}
        helperText={formik.touched.summary && formik.errors.summary ? formik.errors.summary : " "}
      />
   
      <TextField
        id="rating"
        name="rating"
        value={formik.values.rating}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event) => setRating(event.target.value)}
        label="Rating"
        variant="outlined"
        error={formik.touched.rating && formik.errors.rating}
        helperText={formik.touched.rating && formik.errors.rating ? formik.errors.rating : " "}
      />
   
      <TextField
        id="trailer"
        name="trailer"
        value={formik.values.trailer}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event) => setRating(event.target.value)}
        label="Trailer"
        variant="outlined"
        error={formik.touched.trailer && formik.errors.trailer}
        helperText={formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : " "}
      />
    
      {/* copy of the movie list and add new movie to it */}

      <Button
        type="submit"
        // onClick={() => addMovie()}
        variant="contained"
      >
        Add Movie
      </Button>
    </form>
  );
}

// import { useState } from "react";
// import Button from "@mui/material/Button";
// import React from "react";
// import TextField from "@mui/material/TextField";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import {API} from "./global"

// export function AddMovie() {
//   const [poster, setPoster] = useState("");
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [rating, setRating] = useState("");
//   const [trailer,setTrailer] = useState("")
//   const history = useHistory()

//   const addMovie = () => {
//  //this is obj
//  const newMovie = {
//   poster: poster,
//   name: name,
//   summary: summary,
//   rating: rating,
//   trailer : trailer,
// };

// // 1. Method must be POST
// // 2. BODY - JSON data
// // 3. headers - JSON data
// // 4 .After POST is completed -> move to movies
// fetch(`${API}/movies`,{
//   method : "POST",
//   body : JSON.stringify(newMovie),
//   headers : {
//     "Content-type" : "application/json"
//   }
// }).then(()=>history.push(`/movies`))

// // setMovieList([...movieList, newMovie]);
// // history.push(`/movies`)
//   }
//   return (
//     <div className="add-movie-form">
//       <TextField
//         onChange={(event) => setName(event.target.value)}
//         label="Name"
//         variant="outlined" />
//       <TextField
//         onChange={(event) => setPoster(event.target.value)}
//         label="Poster"
//         variant="outlined" />
//       <TextField
//         onChange={(event) => setSummary(event.target.value)}
//         label="Summary"
//         variant="outlined" />
//       <TextField
//         onChange={(event) => setRating(event.target.value)}
//         label="Rating"
//         variant="outlined" />
//          <TextField
//         onChange={(event) => setRating(event.target.value)}
//         label="Trailer"
//         variant="outlined" />

//       {/* copy of the movie list and add new movie to it */}

//       <Button
//         onClick={() => addMovie()}
//         variant="contained"
//       >
//         Add Movie
//       </Button>
//     </div>

//   );

// }





// export function AddMovie({movieList,setMovieList}) {
//   const [poster, setPoster] = useState("");
//   const [name, setName] = useState("");
//   const [summary, setSummary] = useState("");
//   const [rating, setRating] = useState("");
//   const [trailer,setTrailer] = useState("")
//   const history = useHistory()

//   const addMovie = () => {
//  //this is obj
//  const newMovie = {
//   poster: poster,
//   name: name,
//   summary: summary,
//   rating: rating,
//   trailer : trailer,
// };


// setMovieList([...movieList, newMovie]);
// history.push(`/movies`)
//   }
//   return (
//     <div className="add-movie-form">
//       <TextField
//         onChange={(event) => setName(event.target.value)}
//         label="Name"
//         variant="outlined" />
//       <TextField
//         onChange={(event) => setPoster(event.target.value)}
//         label="Poster"
//         variant="outlined" />
//       <TextField
//         onChange={(event) => setSummary(event.target.value)}
//         label="Summary"
//         variant="outlined" />
//       <TextField
//         onChange={(event) => setRating(event.target.value)}
//         label="Rating"
//         variant="outlined" />
//          <TextField
//         onChange={(event) => setRating(event.target.value)}
//         label="Trailer"
//         variant="outlined" />

//       {/* copy of the movie list and add new movie to it */}

//       <Button
//         onClick={() => addMovie()}
//         variant="contained"
//       >
//         Add Movie
//       </Button>
//     </div>

//   );

// }
