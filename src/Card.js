import React,{useState} from 'react'



    const Card = ({name,age,contact})  => {
    const [count, setCount] = useState(0)

    const increment = () =>{
        setCount(count + 1)
    }

    return(

       
        <div class="card p-3 py-5 shadow-lg rounded-lg">
        <h1 class="text-2xl font-bolder text-black">Name: {name}</h1>
        <h1 class="text-2xl font-bolder">Age: {age}</h1>
        <h1 class="text-2xl font-bolder">Contact: {contact}</h1>
        <div class="text-2xl text-red">Money {count}</div>
        <button onClick={increment}> Click me</button>
    </div>
    )
}



export default Card