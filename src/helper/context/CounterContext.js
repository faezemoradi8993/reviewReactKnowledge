import React, {useContext, useState,createContext} from 'react'


const CountContext = createContext(); 
const CountContextSetCount = createContext(); 


function CountProvider({children}){
    const [Count, SetCount] = useState(0);
    return(
        <CountContext.Provider value={Count}>
            <CountContextSetCount.Provider value={SetCount}>
                {children}
            </CountContextSetCount.Provider>
        </CountContext.Provider>
    )
}

function useCountState(){
   return useContext(CountContext)
}

function useCountSetState(){
    return useContext(CountContextSetCount)
}
function useCountActionIncrease(){
    const setCount = useCountSetState()
    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }
    return {increment}
}
function useCountActionDecrease(){
    const setCount = useCountSetState()
    const decriment = () => {
        setCount(prevCount => prevCount - 1)
    }
    return {decriment}
}

export {useCountState, useCountSetState, useCountActionIncrease , useCountActionDecrease}
export default CountProvider

