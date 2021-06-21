import React, { Component } from 'react'

 class Hovercountertwo extends Component {/*
     constructor(props) {
         super(props)
     
         this.state = {
                count:0
         }
     }
     incrementcount=()=>{
         this.setState(prevState => {
            return {count:prevState.count+1}
     })
    }
     */
    render() {
        return (
           <h2 onMouseOver={this.props.incrementCount}>mouse hover {this.props.count}times</h2>
        )
    }
}

export default Hovercountertwo
