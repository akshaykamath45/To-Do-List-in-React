import { useState } from 'react';
import './App.css';

function App() {
  const [toDoList,setToDoList]=useState([]);//We use an array to store the tasks.
  const [newText,setNewText]=useState("");//to get the input text for adding the task.
  const inputChangeHandler=(event)=>{
    setNewText(event.target.value);
  }
  const addTask=()=>{
    const newToDoList=[...toDoList,newText];//... is the spread operator.It means that we are copying the old array and adding the new task to it.
    setToDoList(newToDoList);
  }
  const deleteTask=(taskName)=>{
    //Filter Function
    // const arr=["akshay","aditya","james"];
    // const newArr=arr.filter((name)=>{
    //   if(name === "akshay"){
    //     return false;
    //   }else{
    //     return true;
    //   }
    // })
    const newToDoList=toDoList.filter((task)=>{
      if(task===taskName){
        return false;
      }else{
        return true;
      }
    })
    setToDoList(newToDoList);
  }
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={inputChangeHandler}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div classname="list">
        {toDoList.map((task)=>{
             return(
                <div>
                <h1>{task}</h1>
                <button onClick={()=>deleteTask(task)}>X</button>
              </div>
             );
        })}
      </div>
    </div>
  );
}

export default App;
