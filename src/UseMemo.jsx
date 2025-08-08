import React,{useMemo, useState} from 'react'

const UseMemo = () => {
     const [number,setNumber] = useState(0)
    const [counter,setCounter] = useState(0)
    function cubeNum(){
        console.log('Calculation done!')
        return Math.pow(number,3)
    }

    // const result = cubeNum(number);
    const result = useMemo(()=>cubeNum(number),[number])

   

   

  return (
    <div>
        <input type="Number" value={number} onChange={(e)=>(setNumber(e.target.value))} />
        <h1>Cube of the number {result} </h1>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>(setCounter(prev=>prev+1))}>Increase 1</button>

    </div>
  )
}

export default UseMemo