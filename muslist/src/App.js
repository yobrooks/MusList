import React, { useState } from "react";
import { nanoid } from "nanoid";
import HomePage from "./components/pages/HomePage";

//my own components
//import ListEntry from "./components/ListEntry"
//import NewEntryForm from "./components/NewEntryForm"

function App(props) {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
