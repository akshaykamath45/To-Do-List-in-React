import { useState } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [toDoList, setToDoList] = useState([]); //We use an array to store the tasks.
  const [newText, setNewText] = useState(""); //to get the input text for adding the task.

  const inputChangeHandler = (event) => {
    setNewText(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: toDoList.length === 0 ? 1 : toDoList[toDoList.length - 1].id + 1,
      taskName: newText,
      completed: false, //If the task is completed or not.
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
      return task.id !== id; //It will return false if the task is equal to the taskName and true if it is not equal.Hence the false tasks will be filtered out/deleted.
    });
    setToDoList(newToDoList);
    //setToDoList(toDoList.filter((task) =>{task !== taskName})-->Condensed version of the above code.
  };

  const completeTask = (id) => {
    setToDoList(
      toDoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
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
            <Task
              taskName={task.taskName}
              id={task.id}
              completed={task.completed}
              deleteTask={deleteTask}
              completeTask={completeTask}

            /> //Passing deleteTask as a prop to Task.js-->Important
          );
        })}
      </div>
    </div>
  );
}

export default App;
