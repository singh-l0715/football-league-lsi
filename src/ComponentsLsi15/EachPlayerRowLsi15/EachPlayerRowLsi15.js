import React from 'react';
import PlayerNameAsLink from '../PlayerNameAsLink/PlayerNameAsLink'



function EachPlayerRowLsi15(props) {
    return (
       
        <tr>
        <td>{props.id}</td>
       <td>
       <ul>
       <PlayerNameAsLink name={props.name} arr={props.arr}/>
      </ul>  
      </td> 
      <td>{props.position}</td>
      <td>{props.matches}</td>
      <td>{props.goals}</td>
      <td><button onClick={props.deleteAction} className="btn btn-warning">Delete</button></td>
      <td><button onClick={props.updateAction} className="btn btn-warning">Edit</button></td>
      </tr>
    )
}

export default EachPlayerRowLsi15
