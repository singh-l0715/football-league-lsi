import React from 'react';
import PlayerNameAsLink from '../PlayerNameAsLink/PlayerNameAsLink';

function HighOrLowScorePlayerRowLsi15(props) {
    return (
        <tr>
       <td>
       <ul>
         <PlayerNameAsLink name={props.name} arr={props}/>
      </ul>  
      </td> 
      <td>{props.position}</td>
      <td>{props.matches}</td>
      <td>{props.goals}</td>
      </tr>
    )
}

export default HighOrLowScorePlayerRowLsi15
