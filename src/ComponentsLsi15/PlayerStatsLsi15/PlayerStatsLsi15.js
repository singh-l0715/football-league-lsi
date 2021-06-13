import React from 'react'

function PlayerStatsLsi15(props) {
    return (
       
        <table className="table caption-top">
        <caption>Perform Operations</caption>

       <tbody>
       <tr>
            <td><button className="btn btn-warning" onClick={props.addPlayer}>Add Player</button></td>
            <td><button className="btn btn-warning" onClick={props.saveEdit}>Save Edit</button></td>
       </tr>

       <tr>
       <td> <button className="btn btn-warning" onClick={props.highestGoals}>Highest Goals</button> </td>
       <td> <button className="btn btn-warning" onClick={props.lowestGoals}>Lowest Goals</button></td>

       </tr>

       <tr>
       {/* <td><button className="btn-warning" onClick={props.totalGoals}>Total Goals</button></td> */}

      <td> <label>Sort By</label></td>

            <td>  
              <select  id="sortList" onChange={props.sortBy}>
                  <option value="name">Name</option>
                  <option value="goals">Goals</option>
                  <option value="matches">Matches</option>
                  <option value="position">Position</option>
                 
                  
                 
      </select></td>
       
       </tr>

       <tr>
        <td>League Total Goals</td>
        <td>{props.tournamentTotalGoals}</td>
      
    </tr>
       
       </tbody>

       </table>
    

    )
}

export default PlayerStatsLsi15
