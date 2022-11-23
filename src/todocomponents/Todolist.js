import React from 'react'
import Todoelement from './Todoelelment';
import { useSelector } from 'react-redux';


const Todolist = () =>{
    const todo = useSelector(state=>state.todo)




  return (
    <div className='list'>

    {

        todo.map((e)=><Todoelement todoElement={e} />)

    }
      
    </div>
  )
}

export default Todolist
