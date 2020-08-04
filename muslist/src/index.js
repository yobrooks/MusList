import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//an array holding objects with entry data
//gets passed to App.js as a prop called entries
//App.js (before return statement) unravels the entry data with the map() function 
//and turns each entry into a list entry component and is used in the lists
const entriesData = [
  {id: "entry-0", name:"Michael Jackson", type:"Artist", genre:"Pop", note:"Has 10 albums", completed: true},
  {id: "entry-1", name:"Songs in the Key of Life", type:"Album", genre:"Soul", note:"By Stevie Wonder", completed: true},
  {id: "entry-2", name:"Electric", type:"Song", genre:"Other", note:"By Alina Baraz", completed: true},
]

ReactDOM.render(
  <React.StrictMode>
    <App entries={entriesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
