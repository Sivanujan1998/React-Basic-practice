import React, {Component} from 'react'

class Message extends Component{
    constructor(){
        super()
        this.state=
        {
message:'Welcome Visitor'
        }
        this.state.button='Subscribe'
    }

    changemessage(){
        if(this.state.button==="Subscribe"){
        this.setState({
            message:'Thanks for subscribe',
            button:'Unsubscribe'
        })}else{
        this.setState({
            message:'Welcome Visitor',
            button:'Subscribe'
        })}
    }
    render(){
        return(<div>
            <h1>
                {this.state.message}
                </h1>
                <button onClick={()=>this.changemessage()}>{this.state.button}</button>
                </div>
        )

    }
}
export default Message