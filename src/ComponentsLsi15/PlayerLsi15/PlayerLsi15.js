import React, { Component } from 'react'

import InputPlayerLsi15 from "../InputPlayerLsi/InputPlayerLsi15";
import PlayerStatsLsi15 from "../PlayerStatsLsi15/PlayerStatsLsi15";
import PlayersListLsi15 from "../PlayersListLsi15/PlayersListLsi15";
import HighScorerPlayerListLsi15 from '../HighScorerPlayerListLsi15/HighScorerPlayerListLsi15';
import LowScorerPlayerListLsi15 from '../LowScorerPlayerListLsi15/LowScorerPlayerListLsi15';

 class PlayerLsi15 extends Component {

    constructor(props) {
        super(props)
    
        this.state = {

            player:{
                position:"Front Forward",
                goals:"3",
                name:"Messi",
                matches:"1",
                
            },
            playerArray:[
        ],
            index:0,
            tournamentTotalGoals:0,
            lowRow:[],
            highRow:[]
        }

        
        this.nameChange = this.nameChange.bind(this)
        this.positionChange = this.positionChange.bind(this)
        this.goalsChange = this.goalsChange.bind(this)
        this.matchesChange = this.matchesChange.bind(this)
        this.addPlayer = this.addPlayer.bind(this)
        this.saveEdit = this.saveEdit.bind(this)
        this.sortBy = this.sortBy.bind(this)

        this.doTotalForArrayElements();

    }

    
    nameChange(e)
    {
        
        this.setState({
            
            player:{
                ...this.state.player,
                name:e.target.value
            }

           })
    }

    positionChange(e)
    {
        this.setState({
            
            player:{
                ...this.state.player,
                position:e.target.value
            }

           })

    }
    goalsChange(e)
    {
        this.setState({
            
            player:{
                ...this.state.player,
                goals:e.target.value
            }

           })

    }
    matchesChange(e)
    {
        this.setState({
            
            player:{
                ...this.state.player,
                matches:e.target.value
            }

           })

    }

    addPlayer()
    {
        this.state.tournamentTotalGoals+=Number(this.state.player.goals);
          this.setState({

                playerArray:[...this.state.playerArray,this.state.player]
            })

    }

    deleteAction(e,index)
    {
    const updatedArray=  this.state.playerArray;
    var deleteGoals=this.state.playerArray[index].goals;
    
    updatedArray.splice(index,1);

       // const updatedExpense=this.state.playerArray.filter((j)=>e.name!==j.name)
        this.setState({

            playerArray:updatedArray,
            tournamentTotalGoals:this.state.tournamentTotalGoals-deleteGoals

        })

        this.lowestGoals();
        this.highestGoals();
     }

     updateAction(e,key)
    {

        this.setState({

            
            player: {...this.player,
            name:e.name,
            matches:e.matches,
            goals:e.goals,
            position:e.position
            
        },
        index:key
      

        })

    }
    


    doTotalForArrayElements()
    {
        var total=0;
        this.state.playerArray.forEach((rec,index)=>{

            total=total+Number(rec.goals);
        });
        
        this.state.tournamentTotalGoals=total;
      
    }
    saveEdit()
    {
        var index=this.state.index;

        //do the new total.
        var newGoals= this.state.player.goals;
       
        //get the current array.
        const tempArr=this.state.playerArray;

        //get the old total of goals for the player.

        var oldGoals=this.state.playerArray[index].goals;

        var diff=oldGoals-newGoals;

        //if differ less than zero then add it to tournament goals.

        if(diff<=0)
        {
            this.state.tournamentTotalGoals +=Math.abs(diff);

        }
        else
        {
            this.state.tournamentTotalGoals -=Math.abs(diff);

        }

        //insert update array in the edited index.
        tempArr.splice(index,1,this.state.player);


        
        this.setState({

            playerArray:tempArr
        
        })
        this.highestGoals();
        this.lowestGoals();

    }

    sortBy(e)
    {
        var d=e.target.value;
       var arrToSort=[...this.state.playerArray];
      const sortedArr=  arrToSort.sort((a, b) => (a[d] < b[d]) ? 1 : -1);

      //console.log(sortedArr);
        this.setState({

            playerArray:sortedArr
        })
    }

    
    highestGoals(e)
    {

        
        var maxGoals=Math.max.apply(Math, this.state.playerArray.map((o,index)=> { return o.goals; }));
        //get the minmum total value.

         var playerRow=[];

        this.state.playerArray.forEach((rec,index)=>{

            if(rec.goals==maxGoals)
            {
                //add the entire minmum total object to array 
                playerRow.push(rec);
            }
            
        });

        this.setState({

            highRow:playerRow
        })
    }

    lowestGoals(e)
    {

        var minGoals=Math.min.apply(Math, this.state.playerArray.map((o,index)=> { return o.goals; }));
        //get the minmum total value.

         var playerRow=[];

        this.state.playerArray.forEach((rec,index)=>{

            if(rec.goals==minGoals)
            {
                //add the entire minmum total object to array 
                playerRow.push(rec);
            }
            
        });

        this.setState({

            lowRow:playerRow
        })

    }


    render() {
        return (
            <div>


            <div className="row">

            <div className="col">

                    <InputPlayerLsi15 
                    name={this.state.player.name}
                    position={this.state.player.position}
                    matches={this.state.player.matches}
                    goals={this.state.player.goals}
                    nameChange={e=>{this.nameChange(e)}}
                    positionChange={e=>{this.positionChange(e)}}
                    goalsChange={e=>{this.goalsChange(e)}}
                    matchesChange={e=>{this.matchesChange(e)}}
                    />

             </div>

             <div className="col">
                    <PlayerStatsLsi15
                     tournamentTotalGoals={this.state.tournamentTotalGoals}
                     addPlayer={()=>{this.addPlayer()}}
                     saveEdit={()=>{this.saveEdit()}}
                     lowestGoals={()=>{this.lowestGoals()}}
                     highestGoals={()=>{this.highestGoals()}}
                     sortBy={e=>{this.sortBy(e)}}
                     
                    />
                </div>

          

            </div>
               
               <div className="row">

               <div className="col">

                <PlayersListLsi15 playerArray={this.state.playerArray}

                deleteAction={(obj,key)=>{this.deleteAction(obj,key)}} 
                updateAction={(obj,key)=>{this.updateAction(obj,key)}}

                />



                </div>
               </div>

            <div className="row">

            <div className="col">

                <HighScorerPlayerListLsi15 highRow={this.state.highRow}/>


             </div>

             
            <div className="col">

            <LowScorerPlayerListLsi15 lowRow={this.state.lowRow}/>


            </div>

            </div>
               


              


            </div>
        )
    }
}

export default PlayerLsi15
