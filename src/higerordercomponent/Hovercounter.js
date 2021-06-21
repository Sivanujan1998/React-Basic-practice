import React, { Component } from 'react'
import WithCounter from './WithCounter'

 class Hovercounter extends Component {/*
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
                <h2 onMouseOver={this.props.incrementcount}>  {this.props.name} Hovered {this.props.count} Times</h2>
            </div>
        )
    }
}

export default WithCounter(Hovercounter,20)
