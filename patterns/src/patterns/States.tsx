import React, { useReducer } from 'react'
import  './../App.css'

export default function State(){
  const [task,updateTask]= useReducer((prev,next)=>({
    ...prev,...next
  }),
  {
    name:"",
    isCompleted:false,
    subTasks:[],
    progress:0,
    userId:''
  }
  )
  return (
    <form action="" className='form'>
      <input type="text"  placeholder='Username' className='user' onChange={(e)=> updateTask({name:e.target.value})}/>
      <input type="text"  placeholder='Username' className='pass'/>
      <button onClick={()=>{
        updateTask({
          name:"Code Clenup",
          isCompleted:true
        })
      }}>{task.name}</button>
      </form>
  )
}