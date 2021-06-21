import React from 'react'

function Heroforerrorhandle({heroname}) {
    if(heroname === 'joker' ){
        throw new Error('hero name is wrong')
    }
    return (
        <div>
           heroname is {heroname}
        </div>
    )
}

export default Heroforerrorhandle
