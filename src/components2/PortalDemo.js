import React from 'react'
import ReactDOM from 'react-dom'

//portal use to set a tag under a new division in Index
// normally all components under rooy Id
function PortalDemo() {
    return ReactDOM.createPortal(
        <div>
           <h3> Portal Demo</h3>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalDemo


/*
another exambles

https://codesandbox.io/s/00254q4n6p
https://codepen.io/gaearon/pen/jGBWpE
*/