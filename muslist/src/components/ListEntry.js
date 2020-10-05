import React from "react";

{/*import "../styles/ListEntry.css"*/}
function ListEntry(props){

    return (
        {/*<li className="list-entry" id={props.id}>
        <div className = "entry-info">
          <input type="checkbox" defaultChecked={props.completed}/>
          <label className="entry-label" htmlFor="entry-0">
            {props.name}
          </label>
          <div className = "entry-genre">{props.genre}</div>
          <textarea name="note" defaultValue={props.note} className = "entry-notes"></textarea>
        </div>   
        <div className = "buttons-group">
          <button type="button" className="btn">Edit</button>
          <button type="button" className="btn" onClick={() => props.deleteTask(props.id)}>Delete</button>
        </div>
    </li>*/}
    );
}

export default ListEntry;