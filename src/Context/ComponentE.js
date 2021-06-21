import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './UserContext'

 class ComponentE extends Component {
     static contextType=UserContext
     //this way use only class & i contain only one value
    render() {
        return (
            <div>
                Component E context  {this.context}
                <ComponentF/>
            </div>
        )
    }
}

//ComponentE.contextType=UserContext

export default ComponentE
