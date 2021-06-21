import React from 'react'

function Memocom({name}) {
    console.log('rendering memo com')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(Memocom)
