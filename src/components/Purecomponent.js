import React, { PureComponent } from 'react'
//purecomponent never re render
 class Purecomponent extends PureComponent {
    render() {
        console.log('***********pure component render**********')
        return (
            <div>
                pure component {this.props.name}
            </div>
        )
    }
}

export default Purecomponent
