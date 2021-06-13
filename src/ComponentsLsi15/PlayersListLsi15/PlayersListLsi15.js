import React from 'react'
import EachPlayerRowLsi15 from "../EachPlayerRowLsi15/EachPlayerRowLsi15";
function PlayersListLsi15(props) {
    return (
      
        <table className="table table-hover caption-top">
               <caption>List</caption>
                <thead>
                    <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Name</th>
                    <th scope="col">Postion</th>
                    <th scope="col">Matches</th>
                    <th scope="col">Goals</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>

                <tbody>

                    {
                    
                    props.playerArray.map((obj,key)=>
                  

                    <EachPlayerRowLsi15  matches={obj.matches} name={obj.name}
                    goals={obj.goals} position={obj.position}
                    key={key}
                    id={key} 
                    arr={obj}
                    deleteAction={()=>{props.deleteAction(obj,key)}} 
                    updateAction={()=>{props.updateAction(obj,key)}}
                     />
                
                    )
                    
                }
                </tbody>

                </table>
    )
}

export default PlayersListLsi15
