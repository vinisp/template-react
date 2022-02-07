import "./App.scss";
import Nav from "./Components/Nav";
import Home from "./Pages/Complete/Home";
import { useState } from "react";


function App() {
  return (
    <>
        <div className="App">
      
        <Nav></Nav>
        
        <Home />
        
      </div>
      
    </>
  );
}

export default App;
