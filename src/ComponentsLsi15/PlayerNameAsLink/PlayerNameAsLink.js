import React from 'react'
import { Link } from "react-router-dom";

function PlayerNameAsLink(props) {
    return (
        <li>
          <Link to={{pathname:`/display_stats/:${props.name}`, state:{arr:props.arr}}}>
          {props.name}
          </Link>
       </li>
    )
}

export default PlayerNameAsLink
