import React from 'react'
import "./Textdesc.css"

const Textdesc = (props) => {
    return (
        <div className="textdesc">
            <h2>{props.children}</h2>
        </div>
    )
}

const Textdescparagraph = (props) => {
    return (
        <div className="textdesc">
            <p>{props.children}</p>
        </div>
    )
}


export { Textdesc, Textdescparagraph }