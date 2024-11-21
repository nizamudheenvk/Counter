import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementByAmount,increment,decrement,reset } from '../Redux/slice/CounterSlice';

const Home = () => {
    const [amount,setAmount]=useState(0)
    // console.log(amount);
    
    const dispatch = useDispatch()
    const {count} = useSelector(state=>state.counterReducer)
const handleIncrementAmount =()=>{
    if(amount){
        dispatch(incrementByAmount(+amount))

    }else{
        alert("please enter amount")
    }
}

  return (

    
    <div style={{height:"100vh"}} className='align-items-center shadow w-100 bg-black'>
        <h1 style={{textAlign:"center"}} className='text-white py-5'>COUNTER APP</h1>
        <div style={{height:"60vh",width:"60%"}} className=' container mt-5 align-items-center border rounded shadow '>
            <p className='text-center mt-5 text-white' style={{fontSize:"60px"}}>{count}</p>
            <div className='d-flex justify-content-evenly me-3 mt-5'>
            <button onClick={()=>dispatch(decrement())}  className='btn btn-warning'>DICREMENT</button>
            <button onClick={()=>dispatch(reset())} className='btn btn-danger'>RESET</button>
            <button onClick={()=>dispatch(increment())} className='btn btn-success'>INCRIMENT</button>
            
            </div>
            <div className='d-flex justify-content-evenly mt-5 '>
                <input onChange={e=>setAmount(e.target.value)} style={{width:"60%",height:"7vh"}} className='rounded' type="text" />
                <button onClick={handleIncrementAmount} className='btn btn-primary '>INCREMENT BY <br /> AMOUNT</button>
               
            </div>
            <marquee>
                    <h3 className='mt-5 text-white'>counter app</h3>
                </marquee>
           
        </div>
    </div>
  
  )
}

export default Home