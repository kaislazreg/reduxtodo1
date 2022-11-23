import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import {deletTodo, doneUndone } from '../redux/todoslice';




const Todoelelment = ({todoElement}) => {

  

    const dispatch = useDispatch()

    const handledelet = (id)=>{
        dispatch(deletTodo(id))
    };
    const handledone =(id)=>{
        dispatch(doneUndone(id))
    };






  return (
    <div className='element'>
    <li>{todoElement.text}</li>

    <div  className='bot'>

    <Button variant="danger"  onClick={()=>handledelet(todoElement.id)} >delete task</Button>
    <Button variant="success" onClick={()=>handledone(todoElement.id)}  >{todoElement.done?"DOne ✔️" :"not Yet "}</Button>

    </div>
      
    </div>
  )
}

export default Todoelelment
