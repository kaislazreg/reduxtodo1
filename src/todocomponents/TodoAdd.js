import React from 'react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {addtodo} from '../redux/todoslice';
   




const TodoAdd = () => {

    const [textinput,setTextinput] = useState('')
    const dispatch = useDispatch()

    const handleadd = ()=>{
        dispatch(addtodo(textinput))
        setTextinput('')
    }



  return (
    <div>
      
    
    <input  placeholder='put your task here' onChange={(el)=>setTextinput(el.target.value)}   />
    <Button variant="info"  onClick={()=>handleadd()} >add</Button>



    </div>
  )
}

export default TodoAdd
