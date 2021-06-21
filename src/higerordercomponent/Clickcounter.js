import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class Clickcounter extends Component {
   
     
     
     /*
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     incrementcount= ()=>{
         this.setState(prevState =>{
                    return {count:prevState.count+1}
         })
     }*/
    render() {
   
        return (
            <div>
               <button onClick={this.props.incrementcount}>  Click {this.props.count} time </button> 
            </div>
        )
    }
}

export default WithCounter(Clickcounter,50)
