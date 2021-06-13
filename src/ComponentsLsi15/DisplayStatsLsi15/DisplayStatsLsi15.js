
import React, { Component } from 'react'

 class DisplayStatsLsi15 extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             player:"",
             arr:[],
             strikeRate:0,
        }
    }
    

    componentDidMount()
     { const { player } = this.props.match.params;
        const {arr}=this.props.location.state;

        var matches= arr.matches;
        var goals=arr.goals;
        var rate=0;
        if(goals>0)
        {
            rate=(matches/goals).toFixed(2);
        }
    

        this.setState({
            player:player,
            arr:arr,
            strikeRate:rate
        })

    }
   

    render() {
        return (
            <div className="card-row">

                <div className="card">
                   
                    <img className="card-img-top" src={`${process.env.PUBLIC_URL}/ImagesLsi15/${this.state.arr.name}.jpg`} 
                    onError={(e)=>{ if (e.target.src !== `${process.env.PUBLIC_URL}/ImagesLsi15/default.jpg`) 
                    { e.target.onerror = null; e.target.src=`${process.env.PUBLIC_URL}/ImagesLsi15/default.jpg`; } }}
                    alt="Card image cap"></img>

                <div className="card-body">
                    <h5 className="card-title">Player League Statistics</h5>
                    <p className="card-text">
                        Player {this.state.arr.name} had a strike rate of {this.state.strikeRate} % in this league</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Name: {this.state.arr.name}</li>
                    <li className="list-group-item">Position: {this.state.arr.position}</li>
                    <li className="list-group-item">Matches: {this.state.arr.matches}</li>
                    <li className="list-group-item">Goals: {this.state.arr.goals}</li>
                   
                </ul>

                
                </div>

            </div>
        )
    }
}

export default DisplayStatsLsi15
