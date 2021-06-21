import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'red',
}


function Inline() {
    return (
        <div>
           {/*css path alredy defined in app.js (reguler css) */}
             <h1 className='error'>error</h1>
            <h1 style={heading}> Inline command </h1>
        </div>
    )
}

export default Inline
