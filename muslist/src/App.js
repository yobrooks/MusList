import React from 'react';
import ListEntry from "./components/ListEntry"

function App(props) {
  const entryList = props.entries.map(item => (
    <ListEntry 
      id = {item.id}
      key={item.id} //special prop used solely by React; a unique value (maybe won't need the id attribute); might change to just a number
      name={item.name}
      type={item.type}
      genre={item.genre}
      note={item.note}
      completed={item.completed}
    />));
  return (
    <div className="App">
      <header className="App-header">
        <h1>MusList</h1>
        <h2>Music User Wants To Hear</h2>
      </header>
      <div className="artist-section">
        <h3>Artists</h3>
        <ul>
          {entryList[0]}
        </ul>
      </div>
      <div className="album-section">
        <h3>Albums</h3>
        <ul>
          {entryList[1]}
        </ul>
      </div>
      <div className="song-section">
        <h3>Songs</h3>
        <ul>
          {entryList[2]}
        </ul>
      </div>
      <form>
        <h2>Add More Music!</h2>
        <label htmlFor="new-entry-name">Entry Name: </label>
        <input
            type="text"
            id="new-entry-name"
            name="text"
            autoComplete="off"
            placeholder="Entry Name"
        />
        <br></br>
        <label htmlFor="new-entry-type">Entry Type: </label>
        <select id="new-entry-type" name="new-entry-type">
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="song">Song</option>
        </select>
        <br></br>
        <label htmlFor="new-entry-genre">Entry Genre: </label>
        <select id="new-entry-genre" name="new-entry-genre">
          <option value="rap">Rap/Hip-Hop</option>
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
        <textarea id = "new-entry-notes" placeholder="Add any notes about the entry here."></textarea>
        <br></br>
        <button type="submit" className="btn">Add</button>
      </form>
    </div>
  );
}

export default App;
