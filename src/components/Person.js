import React from 'react'

function Person({man}) {
    return (
        <div>
            <h2>my id number {man.id} im {man.age} old my name is {man.name} my special skill is {man.skill}</h2>
        </div>
    )
}

export default Person
