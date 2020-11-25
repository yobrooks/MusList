import React, { useState } from "react";
//import { nanoid } from "nanoid";
import HomePage from "./components/pages/HomePage";
//import NavBar from "./components/navbar/NavBar";
//import { Button } from "./components/auxComps/Button";

//my own components
//import ListEntry from "./components/ListEntry"
//import NewEntryForm from "./components/NewEntryForm"

function App(props) {
  return (
    <div /*style={{ background: "yellow" }}*/>
      {/*      <Button
        children={"Sign Up"}
        type={"button"}
        buttonSize={"btn-med"}
        buttonStyle={"btn-outline-color"}
      />*/}
      <HomePage />
    </div>
  );
}

export default App;
