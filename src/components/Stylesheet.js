import React from 'react'
import '../ComponentCSS/myStyle.css'

function Stylesheet(props) {
    let clz1=props.primary? 'primary':' '
    return (
        <div>
            <h1 className={`${clz1} fontxl`} >
Style sheet</h1>        </div>
    )
}

export default Stylesheet
