import React, { useState } from "react";
import "../styles/NewEntryForm.css"

function NewEntryForm(props){

   //state --> current entry the user is typing
   const [currentEntry, setCurrentEntry] = useState({name:"", type:"", genre:"", note:""});

  function handleSubmit(e){
    e.preventDefault();
    props.addEntry(currentEntry);
    setCurrentEntry({name:"", type:"", genre:"", note:""});
    e.target.reset();
  }

  function handleInputChange(e){
    setCurrentEntry({...currentEntry, [e.target.name]:e.target.value});
  }

    return(
        <form onSubmit={handleSubmit}>
        <h2>Add More Music!</h2>
        <label htmlFor="new-entry-name">Entry Name: </label>
        <input
            type="text"
            id="new-entry-name"
            name="name"
            autoComplete="off"
            placeholder="Entry Name"
            onChange={handleInputChange}
        />
        <br></br>
        <label htmlFor="new-entry-type">Entry Type: </label>
        <select id="new-entry-type" name="type" onChange={handleInputChange}>
          <option value="">--Please choose an option--</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="song">Song</option>
        </select>
        <br></br>
        <label htmlFor="new-entry-genre">Entry Genre: </label>
        <select id="new-entry-genre" name="genre" onChange={handleInputChange}>
          <option value="">--Please choose an option--</option>
          <option value="rap">Rap/Hip-Hop</option>
          <option value="rap">RandB</option>
          <option value="rock">Rock</option>
          <option value="pop">Pop</option>
          <option value="folk">Folk</option>
          <option value="soul">Soul</option>
          <option value="jazz">Jazz</option>
          <option value="blues">Blues</option>
          <option value="techno">Techno/Electronic</option>
          <option value="reggae">Reggae</option>
          <option value="indie">Indie</option>
          <option value="instrumental">Instrumental</option>
          <option value="other">Other</option>
        </select>
        <br></br>
        <textarea 
          id = "new-entry-notes" 
          name = "note" placeholder="Add any notes about the entry here." 
          onChange={handleInputChange}>
        </textarea>
        <br></br>
        <button type="submit" className="btn">Add</button>
      </form>
    );
}

export default NewEntryForm;