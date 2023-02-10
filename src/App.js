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
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={inputChangeHandler}/>
        <button onClick={addTask}>Add Task</button>
      </div>

      <div classname="lists">
        {toDoList.map((task)=>{
          return <h1>{task}</h1>
        })}
      </div>
    </div>
  );
}

export default App;
