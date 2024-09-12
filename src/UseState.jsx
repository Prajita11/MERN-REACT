
function UseState(){
    var count = 0
    const increaseCount = ()=>{
        console.log("Clicked plus button")
    }

    const decreaseCount = ()=>{
        console.log("clicked minus button")
    }
    return(
        <>
            <h1>{count}</h1>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </>
    )
}

export default UseState