import React, { Component } from 'react'

export class ClassClick extends Component {

    clickhandeler(){
        console.log('im in Class CLicked')
    }
    render() {
        return (
            <div>
                <button onClick={this.clickhandeler}>Clickme</button>
            </div>
        )
    }
}

export default ClassClick
