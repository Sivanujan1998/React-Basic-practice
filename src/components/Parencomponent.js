import React, { Component, PureComponent } from 'react'
import Regulercomponent from './Regulercomponent'
import Purecomponent from './Purecomponent'
import Memocom from './Memocom'

 class Parencomponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              name:'Sivanujan'
         }
     }
     componentDidMount(){
         setInterval(()=>{//timer
this.setState({
    name:'sivanujan'
})
         },2000)
     }
     
    render() {
        console.log('***********parent component render**********')
        return (
            <div>
                Parent component
                <Memocom name={this.state.name}/>
                <Regulercomponent name={this.state.name}/>
                <Purecomponent name={this.state.name}/>
            </div>
        )
    }
}

export default Parencomponent
