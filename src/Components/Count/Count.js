import React,{useState} from 'react'
import CounterButton  from '../CounterButtons/CounterButton';
import '../CounterButtons/ConterButton.css'

export default function Count() {

    const [counter, setCounter]=useState(0);
    let increment=(value)=>{setCounter(counter+value)};
    let decrement=(value)=>{setCounter(counter-value)};
    return (
        <div>
            <CounterButton value={1} incrementMethod={increment} decrementMethod={decrement}/>
            <CounterButton value={10}  incrementMethod={increment} decrementMethod={decrement}/>
            <CounterButton value={15} incrementMethod={increment} decrementMethod={decrement}/>
            <div>
                <span className="count">{counter}</span>
                <button onClick={()=>setCounter(0)} className="reset">Reset</button>
           </div>
        </div>
    )

}
