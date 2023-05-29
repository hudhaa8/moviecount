// // import "./styles.css";
// // import { useState, useContext, createContext } from "react";

// // // props drilling example
// // //pass props - App -> MyChild -> MyGrandChild

// // export default function App() {
// //   const initialState = 888;

// //   const [state, setState] = useState(initialState);

// //   return (
// //     <div>
// //       <MyChild state={state} setState={setState} />
// //     </div>
// //   );
// // }

// // const MyChild = ({ state, setState }) => {
// //   return (
// //     <div>
// //       <MyGrandChild state={state} setState={setState} />
// //     </div>
// //   );
// // };

// // const MyGrandChild = ({ state, setState }) => {
// //   const increment = () => {
// //     setState(state + 1);
// //   };

// //   return (
// //     <div>
// //       <button onClick={increment}>increment</button>
// //       {state}
// //     </div>
// //   );
// // };



// import "./styles.css";
// import { useState } from "react";

// export default function App() {
//   const [mode, setMode] = useState("light");
//   const styles = {
//     background: mode === "light" ? "black" : "teal"
//   };
//   return (
//     <div style={styles} className="App">
//       <List setMode={setMode} />
//     </div>
//   );
// }
// const List = ({ mode,setMode }) => {
//   return (
//     <div>
//       <ListItems value="light🎉" setMode={setMode} />
//       <ListItems value="dark" setMode={setMode} />
//     </div>
//   );
// };
// const ListItems = ({ value, mode, setMode }) => {
//   return (
//     <div className="listitems">
//       <Button value={value}  mode={mode} setMode={setMode} />
//     </div>
//   );
// };
// const Button = ({ value,mode, setMode }) => {
//   return (
//     <div>
//       <button onClick={() => setMode(value === "light🎉" ? "light" : "dark")}>
//         {value}
//       </button>
//     </div>
//   );
// };

// import "./styles.css";

// import React from "react";
// import { useState } from "react";

// export  function ThemeuseContext() {
//   const [mode, setMode] = useState("light");
//   const styles = {
//     backgroundColor: mode === "light" ? "orange" : "black"
//   };
//   return (
//     <div style={styles} className="themeuseContext">
//       <List mode={mode} setMode={setMode} />
//     </div>
//   );
// }

// const List = ({ mode,setMode }) => {
//   return (
//     <div>
//       <ListItems value="light🎉" mode={mode} setMode={setMode} />
//       <ListItems value="dark🎉" mode={mode} setMode={setMode} />
//     </div>
//   );
// };

// const ListItems = ({ value, mode,setMode }) => {
//   return (
//     <div className="listitems">
//       <Button value={value} mode={mode} setMode={setMode} />
//     </div>
//   );
// };

// const Button = ({ value,mode, setMode }) => {
//   const styles ={
//     backgroundColor : !(mode === "light") ? "black" : "orange",
//     color :mode === "light" ? "black" : "orange"
//   }
//   return (
//     <div>
//       <button style={styles} onClick={() => setMode(value === "light🎉" ? "light" : "dark")}>
//         {value}
//       </button>
//     </div>
//   );
// };


// using  useContext same above example
// import "./styles.css";
import React from "react";
import { useContext, useState, createContext } from "react";


const themeContext = createContext(null);

export  function ThemeuseContext() {
  const [mode, setMode] = useState("light");
 
  const styles = {
    backgroundColor: mode === "light" ? "orange" : "black"
  };
  return (
    <themeContext.Provider value= {[mode,setMode]}>
    <div style={styles} className="themeuseContext">
      <List />
    </div>
    </themeContext.Provider >
  );
}

const List = () => {
  return (
    <div>
      <ListItems value="light🎉"  />
      <ListItems value="dark🎉"  />
    </div>
  );
};

const ListItems = ({ value}) => {
  return (
    <div className="listitems">
      <Button value={value}  />
    </div>
  );
};

const Button = ({ value}) => {
  const [mode,setMode] = useContext(themeContext)
  const styles ={
    backgroundColor : !(mode === "light") ? "black" : "orange",
    color : mode === "light" ? "black" : "orange"
  }
  return (
    <div>
      <button style={styles} onClick={() => setMode(value === "light🎉" ? "light" : "dark")}>
        {value}
      </button>
    </div>
  );
};

