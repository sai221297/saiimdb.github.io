import { useEffect, useState } from 'react';


const StopWatch = () =>{
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const intervalRef = setInterval(()=>{
            setCount((prevState)=>{
                return prevState + 1;
            })
        },1000);

        return () => {
            clearInterval(intervalRef)
        }
    },[]);

    return (
        <div>
            <h1>StopWatch</h1>
            {count}
        </div>
    )
}

export default StopWatch;