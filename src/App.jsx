import React, {useState, useEffect} from 'react'

export const StopWatch= ()=>{
    const [time,setTime] = useState(0);
    const [timerON, setTimeON] = useState(false);

    useEffect(()=>{
        let interval = null;
        if(timerON){
            interval = setInterval(()=>{
                setTime(prevTime => prevTime + 10)
            },10)
        }else{
            clearInterval(interval)
        }

        return ()=> clearInterval(interval)
    }, [timerON])
    return (
        <div className='text-center flex justify-center items-center min-h-[100vh] max-w-[1040px] m-auto'>
          <div>
            <p className='p-5 font-extrabold text-2xl'>Hello.Timer</p>
            <div className='p-5 text-3xl font-mono'>
                <span>{('0' + Math.floor((time / 600000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                <span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
            </div>
            <div>
                {timerON && time !== 0 && (
                    <button className='mx-1 btn' onClick={()=>setTimeON(false)}>Pause</button>
                )}
                {!timerON && time === 0 && (
                    <button className='mx-1 btn' onClick={()=>setTimeON(true)}>Start</button>
                )}
                {!timerON && time !== 0 && (
                    <button className='mx-1 btn' onClick={()=>setTimeON(true)}>Resume</button>
                )}
                {!timerON && time !== 0 && (
                    <button className='mx-1 btn' onClick={()=>setTime(0)}>Reset</button>
                )}
            </div>
          </div>
        </div>
    )
}