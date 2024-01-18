import React, { useEffect, useState } from 'react'
import './Task.css';
import { MdDeleteForever } from "react-icons/md";











const Task = () => {
  const [task, setTask] = useState([])
  const [add, setAdd] = useState(false)
  const [title, setTitle] = useState('')
  const [from, setFrom] = useState('')
  const [timeTO, setTimeTO] = useState('')
  const [completed, setComplete] = useState([])



  const handleComplete = (index) => {
    let updai = {...task[index]}
    handleDelete(index)
    updai.iscomplete = !updai.iscomplete;
   let completedTask = [...completed] 
   completedTask.push(updai)
   setComplete(completedTask)

   localStorage.setItem('complete', JSON.stringify(completedTask))
    
  }
  const handleCompleteClick=(index) =>{
    let updai = {...completed[index]}
    handleCompleteDelete(index)
    updai.iscomplete = !updai.iscomplete;
   let uncompletedTask = [...task] 
   uncompletedTask.push(updai)
   setTask(uncompletedTask)

   localStorage.setItem('task', JSON.stringify(uncompletedTask))
    
  }
  const handleCompleteDelete = (index) =>{
    let filtered = [...completed]
    filtered.splice(index, 1)
    setComplete(filtered)
    localStorage.setItem('complete' , JSON.stringify(filtered))
  }
  const handleDelete =(index)=>{
    let filtered = [...task]
    filtered.splice(index, 1)
    setTask(filtered)
    localStorage.setItem('task' , JSON.stringify(filtered))
  }



  const handleAdder = () => {
      let todo = {
        'title' : title,
        'from' : from,
        'to' : timeTO,
        'iscomplete': false,
      }
      let updatedtodo = [...task]
      updatedtodo.push(todo)
      setTask(updatedtodo)

    localStorage.setItem('task' , JSON.stringify(updatedtodo))
    setAdd(false)
  }
  useEffect(()=>{
    let local = JSON.parse(localStorage.getItem('task'));
    if(local){
      setTask(local)
    }
    let completedtodo = JSON.parse(localStorage.getItem('complete'))
    if(completedtodo){
      setComplete(completedtodo)
    }
  },[])




  return (
    <div className="parenter">
    <div className='article-wrapper'>
      {task.map((todolist, index) => {
        return(
          <article className='article' key={index}>
        
          <div className="description">
              <div className={ todolist.iscomplete ? 'checked check' : 'check'} onClick={()=>{handleComplete(index)}}></div>
              <div className={todolist.iscomplete ? 'checker true' : 'true'}>
              <h2>{todolist.title}</h2>
              <p>{todolist.from } - {todolist.to}</p>
              </div>
            </div>
    
            <MdDeleteForever className='delete' onClick={() =>{handleDelete(index)}}/>
          </article>
        )
      })}
      {completed.map((todolist, index) => {
        return(
          <article className='article' key={index}>
        
          <div className="description">
              <div className={ todolist.iscomplete ? 'checked' : 'check'} onClick={()=>{handleCompleteClick(index)}}></div>
              <div className={todolist.iscomplete ? 'checker true' : 'true'}>
              <h2>{todolist.title}</h2>
              <p>{todolist.from } - {todolist.to}</p>
              </div>
            </div>
    
            <MdDeleteForever className='delete' onClick={() =>{handleCompleteDelete(index)}}/>
          </article>
        )
      })}
      
      <div className={add ? 'josh' : 'adding '} onClick={() => {setAdd(true)}}>
        <h1>+</h1>
      </div>


      

    </div>
    {add ? (
        <div className="popup">
          <div className='theme'>
          <h1>Add Task</h1>
          <div className="close" onClick={() => {setAdd(false)}}>X</div>
          </div>
          <div className="content">
            <textarea 
              className='title'
              onChange={(e) => {setTitle(e.target.value)}}
              value={title} id="" cols="30" rows="1">
                          
            </textarea>
             <div className="time">
             <input type="time" onChange={(e) =>{setFrom(e.target.value)}} className='from' value={from} />
             <input type="time" onChange={(e) =>{setTimeTO(e.target.value)}} value={timeTO} className='timeto'/>
             </div>
          </div>
          <div className="btn">
          <div className="cancel" onClick={() => {setAdd(false)}}>cancel</div>
          <div className="addBtn" onClick={() => {handleAdder()}}>Add</div>
          </div>
        </div>
      ) :  '' }
    </div>
  )

}

export default Task
