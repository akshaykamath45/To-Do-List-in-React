import { useState } from "react";
import "./App.css";

function App() {
  const [toDoList, setToDoList] = useState([]); //We use an array to store the tasks.
  const [newText, setNewText] = useState(""); //to get the input text for adding the task.
  const inputChangeHandler = (event) => {
    setNewText(event.target.value);
  };
  const addTask = () => {
    const task={
      id: toDoList.length===0 ? 1 : toDoList[toDoList.length-1]+1,
      taskName: newText
    };
    const newToDoList = [...toDoList, task]; //... is the spread operator.It means that we are copying the old array and adding the new task to it.
    setToDoList(newToDoList);
  };
  const deleteTask = (id) => {
    //Filter Function
    // const arr=["akshay","aditya","james"];
    // const newArr=arr.filter((name)=>{
    //   if(name === "akshay"){
    //     return false;
    //   }else{
    //     return true;
    //   }
    // })
    const newToDoList = toDoList.filter((task) => {
      return (task.id !== id); //It will return false if the task is equal to the taskName and true if it is not equal.Hence the false tasks will be filtered out/deleted.
    });
    setToDoList(newToDoList);
    //setToDoList(toDoList.filter((task) =>{task !== taskName})-->Condensed version of the above code.
  };
  return (
    <div className="App">
      <div className="addTask">
        <input type="text" onChange={inputChangeHandler} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div classname="list">
        {toDoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
