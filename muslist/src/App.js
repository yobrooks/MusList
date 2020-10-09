import React, { useState } from "react";
import { nanoid } from "nanoid";
import NavBar from "./components/navbar/NavBar";
import { Button } from "./components/auxComps/Button";
import { SelectField } from "./components/forms/SelectField";
import { InputField } from "./components/forms/InputField";
import { TextAreaField } from "./components/forms/TextAreaField";

//my own components
//import ListEntry from "./components/ListEntry"
//import NewEntryForm from "./components/NewEntryForm"

function App(props) {
  return (
    <div>
      <InputField />
      <SelectField />
      <TextAreaField />
      <Button>Sign Up</Button>
    </div>
  );
}

export default App;
