import React from 'react'
import './ConterButton.css'

export default function CounterButton(props) {
    return (
       <div>
           <button onClick={()=>props.incrementMethod(props.value)}>+{props.value}</button>
           <button onClick={()=>props.decrementMethod(props.value)}>-{props.value}</button>
       </div>
    );
}

