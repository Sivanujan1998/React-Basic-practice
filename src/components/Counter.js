import React, { Component } from 'react'

 class Counter extends Component {
constructor(props){
    super(props)
    this.state={
        count:0
    }
}
increment(){
    this.setState({
        count: this.state.count+1
    },//call back
    ()=>{
        console.log('Callback value',this.state.count)
    }
    )
    console.log('Callback value',this.state.count)
    
}
increment1(){
    this.setState((prevState,props)=>({
        count:prevState.count+props.addValue

    }))
    console.log('Callback value',this.state.count)
}
incrementsix(){
    this.increment1()
    this.increment1()
    this.increment1()
    this.increment1()
    this.increment1()
    this.increment1()
}

    render() {
        return (
            <div>
               <div> count- {this.state.count}</div>
                <button onClick={() => this.incrementsix()}>Increment</button>
            </div>
        )
    }
}

export default Counter
