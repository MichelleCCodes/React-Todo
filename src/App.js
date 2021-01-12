import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import { render } from "react-dom";

const tasks = [];

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      tasks: tasks
    }
  }

  handleTaskToggle = taskId => {
    this.setState({
      tasks: this.state.tasks.map(task=>{
        if(task.id === taskId){
          return {
            ...task, completed: !task.completed
          }
        }
        return task; 
      })
    });
  }

  handleTaskAdd = itemName => {
    const task = {
      task: itemName, 
      id: Date.now(), 
      completed: false
    };

   const newTasks = [...this.state.tasks, task]; 

   this.setState({
    tasks: newTasks
  });
  }

  handleTaskCompleted = () => {
    const newTasks = this.state.tasks.filter(task => {
      return(!task.completed); 
    });

  this.setState({
    tasks: newTasks
  })
  }
  
  render() {
    return (
      <div className="App">
        <div className="header">
           <h1>To Do List</h1>
        <TodoList tasks={this.state.tasks} handleTaskToggle={this.handleTaskToggle}/>
           <TodoForm handleTaskAdd={this.handleTaskAdd} handleTaskCompleted={this.handleTaskCompleted}/>
         </div>
       </div>
    )
  }

}

export default App;
