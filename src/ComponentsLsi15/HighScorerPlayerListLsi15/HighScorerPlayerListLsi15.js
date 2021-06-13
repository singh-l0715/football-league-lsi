import React from 'react'
import HighOrLowScorePlayerRowLsi15 from '../HighOrLowScorePlayerRowLsi15/HighOrLowScorePlayerRowLsi15'
function HighScorerPlayerListLsi15(props) {
    return (
       
        <table className="table table-hover caption-top">
                   <caption>Highest Goal Scored</caption>

                   <thead>
                            <tr>
                              
                                <th scope="col">Name</th>
                                <th scope="col">Postion</th>
                                <th scope="col">Matches</th>
                                <th scope="col">Goals</th>
                               
                                
                             </tr>
                    </thead>
                       <tbody>
                       {
                      
                      props.highRow.map((obj,key)=>
                      <HighOrLowScorePlayerRowLsi15  matches={obj.matches} name={obj.name}
                      goals={obj.goals} position={obj.position}
                      key={key}
                      id={key} 
                      arr={obj}
                     
                       />
                     
                      )
                      
                      
                }

                       </tbody>

                       </table>
    )
}

export default HighScorerPlayerListLsi15
