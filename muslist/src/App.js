import React, { useState } from 'react';
import {nanoid} from "nanoid";

//my own components
import ListEntry from "./components/ListEntry"
import NewEntryForm from "./components/NewEntryForm"


function App(props) {
  const [entries, setEntries] = useState(props.entries);

  function addEntry(entry){
    const newEntry = {
      id:"id-" + nanoid(),
      name:entry.name,
      type:entry.type,
      genre:entry.genre,
      note:entry.note,
      completed:false
    };

    console.log(newEntry.id);
    setEntries([...entries, newEntry]);
  }

  const artists = entries.filter( (entryItem)=>{
    return entryItem.type === "artist";
  });
  const albums = entries.filter((entryItem)=>{
    return entryItem.type === "album";
  });
  const songs = entries.filter((entryItem => {
    return entryItem.type === "song";
  }));

  function deleteTask(id){
    const restOfEntries = entries.filter(entry => id !== entry.id);
    setEntries(restOfEntries);
  }

  // entries stores all the entries the user has entered and passed as a prop from index.js
  //loop thru each entry and make them a ListEntry component
  function makeLists(inputArray){
    return inputArray.map(item => (
      <ListEntry 
        id = {item.id}
        key={item.id} //special prop used solely by React; a unique value (maybe won't need the id attribute); might change to just a number
        name={item.name}
        type={item.type}
        genre={item.genre}
        note={item.note}
        completed={item.completed}
        deleteTask={deleteTask}
      />));
  }

  const artistList = makeLists(artists);
  const albumList = makeLists(albums);
  const songList = makeLists(songs);
  
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>MusList</h1>
        <h2>Music User Wants To Hear</h2>
      </header>
      <div className="artist-section">
        <h3>Artists</h3>
        <ul>
          {artistList}
        </ul>
      </div>
      <div className="album-section">
        <h3>Albums</h3>
        <ul>
          {albumList}
        </ul>
      </div>
      <div className="song-section">
        <h3>Songs</h3>
        <ul>
          {songList}
        </ul>
      </div>
      <NewEntryForm addEntry={addEntry} />
    </div>
  );
}

export default App;
