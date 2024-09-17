import { useState } from "react"

function UseState(){
   const [count,setCount] = useState(0)
   const [count2,setCount2] = useState(0)
   const[data,setData] = useState({
    name :"prajita",
    age: 22
   })
   const increaseCount =  ()=>{
    setCount(count+1)
   }
   const decreaseCount =() =>{
    setCount(count-1)
   }


    return(
        <>
            <h1>{count}</h1>
            <h1>{data.name}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </>
    )
}

export default UseState