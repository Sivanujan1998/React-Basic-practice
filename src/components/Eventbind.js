import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              message:'hello'
         }
         this.clickhandler2=this.clickhandler2.bind(this)
     }
     
     clickhandler(){
         this.setState({
             message:'goodbye'
         })
         console.log(this)
     }
     clickhandler1(){
        this.setState({
            message:'goodbye1'
        })
        console.log(this)
    }
    clickhandler2(){
        this.setState({
            message:'goodbye2'
        })
        console.log(this)
    }

    clickhandler3=()=>{
        this.setState({
            message:'goodbye3'
        })
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.clickhandler.bind(this)}>Click</button>
                <button onClick={()=>this.clickhandler1()}>Click1</button>
                <button onClick={this.clickhandler2}>Click2</button>
                <button onClick={this.clickhandler3}>Click3</button>
{/*4methods use to click event*/}
            </div>
        )
    }
}

export default EventBind
