import React from 'react'

function InputPlayerLsi15(props) {
    return (
       
            <table className="table table-hover caption-top">
       <caption>Enter Information</caption>
          <tbody>
        <tr>
        <td><label>Name </label></td>
        <td>
        <input list="nameList" size="16" id="name" value={props.name} onChange={props.nameChange}></input>

           
            <datalist id="nameList">
                <option value="Messi"></option>
                <option value="Ronaldo"></option>
                <option value="Lewandowski"></option>
                <option value="Neymar"></option>
                
               
            </datalist>
         </td>
    </tr>

    <tr>
        <td><label>Position </label></td>
        <td>
        <input list="positionList" size="16" id="position" value={props.position} onChange={props.positionChange}></input>

           
            <datalist id="positionList">
                <option value="Front"></option>
                <option value="Mid"></option>
                <option value="Center"></option>
                <option value="Sweeper"></option>
                <option value="Center Back"></option>
                <option value="Forward Front"></option>
                <option value="Goal keeper"></option>
               
               
            </datalist>
         </td>
    </tr>

    <tr>
        <td><label>Goals </label></td>
        <td>
        <input type="text" size="16" value={props.goals} onChange={props.goalsChange}></input><br/>
        </td>
    </tr>
    <tr>
        <td><label>Matches </label></td>
        <td>
        <input type="text" size="16" value={props.matches} onChange={props.matchesChange}></input><br/>
        </td>
    </tr>
    </tbody>

    </table>



      
    )
}

export default InputPlayerLsi15
