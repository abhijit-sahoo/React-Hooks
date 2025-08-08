import React,{useCallback,useState} from 'react'

import Header from './components/Header'

const UseCallback = () =>{
    const [counter,setCounter] = useState(0)

    const NewFn = useCallback(()=>{
        console.log("Hi I am NewFn passed as props to Header")},[counter])
   


    return (
        <>
        <Header NewFn={NewFn}/> {/***since new instance is create hence rerendering happens** to memoize this fn we use useCallback */}
        <h1>Count: {counter}</h1>
        <button onClick={()=>setCounter(prev=>prev + 1)}>Increase By One</button>
        </>
        
    )
}
export default UseCallback