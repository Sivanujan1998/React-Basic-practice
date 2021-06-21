import React, { Component } from 'react'
import Childcomponent from './Childcomponent'

 class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              parename:'parent'
         }
         this.greetparent=this.greetparent.bind(this)
     }
     greetparent(childname){
         alert('Hello'+this.state.parename+' from '+childname)
     }
    render() {
        return (
            <div>
                <Childcomponent greethandler={this.greetparent}></Childcomponent>
            </div>
        )
    }
}

export default ParentComponent
