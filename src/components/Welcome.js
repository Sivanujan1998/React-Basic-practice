import React,{ Component } from 'react'
/*
class Welcome extends Component{
    render(){
        return <h1>Class has Component</h1>
    }
}*//*

class Welcome extends Component{
    render(){
        return <h1>{this.props.name}===== {this.props.heroname}</h1>
    }
}*/

class Welcome extends Component{
    render(){
        const{name,heroname}=this.props
        //const{state1,state2}=this.state
        return <h1>{name}===== {heroname}</h1>
    }
}
export default Welcome;