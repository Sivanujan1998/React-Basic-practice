import React, { Component } from 'react'

 class Regulercomponent extends Component {
    render() {
        console.log('***********reguler component render**********')
        return (
            <div>
                REgulercomponent {this.props.name}
            </div>
        )
    }
}

export default Regulercomponent
