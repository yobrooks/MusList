import React from "react";

export default function ListEntry(props){
    return (
        <li className="list-entry" id={props.id}>
        <div className = "entry-info">
          <input type="checkbox" defaultChecked={props.completed}/>
          <label className="entry-label" htmlFor="entry-0">
            {props.name}
          </label>
          <div className = "entry-genre">Genre</div>
          <textarea name="note" defaultValue={props.note} className = "entry-notes"></textarea>
        </div>   
        <div className = "buttons-group">
          <button type="button" className="btn">Edit</button>
          <button type="button" className="btn">Delete</button>
        </div>
      </li>
    );
}