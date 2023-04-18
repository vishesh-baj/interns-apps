import React,{useState} from 'react'
import './todoapp.css'


const TodoApp = () => {
    const[task,setTask]=useState("")
    const handleChange =(e) =>{
        setTask(e.target.value)
    }
    const AddTask = () =>{
        console.log(task);
    }
  return (
    <div className="todo">
        
        <input type="text" name="text" id=""text onChange={e=>handleChange(e)} placeholder="Add Task here...."/>
        <button className="add-btn" onClick={AddTask}>Add</button>
        
    </div>
  )
}

export default TodoApp;