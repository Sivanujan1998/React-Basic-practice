import React, { Component } from 'react'

 class Clickcountertwo extends Component {/*
     constructor(props) {
         super(props)
     
         this.state = {
              count : 0
         }
     }
     incrementcount=()=>{
         this.setState(prevState=>{
             return{count:prevState.count+1}
         })
     }*/
    render() {
        return (
           <button onClick={this.props.incrementCount}>Click {this.props.count} time </button>
        )
    }
}

export default Clickcountertwo
