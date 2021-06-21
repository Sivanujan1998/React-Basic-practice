import React, { Component } from 'react'

 class CounterHandler extends Component {

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

    render() {
        return (
            <div>

{this.props.children(this.state.count, this.incrementcount)}
{/*if we use render() we passed props inside of <tag/> otherwise add children <tag>  </jag>*/}
            </div>
        )
    }
}

export default CounterHandler
