import React from 'react'

const WithCounter = (OriginalComponent,incrementvalue) => {
    class WithCounter extends React.Component{
        constructor(props) {
            super(props)
        
            this.state = {
                 count:0
            }
        }
        incrementcount = ()=>{  
            this.setState(prevState =>{
                       return {count: prevState.count+ incrementvalue}
            })
        }

render(){
            return <OriginalComponent  //name="Sivanujan"
            count={this.state.count}
            incrementcount = {this.incrementcount}
            {...this.props} 
            //help to assign props in App.js
            />
        }
    }
    return WithCounter
}

export default WithCounter