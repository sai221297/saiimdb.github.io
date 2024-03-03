import { useState } from 'react';

const Counter = ({ label,theme })=> {
    const className = `counter-wrapper ${theme}`;
    // let count=0;
    const [ count, setCount ] = useState(0);
    const handleDecrease =() =>{
        setCount(count-1);
    }
    const handleIncrease=()=>{
        // setCount(count+1);
        // console.log(count);
        setCount((prevState)=>{
            return prevState + 1;
        })
    }
    const handleUpdate=(e)=>{
        const val = Number(e.target.value || 0);
        setCount(val);
    }
    return (
        <div className={className}>
            <h1>Counter {label}</h1>
            <div>
                <h2></h2>
                <div>
                    <button onClick={handleIncrease}> + </button>
                    {count}
                    <input type="number" placeholder='New value' value = {count} onChange={handleUpdate}/>
                    <button onClick={handleDecrease}> - </button>
                </div>
            </div>
        </div>
    )
}
export default Counter;