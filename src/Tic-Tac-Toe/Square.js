import React from 'react'

export default function Square(props) {
    return (
        <div>
           <button className="ticbtn" onClick={props.onClick}>
               {props.value}
           </button>
        </div>
    )
}
