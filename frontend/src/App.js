import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Alert from "./components/Alert";
import NoteState from "./context/notes/NoteState";
import { Route , Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App(){

  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {
    setAlert({
      msg : message,
      type : type
    });
    setTimeout(() => {
      setAlert(null);
    } , 5000);
  };

  return(
    <>

      <NoteState>

          <Navbar/>

          <Alert alert={alert}/>
          
          <div className="container">

          <Routes>
            <Route exact path="/" element={<Home showAlert={showAlert}/>}/>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/login" element={<Login showAlert={showAlert}/>}/>
            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}/>
          </Routes>

          </div>

      </NoteState>

    </>
  );
};

export default App;