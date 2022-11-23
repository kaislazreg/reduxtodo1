import { createSlice } from '@reduxjs/toolkit';
import {v4 as uuidv4} from 'uuid';

const initialState = [
  { id:uuidv4(), text: "Doing Homeworks", done: false},
  { id:uuidv4(), text: "i have to see some friends !", done: false
 },
  { id:uuidv4(), text: "Learning more of Redux", done: false},
]
const todoslice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo:(state,action) =>{
      const newtodo={
        id : uuidv4(),
        done : false,
        text:action.payload,
      }
      state.push(newtodo)
    },


    deletTodo:(state,action)=> {
      state = state.filter(e=>e.id!==action.payload)
      return state
    },


    doneUndone :(state,action)=>{
      const donelist = state.find(e =>e.id===action.payload)
      donelist.done =! donelist.done
    },

    
  }
});

    
export const {doneUndone , deletTodo ,addtodo } = todoslice.actions 

export default todoslice.reducer