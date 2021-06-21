import React from 'react'

/*function Greet(){
    return <h1>hello sivanujan</h1>
}*/
/*
const Greet=(props)=>{
return(<div>
<h1>hello {props.name} -----  {props.heroname}</h1>
<u>{props.children}</u>
</div>
)
}
*/

const Greet=props=>{
    const {name,heroname}=props
    return(<div>
    <h1>hello {name} -----  {heroname}</h1>
    <u>{props.children}</u>
    </div>
    )
    }
export default Greet;

