import React, {useState} from 'react';
import './App.css';
import MakeTask from './components/MakeTask';

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const taskHandler = (event) =>{
    event.preventDefault();
if(newTask.length === 0){
  return;
}

const taskItem = {
  text: newTask,
  complete: false
};

    setTasks([... tasks, taskItem]);
    setNewTask("");
  }
  const handleTasksDelete = (delIndex) => {
    const filteredTasks = tasks.filter((task, i) => {
      return i !== delIndex;
    });
    setTasks(filteredTasks);
  }
  const taskToggleComplete = (idx) => {
    const updatedTasks = tasks.map((task, i) =>{
      if(idx === i){
        task.complete = !task.complete;
      }
      return task;
    })
    setTasks(updatedTasks);
  }

  return (
    <div className="App">
      <div>
      <form onSubmit={(event) => {
        taskHandler(event);
      }}>
        <input onChange = {(event) => {
          setNewTask(event.target.value);
        }} type="text"
        value={newTask} />
        <button>Add</button>
      </form>
      </div>
      {
        tasks.map((task, i) => {
          const taskClasses = ["bold"];
          if(task.complete){
            taskClasses.push("line-through");
          }

          return(
          <div>
            <input onChange= {(event) =>{
              taskToggleComplete(i);
            }} checked = {task.complete} type="checkBox" />
            <span className = {taskClasses.join(" ")}>{task.text}</span>
            <button onClick={(event)=> {
              handleTasksDelete(i);
}
            }>Delete</button>
          </div>
          );
        })
      }
      
   
    </div>
  );
}

export default App;
