import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

 class ParentForwardRefInput extends Component {
     constructor(props) {
         super(props)
     this.inputref=React.createRef()
         this.state = {
              
         }
     }
     clickhandler =()=>{
        this.inputref.current.focus()
    }
    render() {
        return (
            <div>
                <ForwardRefInput ref={this.inputref}/>
                <button onClick={this.clickhandler}> Focusinput </button>
            </div>
        )
    }
}

export default ParentForwardRefInput
