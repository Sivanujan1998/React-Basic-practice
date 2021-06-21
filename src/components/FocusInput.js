import React, { Component } from 'react'
import RefsDemo from './RefsDemo'

export class FocusInput extends Component {
    constructor(props) {
        super(props)
    this.componentRef=React.createRef()
        this.state = {
             
        }
    }
clickhandler2 = () => {
this.componentRef.current.Focusinput()
}
    
    render() {
        return (
            <div>
                <RefsDemo ref={this.componentRef} />
                <button onClick={this.clickhandler2}>Click to focus</button>
            </div>
        )
    }
}

export default FocusInput
