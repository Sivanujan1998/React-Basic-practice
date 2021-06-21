import React, { Component } from 'react'


 class RefsDemo extends Component {
     constructor(props) {
         super(props)
     this.inputref=React.createRef()
     this.inputref2=React.createRef()
         this.state = {
              
         }
     }
     componentDidMount(){
        this.inputref.current.focus() //create a auto focus
    }
    Focusinput=()=>{
        this.inputref2.current.focus()
    }
    
    clickhandler=()=>{
        alert(this.inputref.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputref} />
                <input type='text' ref={this.inputref2} />
                <button onClick={this.clickhandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
