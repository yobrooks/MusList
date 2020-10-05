import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//an array holding objects with entry data
//gets passed to App.js as a prop called entries
//App.js (before return statement) unravels the entry data with the map() function 
//and turns each entry into a list entry component and is used in the lists
const entriesData = [
  
]

ReactDOM.render(
  <React.StrictMode>
    {/*<App entries={entriesData}/>*/}
  <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
